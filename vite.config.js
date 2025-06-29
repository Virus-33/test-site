import { defineConfig } from 'vite'
import mdx from '@mdx-js/rollup'
import react from '@vitejs/plugin-react'
import remarkGfm from 'remark-gfm'
import rehypeSlug from "rehype-slug";
import {remarkTableOfContents} from "remark-table-of-contents";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), mdx(
      {
        remarkPlugins: [remarkGfm, [remarkTableOfContents, {
            containerAttributes: {
                id: 'articleToc'
            },
            containerTagName: '',
            minDepth: 2
        }
        ]],
        rehypePlugins: [rehypeSlug]
      }
  )],
  pages: mdx()
})

