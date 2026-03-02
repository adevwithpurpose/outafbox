
import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const csvFilePath = path.join(__dirname, 'mega_course_database.csv');
const cookiesFilePath = "C:/Users/saf08/Downloads/2f74a69a-cca7-4b36-a4f1-380c0fe8660a.txt";
const outputBaseDir = path.join(__dirname, 'downloads');

// Function to sanitize filenames
function sanitizeFilename(name) {
    return name.replace(/[\\/*?:"<>|]/g, '').trim();
}

async function downloadVideos() {
    console.log("======================================================================");
    console.log("MASS DOWNLOADER: Video Extraction for Missing Files");
    console.log("======================================================================");

    if (!fs.existsSync(cookiesFilePath)) {
        console.error(`[ERROR] Cookie file not found at: ${cookiesFilePath}`);
        return;
    }

    const csv = fs.readFileSync(csvFilePath, 'utf-8');
    const lines = csv.split('\n').slice(1); // Skip header
    const headers = "Module,Subcategory,Type,Post Title,Post URL,Wistia_ID,Cloud_Video_Link".split(',');

    const coursesToDownload = lines.map(line => {
        const values = line.split(',');
        const course = {};
        headers.forEach((header, i) => {
            course[header.trim()] = values[i] ? values[i].trim() : '';
        });
        return course;
    }).filter(course =>
        course.Cloud_Video_Link === 'Error' &&
        course.Wistia_ID &&
        course.Wistia_ID !== 'None' &&
        course.Type === 'Video'
    );

    if (coursesToDownload.length === 0) {
        console.log("\nNo videos with 'Error' in Cloud_Video_Link found. Nothing to download.");
        console.log("======================================================================");
        console.log("MASS DOWNLOADER COMPLETE");
        console.log("======================================================================");
        return;
    }

    console.log(`\nFound ${coursesToDownload.length} videos to download.\n`);

    for (const course of coursesToDownload) {
        const moduleDir = sanitizeFilename(course.Module);
        const subcategoryDir = sanitizeFilename(course.Subcategory || 'General');
        const title = sanitizeFilename(course['Post Title']);
        const wistiaId = course.Wistia_ID;

        const outputDir = path.join(outputBaseDir, moduleDir, subcategoryDir);
        fs.mkdirSync(outputDir, { recursive: true });

        const outputPath = path.join(outputDir, `${title}.mp4`);

        console.log(`[VIDEO] ${moduleDir} | ${subcategoryDir}`);
        console.log(`  > Downloading: ${title}`);

        const command = [
            'python',
            '-m',
            'yt_dlp',
            '--cookies',
            `"${cookiesFilePath}"`,
            '--referer',
            '"https://www.youradmission.co/"',
            '-f',
            '"best[height<=720]"',
            '-o',
            `"${outputPath}"`,
            `"wistia:${wistiaId}"`
        ].join(' ');

        await new Promise((resolve, reject) => {
            const process = exec(command, (error, stdout, stderr) => {
                if (error) {
                    console.error(`  ✗ Error downloading: ${title}.`);
                    console.error(`    Error: ${error.message}`);
                    if (stderr) console.error(`    stderr: ${stderr}`);
                    reject(error);
                } else {
                    console.log(`  ✓ Saved: ${outputPath}`);
                    if (stdout) console.log(`    stdout: ${stdout}`);
                    resolve(stdout);
                }
            });
        });
        console.log(""); // Add a newline for readability
    }

    console.log("======================================================================");
    console.log("MASS DOWNLOADER COMPLETE");
    console.log("======================================================================");
}

downloadVideos();
