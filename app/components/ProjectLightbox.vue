<script setup lang="ts">
import type { Project } from '~/types/project'

const selected = ref<Project | null>(null)
const isOpen = computed(() => selected.value !== null)
const dialog = ref<HTMLElement | null>(null)
const closeButton = ref<HTMLButtonElement | null>(null)
let trigger: HTMLElement | null = null
let previousOverflow = ''

function open(project: Project, source: HTMLElement) {
  trigger = source
  selected.value = project
}

function close() {
  selected.value = null
}

function onKeydown(event: KeyboardEvent) {
  if (!isOpen.value) return
  if (event.key === 'Escape') {
    event.preventDefault()
    close()
    return
  }
  if (event.key === 'Tab') {
    const focusable = dialog.value?.querySelectorAll<HTMLElement>('button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
    if (!focusable?.length) {
      event.preventDefault()
      dialog.value?.focus()
      return
    }
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last?.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first?.focus()
    } else if (!dialog.value?.contains(document.activeElement)) {
      event.preventDefault()
      first?.focus()
    }
  }
}

function onFocusIn(event: FocusEvent) {
  if (isOpen.value && !dialog.value?.contains(event.target as Node)) closeButton.value?.focus()
}

watch(isOpen, async (openNow, wasOpen) => {
  if (openNow) {
    previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeydown)
    document.addEventListener('focusin', onFocusIn)
    await nextTick()
    closeButton.value?.focus()
  } else if (wasOpen) {
    document.body.style.overflow = previousOverflow
    document.removeEventListener('keydown', onKeydown)
    document.removeEventListener('focusin', onFocusIn)
    await nextTick()
    trigger?.focus()
    trigger = null
  }
})

onBeforeUnmount(() => {
  if (import.meta.client && isOpen.value) document.body.style.overflow = previousOverflow
  if (import.meta.client) {
    document.removeEventListener('keydown', onKeydown)
    document.removeEventListener('focusin', onFocusIn)
  }
})

defineExpose({ open })
</script>

<template>
  <Teleport to="body">
    <Transition enter-active-class="transition-opacity duration-200 motion-reduce:transition-none" enter-from-class="opacity-0" enter-to-class="opacity-100" leave-active-class="transition-opacity duration-200 motion-reduce:transition-none" leave-from-class="opacity-100" leave-to-class="opacity-0">
      <div v-if="isOpen && selected" class="fixed inset-0 z-50 flex items-center justify-center bg-[#111827]/90 p-4 backdrop-blur-md sm:p-8" @click.self="close">
        <div ref="dialog" role="dialog" aria-modal="true" :aria-label="selected.title" tabindex="-1" class="relative flex max-h-full max-w-6xl flex-col items-center gap-4 outline-none">
          <button ref="closeButton" type="button" aria-label="Bild schließen" class="absolute right-2 top-2 z-10 flex size-11 items-center justify-center rounded-full bg-[#111827]/80 text-white shadow-lg hover:bg-[#111827] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:-right-5 sm:-top-5" @click="close"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="size-6"><path stroke-linecap="round" d="M5 5l14 14M19 5L5 19" /></svg></button>
          <img :src="selected.src" :alt="selected.alt" class="max-h-[calc(100svh-7rem)] max-w-full rounded-md object-contain shadow-2xl">
          <p class="text-center text-sm font-medium text-white">{{ selected.title }}</p>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
