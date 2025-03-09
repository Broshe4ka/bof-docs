import { defineConfig } from "vitepress";

export default defineConfig({
  title: "#BoF Дока ",
  lang: "ru",
  head: [
    ["link", { rel: "stylesheet", href: "/custom.css" }], // Подключаем CSS
  ],

  themeConfig: {
    logo: "/icons/bof-logo.svg",

    // Сюда ссылку на основной сайт
    logoLink: "http://localhost:3000",

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
