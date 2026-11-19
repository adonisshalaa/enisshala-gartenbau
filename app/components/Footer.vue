<script setup lang="ts">
import { company } from '~/config/company'
const year = new Date().getFullYear()

const footerLinks = [
  { label: 'Startseite', to: '/' },
  { label: 'Leistungen', to: '/leistungen' },
  { label: 'Projekte', to: '/projects' },
  { label: 'Kontakt', to: '/contact' }
] as const
</script>

<template>
  <footer class="bg-[#1e4620] text-[#f9fafb]">
    <div class="mx-auto max-w-7xl px-6 lg:px-10">
      <div class="flex flex-col gap-7 border-b border-white/20 py-12 sm:py-14 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.23em] text-[#c7d8c6]">Ihr Vorhaben beginnt hier</p>
          <h2 class="mt-3 max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">Lassen Sie uns über Ihren Außenbereich sprechen.</h2>
        </div>
        <NuxtLink to="/contact" class="inline-flex min-h-12 shrink-0 items-center justify-center self-start rounded-full bg-[#f9fafb] px-6 text-sm font-semibold text-[#1e4620] motion-safe:transition-[background-color,transform] motion-safe:duration-300 hover:bg-[#e6ede5] motion-safe:hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white lg:self-auto">
          Kontakt aufnehmen
        </NuxtLink>
      </div>

      <div class="grid gap-10 py-12 sm:grid-cols-2 sm:py-16 lg:grid-cols-12 lg:gap-8">
        <div class="sm:col-span-2 lg:col-span-5">
          <NuxtLink to="/" class="inline-flex rounded-xl bg-[#f9fafb] p-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white" aria-label="Enis Shala Gartenbau – zur Startseite">
            <img src="/enis-shala-logo.png" alt="" width="1140" height="336" loading="lazy" class="h-auto w-40 sm:w-44">
          </NuxtLink>
          <p class="mt-6 max-w-sm text-sm leading-7 text-white/70">Pflasterarbeiten, Terrassenbau und Natursteinarbeiten aus Abensberg. Für Außenbereiche, die zu Ihrem Zuhause passen.</p>
        </div>

        <nav class="lg:col-span-2" aria-label="Footernavigation">
          <h3 class="text-xs font-semibold uppercase tracking-[0.2em] text-[#c7d8c6]">Entdecken</h3>
          <ul class="mt-6 space-y-4 text-sm">
            <li v-for="link in footerLinks" :key="link.to">
              <NuxtLink :to="link.to" class="inline-block text-white/80 underline-offset-4 motion-safe:transition-colors hover:text-white hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">{{ link.label }}</NuxtLink>
            </li>
          </ul>
        </nav>

        <div class="lg:col-span-3">
          <h3 class="text-xs font-semibold uppercase tracking-[0.2em] text-[#c7d8c6]">Kontakt</h3>
          <div class="mt-6 flex flex-col items-start gap-4 text-sm">
            <a :href="company.phoneHref" class="break-all text-white/80 underline-offset-4 motion-safe:transition-colors hover:text-white hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">{{ company.phoneDisplay }}</a>
            <a :href="`mailto:${company.email}`" class="break-all text-white/80 underline-offset-4 motion-safe:transition-colors hover:text-white hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">{{ company.email }}</a>
          </div>
        </div>

        <div class="lg:col-span-2">
          <h3 class="text-xs font-semibold uppercase tracking-[0.2em] text-[#c7d8c6]">Standort</h3>
          <address class="mt-6 text-sm leading-7 not-italic">
            <a :href="company.addressHref" target="_blank" rel="noopener noreferrer" class="inline-block text-white/80 underline-offset-4 motion-safe:transition-colors hover:text-white hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">{{ company.address.streetAddress }}<br>{{ company.address.postalCode }} {{ company.address.addressLocality }}</a>
          </address>
        </div>
      </div>

      <div class="flex flex-col gap-3 border-t border-white/20 py-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
        <p>© {{ year }} {{ company.name }}. Alle Rechte vorbehalten.</p>
      </div>
    </div>
  </footer>
</template>
