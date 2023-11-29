import fs from "fs"

type Dictionary = Record<string, string>
type List = string[]

interface Fields {
  user?: string
  public?: string
  title: string
  description?: string
  images?: List
  date?: Date
  tags?: List
  languages?: List
  github?: string
  publicGithub?: Boolean
  endUrl?: string
}

interface Data {
  techStack: Dictionary
  features: Dictionary
  challenges: Dictionary
  practices: List
  notes: List
  fields: Fields
}

// Here we generate the frontmatter part
const generateFrontMatter = (fields: Fields) => {
  let frontMatter = "---\n"
  let isPublic = false
  for (let key in fields) {
    const value = fields[key as keyof typeof fields]

    const valueIsArray = Array.isArray(value)
    if (valueIsArray) {
      const array = value as List
      frontMatter += `${key}: \n${array
        .map((item) => ` - ${item}`)
        .join("\n")}\n`
      continue
    }

    if (key === "date") {
      frontMatter += `${key}: ${(value as Date).getFullYear()}-${
        (value as Date).getMonth() + 1 < 10
          ? "0" + ((value as Date).getMonth() + 1)
          : (value as Date).getMonth() + 1
      }-${
        (value as Date).getDate() + 1 < 10
          ? "0" + ((value as Date).getDate() + 1)
          : (value as Date).getDate() + 1
      }\n`
      continue
    }

    if (key === "public" && value != "false") {
      isPublic = true
      continue
    }

    frontMatter += `${key}: ${value}\n`
  }
  if (isPublic) {
    frontMatter += 'public: "true"\n'
  }
  frontMatter += "---\n"
  return frontMatter
}

const generateMarkdown = (
  projectType: string,
  projectName: string,
  data: Data
) => {
  let md = generateFrontMatter(data.fields) // Call the generateFrontMatter here
  md += `# ${projectType}: ${projectName}\n\n`

  md += "## Project Overview\n\n"

  md += "## Tech Stack\n"
  for (const type in data.techStack) {
    md += `- **${type}**: ${data.techStack[type]}\n`
  }

  md += "\n## Key Features\n"
  for (const feature in data.features) {
    md += `### ${feature}\n${data.features[feature]}\n`
  }

  md += "\n## Development Challenges\n"
  for (const challenge in data.challenges) {
    md += `### ${challenge}\n${data.challenges[challenge]}\n`
  }

  md += "\n## Development Practices\n"
  for (const practice of data.practices) {
    md += `${practice}\n`
  }

  md += "\n## Notes\n"
  for (const note of data.notes) {
    md += `${note}\n`
  }

  let path = "../content/projects"
  if (data.fields.user) {
    path += `/(${data.fields.user})`
  }
  // ensure directory exists
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path, { recursive: true })
  }

  path += `/${projectName}.mdx`

  fs.writeFile(path, md, (err) => {
    if (err) throw err
    console.log("Markdown file has been created!")
  })
}
let data: Data = {
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
    // images: ["image1", "image2"],
    date: new Date(),
    tags: ["tag1", "tag2"],
    languages: ["JavaScript", "TypeScript"],
    github: "https://github.com/test",
    publicGithub: true,
    endUrl: "https://endurl.com",
    user: "test",
    public: "false",
  },
}

generateMarkdown("project_type", "project_name", data)
