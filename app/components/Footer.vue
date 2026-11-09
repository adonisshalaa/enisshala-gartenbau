<script setup lang="ts">
import { company } from '~/config/company'
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-[#a9bca8]/50 bg-[#f9fafb]">
    <div class="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-9 text-sm text-[#111827]/65 md:flex-row md:items-center md:justify-between lg:px-10">
      <div>
        <NuxtLink to="/" class="mb-5 inline-block rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1e4620]">
          <img src="/enis-shala-logo.png" alt="Enis Shala Gartenbau – zur Startseite" width="1140" height="336" loading="lazy" class="h-auto w-32 sm:w-36">
        </NuxtLink>
        <p>© {{ year }} {{ company.name }}. Alle Rechte vorbehalten.</p>
      </div>
      <div class="flex flex-col gap-2 md:items-end">
        <a :href="company.phoneHref" class="hover:text-[#1e4620] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1e4620]">{{ company.phoneDisplay }}</a>
        <a :href="`mailto:${company.email}`" class="hover:text-[#1e4620] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1e4620]">{{ company.email }}</a>
        <address class="not-italic"><a :href="company.addressHref" target="_blank" rel="noopener noreferrer" class="hover:text-[#1e4620] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1e4620]">{{ company.addressDisplay }}</a></address>
      </div>
    </div>
  </footer>
</template>
