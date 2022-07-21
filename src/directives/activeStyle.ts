import { watchEffect } from 'vue'
export const activeStyle = {
  created(el: HTMLElement, { value }: any) {
    const [style, fn] = value
    watchEffect(() => {
      Object.keys(style).forEach((key: any) => (el.style[key] = fn() ? style[key] : ''))
    })
  },
}
