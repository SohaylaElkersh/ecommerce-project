/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

/* Styles */
declare module '*.scss'
declare module '*.sass'
declare module '*.css'