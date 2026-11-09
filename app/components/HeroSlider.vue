<script setup lang="ts">
import { projectCollections } from '~/data/projects'

const slides = [
  projectCollections[0]!.photos[0].src,
  projectCollections[2]!.photos[2]!.src,
  projectCollections[3]!.photos[0].src
] as const

const activeIndex = ref(0)
const reducedMotion = ref(false)
let timer: ReturnType<typeof setInterval> | undefined
let motionPreference: MediaQueryList | undefined
let touchStartX = 0
let touchStartY = 0

function stopTimer() {
  if (timer) clearInterval(timer)
  timer = undefined
}

function startTimer() {
  stopTimer()
  if (!import.meta.client || reducedMotion.value || document.hidden) return
  timer = setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % slides.length
  }, 3000)
}

function showSlide(index: number) {
  activeIndex.value = (index + slides.length) % slides.length
  startTimer()
}

function onTouchStart(event: TouchEvent) {
  const touch = event.changedTouches[0]
  if (!touch) return
  touchStartX = touch.clientX
  touchStartY = touch.clientY
}

function onTouchEnd(event: TouchEvent) {
  const touch = event.changedTouches[0]
  if (!touch) return
  const deltaX = touch.clientX - touchStartX
  const deltaY = touch.clientY - touchStartY
  if (Math.abs(deltaX) < 50 || Math.abs(deltaX) < Math.abs(deltaY) * 1.25) return
  showSlide(activeIndex.value + (deltaX < 0 ? 1 : -1))
}

function onMotionChange(event: MediaQueryListEvent) {
  reducedMotion.value = event.matches
  startTimer()
}

onMounted(() => {
  motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
  reducedMotion.value = motionPreference.matches
  motionPreference.addEventListener('change', onMotionChange)
  document.addEventListener('visibilitychange', startTimer)
  startTimer()
})

onBeforeUnmount(() => {
  stopTimer()
  motionPreference?.removeEventListener('change', onMotionChange)
  document.removeEventListener('visibilitychange', startTimer)
})
</script>

<template>
  <section
    class="relative isolate flex min-h-[calc(100svh-5rem)] touch-pan-y items-center justify-center overflow-hidden bg-[#1e4620] px-6 py-24 text-center text-white"
    aria-labelledby="hero-title"
    @touchstart.passive="onTouchStart"
    @touchend.passive="onTouchEnd"
  >
    <div v-for="(src, index) in slides" :key="src" class="absolute inset-0 -z-20 motion-safe:transition-opacity motion-safe:duration-700" :class="index === activeIndex ? 'opacity-100' : 'opacity-0'" aria-hidden="true">
      <img :src="src" alt="" class="h-full w-full object-cover" :class="index === activeIndex ? 'hero-image-active' : ''" :fetchpriority="index === 0 ? 'high' : 'auto'" :loading="index === 0 ? 'eager' : 'lazy'" width="1600" height="1200">
    </div>
    <div class="absolute inset-0 -z-10 bg-gradient-to-b from-[#111827]/70 via-[#111827]/55 to-[#111827]/75" aria-hidden="true" />

    <div class="mx-auto max-w-4xl">
      <p class="hero-enter mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-white/85 sm:text-sm" style="--hero-delay: 80ms">Garten- und Landschaftsbau aus Abensberg</p>
      <h1 id="hero-title" class="hero-enter text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl" style="--hero-delay: 180ms">Außenbereiche, in denen man gern lebt.</h1>
      <p class="hero-enter mx-auto mt-7 max-w-xl text-base leading-7 text-white/90 sm:text-lg" style="--hero-delay: 300ms">Pflasterarbeiten, Naturstein und Terrassen – passend zu Ihrem Zuhause gestaltet.</p>
      <div class="hero-enter mt-10 flex flex-wrap items-center justify-center gap-4" style="--hero-delay: 420ms">
        <NuxtLink to="/projects" class="inline-flex min-h-12 items-center justify-center rounded-full bg-[#1e4620] px-8 text-sm font-semibold text-white shadow-lg transition-colors motion-safe:transition-[transform,background-color,box-shadow] motion-safe:duration-300 hover:bg-[#285b2b] motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Projekte ansehen</NuxtLink>
        <NuxtLink to="/contact" class="inline-flex min-h-12 items-center justify-center rounded-full border border-white/70 px-8 text-sm font-semibold text-white transition-colors motion-safe:transition-[transform,background-color] motion-safe:duration-300 hover:bg-white/15 motion-safe:hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Kontaktieren Sie uns</NuxtLink>
      </div>
    </div>

  </section>
</template>
