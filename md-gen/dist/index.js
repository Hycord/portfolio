"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
// Here we generate the frontmatter part
const generateFrontMatter = (fields) => {
    let frontMatter = "---\n";
    let isPublic = false;
    for (let key in fields) {
        const value = fields[key];
        const valueIsArray = Array.isArray(value);
        if (valueIsArray) {
            const array = value;
            frontMatter += `${key}: \n${array
                .map((item) => ` - ${item}`)
                .join("\n")}\n`;
            continue;
        }
        if (key === "date") {
            frontMatter += `${key}: ${value.getFullYear()}-${value.getMonth() + 1 < 10
                ? "0" + (value.getMonth() + 1)
                : value.getMonth() + 1}-${value.getDate() + 1 < 10
                ? "0" + (value.getDate() + 1)
                : value.getDate() + 1}\n`;
            continue;
        }
        if (key === "public" && value) {
            isPublic = true;
            continue;
        }
        frontMatter += `${key}: ${value}\n`;
    }
    if (isPublic) {
        frontMatter += 'public: "true"\n';
    }
    frontMatter += "---\n";
    return frontMatter;
};
const generateMarkdown = (projectType, projectName, data) => {
    let md = generateFrontMatter(data.fields); // Call the generateFrontMatter here
    md += `# ${projectType}: ${projectName}\n\n`;
    md += "## Project Overview\n\n";
    md += "## Tech Stack\n";
    for (const type in data.techStack) {
        md += `- **${type}**: ${data.techStack[type]}\n`;
    }
    md += "\n## Key Features\n";
    for (const feature in data.features) {
        md += `### ${feature}\n${data.features[feature]}\n`;
    }
    md += "\n## Development Challenges\n";
    for (const challenge in data.challenges) {
        md += `### ${challenge}\n${data.challenges[challenge]}\n`;
    }
    md += "\n## Development Practices\n";
    for (const practice of data.practices) {
        md += `${practice}\n`;
    }
    md += "\n## Notes\n";
    for (const note of data.notes) {
        md += `${note}\n`;
    }
    let path = "../content/projects";
    if (data.fields.user) {
        path += `/(${data.fields.user})`;
    }
    // ensure directory exists
    if (!fs_1.default.existsSync(path)) {
        fs_1.default.mkdirSync(path, { recursive: true });
    }
    path += `/${projectName}.mdx`;
    fs_1.default.writeFile(path, md, (err) => {
        if (err)
            throw err;
        console.log("Markdown file has been created!");
    });
};
let data = {
    techStack: {
        type1: "text1",
        type2: "text2",
    },
    features: {
        feature1: "description1",
        feature2: "description2",
    },
    challenges: {
        challenge1: "description1",
        challenge2: "description2",
    },
    practices: ["practice1", "practice2"],
    notes: ["note1", "note2"],
    fields: {
        // Add the required fields from your example
        title: "testTitle",
        description: "testDescription",
        images: ["image1", "image2"],
        date: new Date(),
        tags: ["tag1", "tag2"],
        languages: ["JavaScript", "TypeScript"],
        github: "https://github.com/test",
        publicGithub: true,
        endUrl: "https://endurl.com",
        user: "test",
        public: false,
    },
};
generateMarkdown("project_type", "project_name", data);
