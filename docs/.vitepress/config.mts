import { defineConfig } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";
import obsidian from "markdown-it-obsidian";

export default defineConfig({
  title: "#BoF Дока ",
  lang: "ru",
  head: [
    ["link", { rel: "stylesheet", href: "/custom.css" }], // Подключаем CSS
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

    sidebar: generateSidebar({
      documentRootPath: "docs",
      useTitleFromFileHeading: true,
      excludePattern: [".vitepress"],
    }),
  },
});
