import { defineDocumentType, makeSource } from "contentlayer/source-files"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"

/** @type {import('contentlayer/source-files').ComputedFields} */
const projectComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) =>
      `/projects/info/${doc._raw.sourceFileName.replace(/\.mdx?$/, "")}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx?$/, ""),
  },
}

/** @type {import('contentlayer/source-files').ComputedFields} */
const userComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) =>
      `/users/${doc._raw.sourceFileName.replace(/\.mdx?$/, "")}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx?$/, ""),
  },
}

export const User = defineDocumentType(() => ({
  name: "User",
  filePathPattern: `users/**/*.mdx`,
  contentType: "mdx",
  fields: {
    name: {
      type: "string",
      required: true,
    },
    quote: {
      type: "string",
      required: false,
    },
    profileImage: {
      type: "string",
      required: false,
    },
    website: {
      type: "string",
      required: false,
    },
    github: {
      type: "string",
      required: false,
    },
    twitter: {
      type: "string",
      required: false,
    },
    tiktok: {
      type: "string",
      required: false,
    },
    instagram: {
      type: "string",
      required: false,
    },
    discord: {
      type: "string",
      required: false,
    },
  },
  computedFields: userComputedFields,
}))

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `projects/**/*.mdx`,
  contentType: "mdx",
  fields: {
    user: {
      type: "string",
      required: false,
    },
    public: {
      type: "boolean",
      required: false,
      default: false,
    },
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    images: {
      type: "list",
      of: { type: "string" },
    },
    date: {
      type: "date",
    },
    tags: {
      type: "list",
      of: { type: "string" },
    },
    languages: {
      type: "list",
      of: { type: "string" },
    },
    github: {
      type: "string",
    },
    publicGithub: {
      type: "boolean",
      default: true,
    },
    endUrl: {
      type: "string",
    },
  },
  computedFields: projectComputedFields,
}))

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Project, User],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }]
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted")
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"]
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
  },
})
