import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const csvFilePath = path.join(__dirname, 'mega_course_database.csv');
const outputDir = path.join(__dirname, 'output');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

const csv = fs.readFileSync(csvFilePath, 'utf-8');
const lines = csv.split('\n');
const headers = lines[0].split(',').map(h => h.trim());

function parseCSVLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current.trim());
  return result;
}

// Process courses from CSV
const rawCourses = lines.slice(1)
  .filter(line => line.trim() !== '')
  .map(line => {
    const values = parseCSVLine(line);
    const course = {};
    headers.forEach((header, i) => {
      course[header] = values[i] || '';
    });
    return course;
  });

// Prepare courses for JSON output
const courses = rawCourses.map(course => ({
  module: course.Module,
  title: course['Post Title'],
  type: course.Type,
  subcategory: course.Subcategory,
  url: course['Post URL'],
  wistiaId: course.Wistia_ID,
  cloudVideoLink: course.Cloud_Video_Link,
  slug: slugify(course['Post Title']),
}));

const modules = courses.reduce((acc, course) => {
  const moduleName = course.module;
  if (!moduleName) return acc;

  if (!acc[moduleName]) {
    acc[moduleName] = {
      name: moduleName,
      slug: slugify(moduleName),
      subcategories: [],
      courses: []
    };
  }
  acc[moduleName].courses.push(course);
  if (course.subcategory && course.subcategory !== 'General' && !acc[moduleName].subcategories.includes(course.subcategory)) {
    acc[moduleName].subcategories.push(course.subcategory);
  }
  return acc;
}, {});

const modulesArray = Object.values(modules);

fs.writeFileSync(path.join(outputDir, 'courses.json'), JSON.stringify(courses, null, 2));
fs.writeFileSync(path.join(outputDir, 'modules.json'), JSON.stringify(modulesArray, null, 2));

console.log('✅ Content built successfully!');
console.log(`   - ${courses.length} courses`);
console.log(`   - ${modulesArray.length} modules`);

function slugify(text) {
  if (!text) return '';
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}
