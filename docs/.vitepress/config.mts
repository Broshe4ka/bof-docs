import { defineConfig } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";

export default defineConfig({
  title: "#BoF Дока ",
  lang: "ru",
  head: [
    ["link", { rel: "stylesheet", href: "/custom.css" }], // Подключаем CSS
  ],

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
