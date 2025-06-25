import { defineConfig } from 'vite'
import mdx from '@mdx-js/rollup'
import react from '@vitejs/plugin-react'
import remarkGfm from 'remark-gfm'
import rehypeSlug from "rehype-slug";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), mdx(
      {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug]
      }
  )],
  pages: mdx()
})
