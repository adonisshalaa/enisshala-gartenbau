<script setup lang="ts">
import { projectCollections } from '~/data/projects'
import type { Project } from '~/types/project'

const pageTitle = 'Projekte: Terrassen, Pflaster & Naturstein | Enis Shala'
const pageDescription = 'Echte Einblicke in Pflasterarbeiten, Terrassen und Natursteinprojekte von Enis Shala Gartenbau aus Abensberg. Mit Fotos aus verschiedenen Bauphasen.'

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  ogTitle: pageTitle,
  ogDescription: pageDescription
})

const photoCount = projectCollections.reduce((total, collection) => total + collection.photos.length, 0)
const lightbox = ref<{ open: (project: Project, trigger: HTMLElement) => void } | null>(null)

function openPhoto(photo: Project, event: MouseEvent) {
  lightbox.value?.open(photo, event.currentTarget as HTMLElement)
}
</script>

<template>
  <div>
    <section class="border-b border-[#a9bca8]/40 bg-[#edf2ed] px-6 py-16 sm:py-20 lg:py-24" aria-labelledby="projects-title">
      <div v-reveal class="mx-auto max-w-7xl lg:px-4">
        <p class="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#1e4620]">Unsere Arbeit</p>
        <h1 id="projects-title" class="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-[#111827] sm:text-5xl">Projekte und Details aus der Praxis.</h1>
        <p class="mt-5 max-w-2xl text-base leading-7 text-[#111827]/70">{{ projectCollections.length }} Projekte in {{ photoCount }} Bildern: Terrassen, Wege, Hauseingänge und Arbeiten mit Stein.</p>
        <p class="mt-3 text-sm text-[#111827]/60">Einige Aufnahmen zeigen die Arbeiten während der Ausführung.</p>
      </div>
    </section>

    <div class="mx-auto max-w-7xl px-6 lg:px-10">
      <section v-for="(collection, collectionIndex) in projectCollections" :id="collection.id" :key="collection.id" class="border-b border-[#a9bca8]/50 py-16 last:border-b-0 sm:py-20" :aria-labelledby="`${collection.id}-title`">
        <div v-reveal class="mb-9 grid gap-5 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div>
            <p class="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#1e4620]">{{ String(collectionIndex + 1).padStart(2, '0') }} / {{ collection.category }}</p>
            <h2 :id="`${collection.id}-title`" class="text-3xl font-semibold tracking-tight text-[#111827] sm:text-4xl">{{ collection.title }}</h2>
          </div>
          <div class="lg:pb-1">
            <p class="max-w-xl leading-7 text-[#111827]/65">{{ collection.description }}</p>
            <p class="mt-3 text-sm font-medium text-[#1e4620]">{{ collection.photos.length }} {{ collection.photos.length === 1 ? 'Foto' : 'Fotos' }}</p>
          </div>
        </div>

        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          <button v-for="(photo, photoIndex) in collection.photos" :key="photo.id" v-reveal="(photoIndex % 3) * 80" type="button" class="group block w-full rounded-xl text-left motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1e4620]" :aria-label="`Bild öffnen: ${photo.title}`" @click="openPhoto(photo, $event)">
            <span class="block aspect-4/3 overflow-hidden rounded-xl bg-[#dce5dc]">
              <img :src="photo.src" :alt="photo.alt" loading="lazy" class="h-full w-full object-cover motion-safe:transition-transform motion-safe:duration-500 group-hover:scale-[1.04]">
            </span>
            <span class="mt-4 flex items-center justify-between gap-3">
              <span class="text-base font-medium text-[#111827] sm:text-lg">{{ photo.title }}</span>
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="size-7 shrink-0 rounded-full bg-[#a9bca8]/30 p-1 text-[#1e4620] motion-safe:transition-transform group-hover:translate-x-1"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14m-6-6 6 6-6 6" /></svg>
            </span>
          </button>
        </div>
      </section>
    </div>
    <ProjectLightbox ref="lightbox" />
  </div>
</template>
