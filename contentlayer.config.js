import { defineDocumentType, makeSource } from "contentlayer/source-files"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/projects/info/${doc._raw.sourceFileName.replace(/\.mdx?$/, "")}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx?$/, ""),
  },
}

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `projects/**/*.mdx`,
  contentType: "mdx",
  fields: {
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
  computedFields,
}))

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Project],
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