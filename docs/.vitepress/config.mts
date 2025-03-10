import { defineConfig } from "vitepress";

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

    sidebar: [
      {
        text: "Общая информация",
        items: [{ text: "О проекте", link: "/" }],
      },
      {
        text: "Для Игроков",
        items: [{ text: "Внутреигровые механики", link: "/ingame" }],
      },
      {
        text: "Для Юр. Лиц",
        items: [{ text: "Политика конфендициальности", link: "/legal" }],
      },
    ],
  },
});
