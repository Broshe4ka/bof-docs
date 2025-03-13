import { defineConfig } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";
import obsidian from "markdown-it-obsidian";

export default defineConfig({
  title: "#BoF Дока ",
  lang: "ru",
  head: [
    ["link", { rel: "stylesheet", href: "/custom.css" }],
    ["link", { rel: "icon", href: "icons/bof-logo.svg" }],
  ],

  markdown: {
    config: (md) => {
      md.use(obsidian());
    },
  },

  ignoreDeadLinks: true,

  themeConfig: {
    logo: "/icons/bof-logo.svg",

    // Сюда ссылку на основной сайт
    logoLink: "https://bof-lending.vercel.app/",
    nav: [{ text: "Главная", link: "/" }],

    sidebar: generateSidebar({
      documentRootPath: "docs",
      useTitleFromFileHeading: true,
      excludePattern: [".vitepress"],
    }),
  },
});
