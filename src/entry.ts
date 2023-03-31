// 入口文件
import { App } from "vue";
import MyButton from "./button";
import SFCButton from "./SFCButton.vue";
import JSXButton from "./JSXButton";

// 单独导出
export { MyButton, SFCButton, JSXButton };

// 默认导出install
export default {
  install(app: App): void {
    app.component(MyButton.name, MyButton);
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
  },
};
