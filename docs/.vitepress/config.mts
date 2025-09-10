import { defineConfig } from 'vitepress'

export default defineConfig({
  srcDir: "./",
  
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/swtchcoder/arcade' }
    ]
  }
})
