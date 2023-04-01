import { createApp } from "vue/dist/vue.esm-browser";

import MyButton from "./button";
import SFCButton from "./SFCButton.vue";
import JSXButton from "./JSXButton";
import SmartyUI from "./entry";

createApp({
  template: `
  <div>
    <MyButton color="blue">蓝色按钮</MyButton>
    <MyButton color="green">绿色按钮</MyButton>
    <MyButton color="gray">灰色按钮</MyButton>
    <MyButton color="yellow">黄色按钮</MyButton>
    <MyButton color="red">红色按钮</MyButton>
  </div>
  <div>
    <MyButton :plain="true" color="blue">蓝色按钮</MyButton>
    <MyButton :plain="true" color="green">绿色按钮</MyButton>
    <MyButton :plain="true" color="gray">灰色按钮</MyButton>
    <MyButton :plain="true" color="yellow">黄色按钮</MyButton>
    <MyButton :plain="true" color="red">红色按钮</MyButton>
  </div>
  <div>
    <MyButton size="small">小按钮</MyButton>
    <MyButton size="medium">中按钮</MyButton>
    <MyButton size="large">大按钮</MyButton>
  </div>
  <div>
    <MyButton :round="true" :plain="true" color="blue">蓝色按钮</MyButton>
    <MyButton :round="true" :plain="true" color="green">绿色按钮</MyButton>
    <MyButton :round="true" :plain="true" color="gray">灰色按钮</MyButton>
    <MyButton :round="true" :plain="true" color="yellow">黄色按钮</MyButton>
    <MyButton :round="true" :plain="true" color="red">红色按钮</MyButton>
  </div>
  <div>
    <MyButton color="blue" size="small" round plain icon="search" ></MyButton>
    <MyButton color="green" round plain icon="edit" ></MyButton>
    <MyButton color="gray" size="large" round plain icon="check" ></MyButton>
    <MyButton color="yellow" round plain icon="message" ></MyButton>
    <MyButton color="red" round plain icon="delete" ></MyButton>
  </div>
  `,
})
  .use(SmartyUI)
  .mount("#app");
