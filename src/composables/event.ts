import { onUnmounted } from 'vue'

export function useEventListener(
  target: EventTarget | undefined | null,
  event: string,
  callback: EventListenerOrEventListenerObject
) {
  if (target) {
    target.addEventListener(event, callback)
    document.addEventListener(event, callback)
  }
  onUnmounted(() => target?.removeEventListener(event, callback, true))
}
