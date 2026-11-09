<script setup lang="ts">
const route = useRoute()
const menuOpen = ref(false)
const menuButton = ref<HTMLButtonElement | null>(null)
const links = [
  { label: 'Startseite', to: '/' },
  { label: 'Projekte', to: '/projects' },
  { label: 'Kontakt', to: '/contact' }
] as const

const isActive = (path: string) => route.path === path
const closeMenu = () => { menuOpen.value = false }

watch(() => route.path, closeMenu)

function onMenuKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape' && menuOpen.value) {
    closeMenu()
    menuButton.value?.focus()
  }
}
</script>

<template>
  <header class="relative z-20 border-b border-[#a9bca8]/50 bg-[#f9fafb]" @keydown="onMenuKeydown">
    <nav class="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-6 lg:px-10" aria-label="Hauptnavigation">
      <NuxtLink to="/" class="inline-flex shrink-0 items-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1e4620]" @click="closeMenu">
        <img src="/enis-shala-logo.png" alt="Enis Shala Gartenbau"  class="h-14 w-40 sm:w-48" fetchpriority="high">
      </NuxtLink>
      <div class="hidden items-center gap-9 md:flex">
        <NuxtLink v-for="link in links" :key="link.to" :to="link.to" :aria-current="isActive(link.to) ? 'page' : undefined" class="border-b-2 py-2 text-sm font-medium transition-colors focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1e4620]" :class="isActive(link.to) ? 'border-[#1e4620] text-[#1e4620]' : 'border-transparent text-[#111827]/70 hover:text-[#1e4620]'">{{ link.label }}</NuxtLink>
      </div>
      <button ref="menuButton" type="button" class="inline-flex size-11 items-center justify-center rounded-md border border-[#1e4620]/20 text-[#1e4620] hover:bg-[#1e4620]/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1e4620] md:hidden" :aria-label="menuOpen ? 'Menü schließen' : 'Menü öffnen'" aria-controls="mobile-navigation" :aria-expanded="menuOpen" @click="menuOpen = !menuOpen">
        <svg v-if="!menuOpen" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="size-6"><path stroke-linecap="round" d="M4 7h16M4 12h16M4 17h16" /></svg>
        <svg v-else aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="size-6"><path stroke-linecap="round" d="M5 5l14 14M19 5L5 19" /></svg>
      </button>
    </nav>
    <Transition enter-active-class="motion-safe:transition-[opacity,transform] motion-safe:duration-300" enter-from-class="motion-safe:opacity-0 motion-safe:-translate-y-2" leave-active-class="motion-safe:transition-[opacity,transform] motion-safe:duration-200" leave-to-class="motion-safe:opacity-0 motion-safe:-translate-y-2">
      <div v-if="menuOpen" id="mobile-navigation" class="border-t border-[#1e4620]/10 bg-[#f9fafb] px-6 pb-5 pt-2 shadow-lg md:hidden">
        <NuxtLink v-for="link in links" :key="link.to" :to="link.to" :aria-current="isActive(link.to) ? 'page' : undefined" class="block rounded-md px-3 py-3 text-base font-medium focus-visible:outline-2 focus-visible:outline-[#1e4620]" :class="isActive(link.to) ? 'bg-[#1e4620]/10 text-[#1e4620]' : 'text-[#111827]/75 hover:bg-[#1e4620]/5'" @click="closeMenu">{{ link.label }}</NuxtLink>
      </div>
    </Transition>
  </header>
</template>
