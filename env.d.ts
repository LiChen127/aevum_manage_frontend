/// <reference types="vite/client" />
/// <reference types="vue/macros-global" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// declare module '@vue/runtime-core' {
//   interface GlobalComponents {
//     ElForm: typeof import('element-plus')['ElForm']
//     ElFormItem: typeof import('element-plus')['ElFormItem']
//     ElInput: typeof import('element-plus')['ElInput']
//     ElButton: typeof import('element-plus')['ElButton']
//   }
// }

export {};
