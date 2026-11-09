<script setup lang="ts">
import { projectCollections } from '~/data/projects'

const pageTitle = 'Gartenbau & Pflasterarbeiten in Abensberg | Enis Shala'
const pageDescription = 'Pflasterarbeiten, Naturstein und Terrassenbau aus Abensberg. Entdecken Sie echte Projekte von Enis Shala Gartenbau und nehmen Sie Kontakt auf.'

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  ogTitle: pageTitle,
  ogDescription: pageDescription
})

const services: { number: string; title: string; description: string; details: string[] }[] = [
  {
    number: '01',
    title: 'Pflasterarbeiten',
    description: 'Wege und Eingangsbereiche, die sich passend zu Haus und Grundstück anfügen.',
    details: ['Gartenwege', 'Hauseingänge', 'Pflasterflächen']
  },
  {
    number: '02',
    title: 'Terrassenbau',
    description: 'Ein Platz im Freien entsteht durch ein stimmiges Zusammenspiel von Fläche, Material und Anschluss an das Haus.',
    details: ['Terrassenbeläge', 'Großformatige Platten', 'Saubere Übergänge']
  },
  {
    number: '03',
    title: 'Natursteinarbeiten',
    description: 'Stufen, Mauern und weitere Details aus Stein geben Außenanlagen Struktur und Charakter.',
    details: ['Natursteinmauern', 'Eingangsstufen', 'Steindetails']
  }
]

const featuredProjects = projectCollections.filter(({ id }) =>
  ['natural-stone-entrance', 'paved-entrance', 'brick-home-terrace'].includes(id)
)

const processSteps = [
  {
    number: '01',
    title: 'Kennenlernen',
    description: 'Wir besprechen Ihre Wünsche und sehen uns an, was Ihr Außenbereich mitbringt.'
  },
  {
    number: '02',
    title: 'Abstimmen',
    description: 'Flächen, Materialien und Details werden auf Haus und Nutzung abgestimmt.'
  },
  {
    number: '03',
    title: 'Umsetzen',
    description: 'Schritt für Schritt entsteht ein Außenbereich, der im Alltag Freude macht.'
  }
] as const
</script>

<template>
  <div>
    <HeroSlider />

    <section class="mx-auto grid max-w-7xl gap-10 px-6 py-20 sm:py-28 lg:grid-cols-2 lg:gap-24 lg:px-10" aria-labelledby="intro-title">
      <div v-reveal>
        <p class="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#1e4620]">Draußen zu Hause</p>
        <h2 id="intro-title" class="max-w-xl text-4xl font-semibold leading-tight tracking-tight text-[#111827] sm:text-5xl">Mehr Raum für das Leben im Freien.</h2>
      </div>
      <div v-reveal="120" class="flex flex-col justify-center">
        <p class="max-w-2xl text-lg leading-8 text-[#111827]/70">Ein Außenbereich kann vieles sein: der Weg nach Hause, ein Platz für gemeinsame Stunden oder ein ruhiger Rückzugsort. Mit Pflaster, Naturstein und durchdachten Details gestalten wir Flächen, die zu Ihrem Alltag passen.</p>
        <div class="mt-8 flex flex-wrap gap-3 text-sm font-medium text-[#1e4620]">
          <span class="rounded-full bg-[#a9bca8]/25 px-4 py-2">Klare Gestaltung</span>
          <span class="rounded-full bg-[#a9bca8]/25 px-4 py-2">Passende Materialien</span>
          <span class="rounded-full bg-[#a9bca8]/25 px-4 py-2">Raum für den Alltag</span>
        </div>
      </div>
    </section>

    <section class="bg-[#edf2ed] py-20 sm:py-28" aria-labelledby="services-title">
      <div class="mx-auto max-w-7xl px-6 lg:px-10">
        <div v-reveal class="max-w-2xl">
          <p class="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#1e4620]">Unsere Leistungen</p>
          <h2 id="services-title" class="text-4xl font-semibold tracking-tight text-[#111827] sm:text-5xl">Außenanlagen mit einem klaren Konzept.</h2>
          <p class="mt-5 text-base leading-7 text-[#111827]/65">Vom Hauseingang bis zur Terrasse: Wir verbinden praktische Lösungen mit einer ruhigen Gestaltung.</p>
        </div>
        <div class="mt-12 grid gap-5 md:grid-cols-3 lg:gap-7">
          <article v-for="(service, index) in services" :key="service.number" v-reveal="index * 100" class="flex h-full flex-col rounded-2xl border border-[#1e4620]/10 bg-[#f9fafb] p-7 shadow-sm motion-safe:transition-[box-shadow,border-color] motion-safe:duration-300 hover:border-[#1e4620]/25 hover:shadow-lg sm:p-9">
            <span class="text-sm font-semibold tracking-[0.2em] text-[#1e4620]">{{ service.number }}</span>
            <h3 class="mt-10 text-2xl font-semibold tracking-tight text-[#111827]">{{ service.title }}</h3>
            <p class="mt-4 leading-7 text-[#111827]/65">{{ service.description }}</p>
            <ul class="mt-8 space-y-3 border-t border-[#a9bca8]/60 pt-6 text-sm text-[#111827]/75">
              <li v-for="detail in service.details" :key="detail" class="flex items-center gap-3"><span class="size-1.5 shrink-0 rounded-full bg-[#1e4620]" aria-hidden="true" />{{ detail }}</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-10" aria-labelledby="featured-title">
      <div v-reveal class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div class="max-w-2xl">
          <p class="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#1e4620]">Ausgewählte Projekte</p>
          <h2 id="featured-title" class="text-4xl font-semibold tracking-tight text-[#111827] sm:text-5xl">Ein Blick auf unsere Arbeit.</h2>
          <p class="mt-5 text-base leading-7 text-[#111827]/65">Echte Einblicke in Terrassen, Pflasterflächen und Arbeiten mit Naturstein.</p>
        </div>
        <NuxtLink to="/projects" class="inline-flex min-h-11 items-center gap-2 self-start border-b border-[#1e4620] text-sm font-semibold text-[#1e4620] transition-colors hover:text-[#285b2b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1e4620] sm:self-auto">Alle Projekte ansehen <span aria-hidden="true">↗</span></NuxtLink>
      </div>
      <div class="mt-12 grid gap-7 md:grid-cols-3">
        <NuxtLink v-for="(project, index) in featuredProjects" :key="project.id" v-reveal="index * 100" :to="`/projects#${project.id}`" class="group block rounded-xl motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1e4620]">
          <div class="aspect-4/5 overflow-hidden rounded-xl bg-[#a9bca8]/35"><img :src="project.photos[0].src" :alt="project.photos[0].alt" loading="lazy" class="h-full w-full object-cover motion-safe:transition-transform motion-safe:duration-500 group-hover:scale-[1.04]"></div>
          <div class="mt-5 flex items-start justify-between gap-4">
            <div><p class="text-xs font-semibold uppercase tracking-[0.15em] text-[#1e4620]">{{ project.category }}</p><h3 class="mt-2 text-xl font-semibold text-[#111827]">{{ project.title }}</h3></div>
            <span class="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#a9bca8]/30 text-[#1e4620] motion-safe:transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span>
          </div>
        </NuxtLink>
      </div>
      <p class="mt-10 text-sm text-[#111827]/55">Einige Fotos zeigen die Arbeiten während der Ausführung. Weitere Ansichten finden Sie in den Projektgalerien.</p>
    </section>

    <section class="bg-[#1e4620] py-20 text-white sm:py-28" aria-labelledby="approach-title">
      <div class="mx-auto max-w-7xl px-6 lg:px-10">
        <div class="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div v-reveal>
            <p class="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#c7d8c6]">So gehen wir vor</p>
            <h2 id="approach-title" class="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">Am Anfang steht ein gutes Gespräch.</h2>
            <p class="mt-6 max-w-md leading-7 text-white/75">Jedes Grundstück ist anders. Deshalb hören wir zuerst zu und entwickeln daraus gemeinsam eine passende Richtung für Ihren Außenbereich.</p>
          </div>
          <ol class="divide-y divide-white/20 border-y border-white/20">
            <li v-for="(step, index) in processSteps" :key="step.number" v-reveal="index * 100" class="grid gap-3 py-7 sm:grid-cols-[3rem_1fr] sm:gap-6">
              <span class="pt-1 text-sm font-semibold tracking-[0.2em] text-[#c7d8c6]">{{ step.number }}</span>
              <div><h3 class="text-xl font-semibold">{{ step.title }}</h3><p class="mt-2 max-w-lg leading-7 text-white/70">{{ step.description }}</p></div>
            </li>
          </ol>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-10" aria-labelledby="living-title">
      <div v-reveal class="grid overflow-hidden rounded-2xl bg-[#e6ede5] lg:grid-cols-2">
        <img src="/images/projects/covered-terrace.jpeg" alt="Überdachte Terrasse mit großformatigen grauen Platten" loading="lazy" class="h-80 w-full object-cover sm:h-[28rem] lg:h-full">
        <div class="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
          <p class="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#1e4620]">Für Ihren Alltag</p>
          <h2 id="living-title" class="text-3xl font-semibold leading-tight tracking-tight text-[#111827] sm:text-4xl">Ein Platz, an dem man gern bleibt.</h2>
          <p class="mt-6 max-w-lg leading-7 text-[#111827]/70">Eine Terrasse verbindet Haus und Garten. Form, Oberfläche und Übergänge entscheiden darüber, wie gut sie sich nutzen lässt und wie selbstverständlich sie zum Zuhause gehört.</p>
          <NuxtLink to="/contact" class="mt-8 inline-flex min-h-11 items-center gap-2 self-start border-b border-[#1e4620] text-sm font-semibold text-[#1e4620] hover:text-[#285b2b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1e4620]">Erzählen Sie uns von Ihrem Vorhaben <span aria-hidden="true">↗</span></NuxtLink>
        </div>
      </div>
    </section>

    <section class="bg-[#e9f0e8] px-6 py-20 text-center sm:py-28" aria-labelledby="contact-title">
      <div v-reveal class="mx-auto max-w-3xl">
        <p class="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#1e4620]">Ihr Projekt im Freien</p>
        <h2 id="contact-title" class="text-4xl font-semibold leading-tight tracking-tight text-[#111827] sm:text-5xl">Was haben Sie mit Ihrem Außenbereich vor?</h2>
        <p class="mx-auto mt-6 max-w-xl leading-7 text-[#111827]/65">Ob neuer Weg, Eingang oder Terrasse: Schildern Sie uns Ihre Idee. Wir freuen uns auf Ihre Anfrage.</p>
        <NuxtLink to="/contact" class="mt-9 inline-flex min-h-12 items-center justify-center rounded-full bg-[#1e4620] px-8 text-sm font-semibold text-white motion-safe:transition-[transform,background-color,box-shadow] motion-safe:duration-300 hover:bg-[#285b2b] motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1e4620]">Kontaktieren Sie uns</NuxtLink>
      </div>
    </section>
  </div>
</template>
