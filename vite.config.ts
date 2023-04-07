/// <reference types="vitest" />
import { defineConfig } from "vite";

import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

import Unocss from "./config/unocss";
import { BuildOptions } from "vite";

// const rollupOptions: BuildOptions["rollupOptions"] = {
const rollupOptions: BuildOptions["rollupOptions"] = {
  external: ["vue"], // vue不会被打包在这里
  output: {
    globals: {
      vue: "Vue", // umd/iffe全局模块中组件库的名字
    },
    exports: "named",
  },
};

export default defineConfig({
  plugins: [vue(), vueJsx({}), Unocss()],

  build: {
    rollupOptions,
    // minify: "terser",
    minify: "esbuild",
    sourcemap: true,
    // reportCompressedSize: true, // 默认就是true
    cssCodeSplit: true, // 独立输出css文件
    lib: {
      entry: "./src/entry.ts",
      name: "SmartyUI",
      fileName: "smarty-ui",
      formats: ["es", "umd", "iife"],
    },
  },
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency) or no
    environment: "happy-dom",
    // 支持tsx组件
    transformMode: {
      web: [/.[tj]sx$/],
    },
  },
});
