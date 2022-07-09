import { onMounted, onUnmounted } from 'vue'

export function useEventListener(
  target: EventTarget | undefined | null,
  event: string,
  callback: EventListenerOrEventListenerObject
) {
  target?.addEventListener(event, callback, true)
  onUnmounted(() => {
    target?.removeEventListener(event, callback, true)
    console.log(16, target, callback)
  })
}
