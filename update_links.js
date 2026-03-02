
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const csvFilePath = path.join(__dirname, 'mega_course_database.csv');
const rcloneExecutable = "C:\\\\rclone\\\\rclone.exe";

const rcloneFilesJson = [
    { "Path": "Live Event Replays", "Name": "Live Event Replays", "Size": 0, "MimeType": "inode/directory", "ModTime": "2026-03-02T10:24:36.262Z", "IsDir": true, "ID": "1kyb3cjDxO03p6doeYznzRr6tyqODs2UM" },
    { "Path": "Recent Trainings", "Name": "Recent Trainings", "Size": 0, "MimeType": "inode/directory", "ModTime": "2026-03-02T10:24:28.919Z", "IsDir": true, "ID": "1w5qa39iruyT16z0GprwSrFAAX_FPa30v" },
    { "Path": "Unlocked Tactics Episodes", "Name": "Unlocked Tactics Episodes", "Size": 0, "MimeType": "inode/directory", "ModTime": "2026-03-02T10:23:17.143Z", "IsDir": true, "ID": "1X-mTZHm8PKdcbTs1TOEhm4YudOfqkHAc" },
    { "Path": "Meta Ads  Ad Creative Examples", "Name": "Meta Ads  Ad Creative Examples", "Size": 0, "MimeType": "inode/directory", "ModTime": "2026-03-02T10:23:07.892Z", "IsDir": true, "ID": "1qKlxV3ZghNdf0MlGuhP2jAQRd_A7rcVG" },
    { "Path": "Meta Ads  Foundational Knowledge", "Name": "Meta Ads  Foundational Knowledge", "Size": 0, "MimeType": "inode/directory", "ModTime": "2026-03-02T10:22:27.962Z", "IsDir": true, "ID": "17HJ0_IqlRiiSEHqUGbAkq9qBc9vwvdzm" },
    { "Path": "Retention Trainings (EmailSMS)", "Name": "Retention Trainings (EmailSMS)", "Size": 0, "MimeType": "inode/directory", "ModTime": "2026-03-02T10:22:08.776Z", "IsDir": true, "ID": "110lqscfDfHj6ZZgAV5Yp-GAClG1gK32J" },
    { "Path": "Retention Trainings (EmailSMS)/Email Marketing", "Name": "Email Marketing", "Size": 0, "MimeType": "inode/directory", "ModTime": "2026-03-02T10:22:27.856Z", "IsDir": true, "ID": "1-pa6LNS8X8GvKWih1p5M_X1pA8nJKvu4" },
    { "Path": "Meta Ads  Ad Creative Examples/Remarketing Ads  At or Above Success (at scale)", "Name": "Remarketing Ads  At or Above Success (at scale)", "Size": 0, "MimeType": "inode/directory", "ModTime": "2026-03-02T10:23:11.356Z", "IsDir": true, "ID": "1pE18ktYCFUnw67fsqsveTBneW-M6xqn2" },
    { "Path": "Meta Ads  Ad Creative Examples/Examples of Ad Types", "Name": "Examples of Ad Types", "Size": 0, "MimeType": "inode/directory", "ModTime": "2026-03-02T10:23:07.793Z", "IsDir": true, "ID": "1YsI0OoADNplZFAeOelZHx67fDnQ-pPfP" },
    { "Path": "Unlocked Tactics Episodes/Live Sessions", "Name": "Live Sessions", "Size": 0, "MimeType": "inode/directory", "ModTime": "2026-03-02T10:24:28.726Z", "IsDir": true, "ID": "1kCOIJ7u9Io9B7vmVkXzSQHtzK-ROJ6CX" },
    { "Path": "Unlocked Tactics Episodes/General", "Name": "General", "Size": 0, "MimeType": "inode/directory", "ModTime": "2026-03-02T10:23:16.972Z", "IsDir": true, "ID": "1xoz8Gk4kdLWM7NELbzuHrnfRacWuQVcb" },
    { "Path": "Meta Ads  Foundational Knowledge/SCALING", "Name": "SCALING", "Size": 0, "MimeType": "inode/directory", "ModTime": "2026-03-02T10:22:55.741Z", "IsDir": true, "ID": "1F-UuquTsPsJOx-I-jNdCgKgAUqgycTbO" },
    { "Path": "Recent Trainings/General", "Name": "General", "Size": 0, "MimeType": "inode/directory", "ModTime": "2026-03-02T10:24:36.050Z", "IsDir": true, "ID": "1F3fwhqCEFcgh9uUMsMkTtP6eC6EJmnY-" },
    { "Path": "Live Event Replays/General", "Name": "General", "Size": 0, "MimeType": "inode/directory", "ModTime": "2026-03-02T10:27:08.735Z", "IsDir": true, "ID": "1PevFQTeiHxTuv5omMwgnySG3PofjqWrB" },
    { "Path": "Retention Trainings (EmailSMS)/Email Marketing/Exponential Revenue Growth with Email Marketing (56 min).mp4", "Name": "Exponential Revenue Growth with Email Marketing (56 min).mp4", "Size": 147240496, "MimeType": "video/mp4", "ModTime": "2026-03-02T10:22:27.855Z", "IsDir": false, "ID": "1LL0CtWsdfPirfCKgXx2n2MZLjnoG8nCF" },
    { "Path": "Meta Ads  Ad Creative Examples/Remarketing Ads  At or Above Success (at scale)/Zoe Strollers.mp4", "Name": "Zoe Strollers.mp4", "Size": 245754, "MimeType": "video/mp4", "ModTime": "2026-03-02T10:23:11.355Z", "IsDir": false, "ID": "1nFxGKP69xPt6h9oRW-NJvg1fEjDT5bZV" },
    { "Path": "Meta Ads  Ad Creative Examples/Examples of Ad Types/TEXT OVERLAY.mp4", "Name": "TEXT OVERLAY.mp4", "Size": 568702, "MimeType": "video/mp4", "ModTime": "2026-03-02T10:23:07.793Z", "IsDir": false, "ID": "1vhKtu6Z_Uxi9V0T2Y4i78sagF2BW5V3Q" },
    { "Path": "Meta Ads  Ad Creative Examples/Examples of Ad Types/HOW-TO'S.mp4", "Name": "HOW-TO'S.mp4", "Size": 2010765, "MimeType": "video/mp4", "ModTime": "2026-03-02T10:23:03.861Z", "IsDir": false, "ID": "1n9vkY4NiuTkiUOFJESaXVOFl45U8XbNH" },
    { "Path": "Meta Ads  Ad Creative Examples/Examples of Ad Types/GRID SWAP.mp4", "Name": "GRID SWAP.mp4", "Size": 880104, "MimeType": "video/mp4", "ModTime": "2026-03-02T10:22:59.953Z", "IsDir": false, "ID": "1a7sBamcG4dw7LHf6pGA0eVtf4kmVGKt8" },
    { "Path": "Unlocked Tactics Episodes/General/Episode 17 Maximizing Video Ad Volume (5 min).mp4", "Name": "Episode 17 Maximizing Video Ad Volume (5 min).mp4", "Size": 22339041, "MimeType": "video/mp4", "ModTime": "2026-03-02T10:23:16.971Z", "IsDir": false, "ID": "1Gnf98bqXIt1-VQopZH7bT3JllLIE7cgo" },
    { "Path": "Unlocked Tactics Episodes/Live Sessions/Tactics with Taylor LIVE Episode 5 (1 hr).mp4", "Name": "Tactics with Taylor LIVE Episode 5 (1 hr).mp4", "Size": 370137381, "MimeType": "video/mp4", "ModTime": "2026-03-02T10:24:28.724Z", "IsDir": false, "ID": "1z9dB9oLYJP-NXJlRRcHSyL4Cw1w_F2F_" },
    { "Path": "Unlocked Tactics Episodes/Live Sessions/Tactics with Taylor LIVE Episode 7 (54 min).mp4", "Name": "Tactics with Taylor LIVE Episode 7 (54 min).mp4", "Size": 245675582, "MimeType": "video/mp4", "ModTime": "2026-03-02T10:23:45.975Z", "IsDir": false, "ID": "1V7SlUE05dy3l8aCvPZmSz7Cs56fAdd8D" },
    { "Path": "Meta Ads  Foundational Knowledge/SCALING/Types of Scaling and How to Scale.mp4", "Name": "Types of Scaling and How to Scale.mp4", "Size": 251524363, "MimeType": "video/mp4", "ModTime": "2026-03-02T10:22:55.740Z", "IsDir": false, "ID": "165gNFinPavADDHbvGNbDprAgUHB0Wbiw" },
    { "Path": "Recent Trainings/General/Guide to Profitable Media Buying 2025 + Deck Access (13 min).mp4", "Name": "Guide to Profitable Media Buying 2025 + Deck Access (13 min).mp4", "Size": 29558487, "MimeType": "video/mp4", "ModTime": "2026-03-02T10:24:36.048Z", "IsDir": false, "ID": "12qT5u3KCsVfqyTscZEo7tnG-GBc-73cx" },
    { "Path": "Live Event Replays/General/Wildcard Office Hours ft. Tony Chopp 73125.mp4", "Name": "Wildcard Office Hours ft. Tony Chopp 73125.mp4", "Size": 1466438113, "MimeType": "video/mp4", "ModTime": "2026-03-02T10:27:08.734Z", "IsDir": false, "ID": "1kk1Lk5AuFYqUt6kbQN79IyiDeNqUU-uC" }
];

// Function to sanitize filenames
function sanitizeFilename(name) {
    return name.replace(/[\\/*?:"<>|]/g, '').trim();
}

async function updateCsvWithLinks() {
    console.log("======================================================================");
    console.log("Updating CSV with Google Drive Links");
    console.log("======================================================================");

    const videoLinks = new Map();

    console.log("Generating public links for uploaded videos...");
    for (const file of rcloneFilesJson) {
        if (!file.IsDir) {
            try {
                const command = `"${rcloneExecutable}" link "shooter_drive:admission_videos/${file.Path}"`;
                const link = execSync(command).toString().trim();
                videoLinks.set(file.Path, link);
                console.log(`  ✓ Generated link for: ${file.Path}`);
            } catch (error) {
                console.error(`  ✗ Error generating link for: ${file.Path}`);
                console.error(`    ${error.message}`);
            }
        }
    }
    console.log("Finished generating links.\n");

    console.log("Reading and updating CSV file...");
    const csv = fs.readFileSync(csvFilePath, 'utf-8');
    const lines = csv.split('\n');
    const headers = lines[0].split(',');

    const updatedLines = lines.slice(1).map(line => {
        const values = line.split(',');
        const course = {};
        headers.forEach((header, i) => {
            course[header.trim()] = values[i] ? values[i].trim() : '';
        });

        if (course.Cloud_Video_Link === 'Error') {
            const moduleDir = sanitizeFilename(course.Module);
            const subcategoryDir = sanitizeFilename(course.Subcategory || 'General');
            const title = sanitizeFilename(course['Post Title']);
            const expectedPath = `${moduleDir}/${subcategoryDir}/${title}.mp4`;

            // rclone uses forward slashes, so we do too for matching
            const rclonePath = expectedPath.replace(/\\\\/g, '/');

            if (videoLinks.has(rclonePath)) {
                const newLink = videoLinks.get(rclonePath);
                console.log(`  ✓ Found link for: ${title}`);
                console.log(`    > Old: Error`);
                console.log(`    > New: ${newLink}`);
                course.Cloud_Video_Link = newLink;
            } else {
                console.warn(`  ! Could not find a matching uploaded file for: ${title}`);
                console.warn(`    > Expected path: ${rclonePath}`);
            }
        }
        return headers.map(header => course[header.trim()]).join(',');
    });

    const updatedCsv = [lines[0], ...updatedLines].join('\n');
    fs.writeFileSync(csvFilePath, updatedCsv, 'utf-8');

    console.log("\nCSV file has been updated successfully.");
    console.log("======================================================================");
}

updateCsvWithLinks();
