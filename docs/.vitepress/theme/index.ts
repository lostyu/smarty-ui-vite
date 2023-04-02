import Theme from "vitepress/theme";
import SmartyUI from "../../../src/entry";

// 注册插件所需的demo和demo-block组件
import "vitepress-theme-demoblock/dist/theme/styles/index.css";
import Demo from "vitepress-theme-demoblock/dist/client/components/Demo.vue";
import DemoBlock from "vitepress-theme-demoblock/dist/client/components/DemoBlock.vue";

export default {
  ...Theme,
  // 增强app，导入组件库
  enhanceApp({ app }) {
    app.use(SmartyUI);
    app.component("Demo", Demo);
    app.component("DemoBlock", DemoBlock);
  },
};
