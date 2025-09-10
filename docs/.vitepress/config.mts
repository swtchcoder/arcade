import { defineConfig } from 'vitepress'

export default defineConfig({
  srcDir: "./",
  base: "/arcade/",
  title: "Arcade",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/swtchcoder/arcade' }
    ]
  }
})
