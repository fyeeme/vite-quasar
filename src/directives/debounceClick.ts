export const debounceClick = {
  mounted(el: HTMLElement, binding: any) {
    let timer: any = null
    el.addEventListener('click', () => {
      if (timer) return
      if (typeof binding.value !== 'function') return

      binding.value()
      timer = setTimeout(() => (timer = clearTimeout(timer)), binding.arg)
    })
  },
}
