<script setup lang="ts">
import { projectCollections } from '~/data/projects'
import { services } from '~/data/services'

const pageTitle = 'Leistungen: Gartenbau & Pflasterarbeiten in Abensberg | Enis Shala'
const pageDescription = 'Pflasterarbeiten, Terrassenbau, Naturstein, Palisaden, L-Steine, Erdarbeiten, Drainage und Rasenarbeiten aus Abensberg im Umkreis von ca. 150 km.'

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  ogTitle: pageTitle,
  ogDescription: pageDescription
})

const serviceProjects = services.map((service) => ({
  ...service,
  project: projectCollections.find((project) => project.id === service.projectId)
}))
</script>

<template>
  <div>
    <section class="bg-[#edf2ed] px-6 py-16 sm:py-24" aria-labelledby="services-page-title">
      <div class="mx-auto max-w-7xl lg:px-4">
        <p class="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#1e4620]">Enis Shala Gartenbau · Abensberg</p>
        <h1 id="services-page-title" class="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-[#111827] sm:text-5xl lg:text-6xl">Gartenbau und Pflasterarbeiten für Ihren Außenbereich.</h1>
        <p class="mt-7 max-w-3xl text-lg leading-8 text-[#111827]/70">Von der Vorbereitung des Bodens bis zur fertigen Fläche: Wir arbeiten an Wegen, Hofflächen, Terrassen und Grünbereichen. Von Abensberg aus sind wir im Umkreis von etwa 150 km für Sie da. Hier finden Sie unsere Leistungen und passende Einblicke in echte Projekte.</p>
      </div>
    </section>

    <nav class="mx-auto max-w-7xl px-6 py-9 lg:px-10" aria-label="Leistungen im Überblick">
      <ul class="flex flex-wrap gap-3">
        <li v-for="service in services" :key="service.id">
          <a :href="`#${service.id}`" class="inline-flex min-h-11 items-center rounded-full border border-[#1e4620]/20 px-5 text-sm font-medium text-[#1e4620] transition-colors hover:bg-[#edf2ed] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1e4620]">{{ service.title }}</a>
        </li>
      </ul>
    </nav>

    <div class="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
      <section v-for="(service, index) in serviceProjects" :id="service.id" :key="service.id" class="scroll-mt-8 grid gap-10 border-t border-[#a9bca8]/60 py-14 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-20" :aria-labelledby="`${service.id}-title`">
        <div :class="index % 2 ? 'lg:order-2' : ''">
          <p class="text-xs font-semibold uppercase tracking-[0.22em] text-[#1e4620]">Leistung {{ service.number }}</p>
          <h2 :id="`${service.id}-title`" class="mt-4 text-3xl font-semibold tracking-tight text-[#111827] sm:text-4xl">{{ service.title }}</h2>
          <p class="mt-6 max-w-xl leading-8 text-[#111827]/70">{{ service.longDescription }}</p>
          <ul class="mt-7 flex flex-wrap gap-2">
            <li v-for="detail in service.details" :key="detail" class="rounded-full bg-[#edf2ed] px-4 py-2 text-sm text-[#1e4620]">{{ detail }}</li>
          </ul>
          <NuxtLink :to="`/projects#${service.projectId}`" class="mt-8 inline-flex min-h-11 items-center border-b border-[#1e4620] text-sm font-semibold text-[#1e4620] hover:text-[#285b2b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1e4620]">Projektbilder ansehen</NuxtLink>
        </div>
        <img v-if="service.project" :src="service.project.photos[0]?.src" :alt="service.project.photos[0]?.alt" loading="lazy" width="800" height="600" class="aspect-4/3 w-full rounded-2xl object-cover" :class="index % 2 ? 'lg:order-1' : ''">
      </section>
    </div>

    <section class="bg-[#1e4620] px-6 py-16 text-center text-white sm:py-20" aria-labelledby="services-contact-title">
      <div class="mx-auto max-w-2xl">
        <h2 id="services-contact-title" class="text-3xl font-semibold tracking-tight sm:text-4xl">Welches Vorhaben planen Sie?</h2>
        <p class="mt-5 leading-7 text-white/75">Beschreiben Sie uns Ihr Grundstück und die gewünschten Arbeiten. Wir sprechen mit Ihnen über die nächsten Schritte.</p>
        <NuxtLink to="/contact" class="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-[#1e4620] hover:bg-[#edf2ed] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Kontakt aufnehmen</NuxtLink>
      </div>
    </section>
  </div>
</template>
