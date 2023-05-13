import { sidebar } from "vuepress-theme-hope";

// 精选图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87
export default sidebar([
  "/DailyRoutine",
  "/Fitness",
  // 读书笔记架构更换到 docsify，不能使用相对链接
  { text: "📖 读书笔记", icon: "read", link: "",
    prefix: "/books/",
    collapsible: true,
    children: [
      "2017-09-03-smb_lan_sharing.md",
      "2018-05-15-aria2_a_new_download_tool.md",
      "2022-11-03-ffmpeg_screen_recording.md",]
  },
  // 指定显示页面
  {
    text: "🌐 页面开发",
    icon: "",
    prefix: "/web/",
    link: "",
    collapsible: true,
    children: "structure",
  },
  {
    text: "博客文章",
    icon: "blog",
    prefix: "/_posts/",
    link: "/blog",
    collapsible: true,
    children: "structure",
  },
]);
