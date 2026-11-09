import type { Directive } from 'vue'

const observers = new WeakMap<HTMLElement, IntersectionObserver>()

const reveal: Directive<HTMLElement, number | undefined> = {
  getSSRProps() {
    return {}
  },
  mounted(element, binding) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return

    element.style.setProperty('--reveal-delay', `${Math.max(0, binding.value ?? 0)}ms`)
    element.classList.add('reveal-pending')

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return
      element.classList.add('reveal-visible')
      observer.unobserve(element)
      observers.delete(element)
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' })

    observers.set(element, observer)
    observer.observe(element)
  },
  unmounted(element) {
    observers.get(element)?.disconnect()
    observers.delete(element)
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', reveal)
})
