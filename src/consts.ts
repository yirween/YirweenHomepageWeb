// 将任何全局数据放入此文件中。
// 您可以使用 'import' 关键字从网站中的任何位置导入此数据。

// 网站标题和描述
export const SITE_LANG = "cn";
export const SITE_TAB = "yirween";
export const SITE_TITLE = "yirween blog";
export const SITE_DESCRIPTION = "yirween's blog";
export const DATE_FORMAT = "ddd MMM DD YYYY";

// 用户配置文件信息
export const USER_NAME = "Yirween";
export const USER_SITE = "https://yirween.netlify.app/"; // 同时，这也是 i18n 配置检索到的站点。
export const USER_AVATAR = "/profile.webp";

// 服务器和过渡设置
export const SERVER_URL = "https://demo.saroprock.com";

// Theme settings
export const DAISYUI_THEME = {
  light: "winter",
  dark: "dracula",
};
export const CODE_THEME = {
  light: "github-light",
  dark: "github-dark",
};

// Menu items for navigation
export const menuItems = [
  { id: "home", text: "遇境", href: "/", svg: "material-symbols:home-outline-rounded", target: "_self" }, // Home page
  { id: "about", text: "围绕", href: "/about", svg: "material-symbols:info-outline-rounded", target: "_self" }, // About page
  {
    id: "blog",
    text: "文章们",
    href: "/blog",
    svg: "material-symbols:book-2-outline-rounded",
    target: "_self",
    subItems: [
      {
        id: "all",
        text: "全部蚊帐",
        href: "/blog",
        svg: "material-symbols:ink-pen-outline-rounded",
        target: "_self",
      }, // All blog
      {
        id: "tech",
        text: "赛博蚊帐",
        href: "/blog/categories/tech",
        svg: "material-symbols:deployed-code-outline",
        target: "_self",
      }, // Technology category
      {
        id: "life",
        text: "活着的蚊帐",
        href: "/blog/categories/life",
        svg: "material-symbols:earthquake-rounded",
        target: "_self",
      }, // Life category
    ],
  }, // Blog page with sub-items
  {
    id: "project",
    text: "小项目",
    href: "/project",
    svg: "material-symbols:code-blocks-outline",
    target: "_self",
  }, // Projects page
  {
    id: "friend",
    text: "友链",
    href: "/friend",
    svg: "material-symbols:supervisor-account-outline-rounded",
    target: "_self",
  }, // Friends page
  {
    id: "contact",
    text: "连接我",
    href: "mailto:contact.s5020@outlook.com", // Contact email
    target: "_blank", // 在新选项卡中打开
    svg: "material-symbols:attach-email-outline-rounded",
  },
];

// 社交媒体和联系人图标
export const socialIcons = [
  {
    href: "https://github.com/yirween",
    ariaLabel: "Github",
    title: "Github",
    svg: "ri:github-line",
  },
  {
    href: "https://space.bilibili.com/648129231",
    ariaLabel: "BiliBili",
    title: "BiliBili",
    svg: "ri:bilibili-line",
  },
];