<script setup lang="ts">
import { company } from '~/config/company'

const route = useRoute()
const siteUrl = useRuntimeConfig().public.siteUrl.replace(/\/$/, '')
const canonicalUrl = computed(() => `${siteUrl}${route.path === '/' ? '/' : route.path}`)

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${siteUrl}/#business`,
  name: company.name,
  url: siteUrl,
  logo: `${siteUrl}/enis-shala-logo.png`,
  image: `${siteUrl}/images/projects/stone-terrace.jpeg`,
  description: 'Pflasterarbeiten, Natursteinarbeiten und Terrassenbau aus Abensberg.',
  telephone: company.phoneHref.replace('tel:', ''),
  email: company.email,
  address: {
    '@type': 'PostalAddress',
    ...company.address
  },
  areaServed: {
    '@type': 'City',
    name: 'Abensberg'
  }
}

useHead({
  link: [{ rel: 'canonical', href: canonicalUrl }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(businessSchema).replace(/</g, '\\u003c') }]
})

useSeoMeta({
  ogSiteName: company.name,
  ogLocale: 'de_DE',
  ogType: 'website',
  ogUrl: canonicalUrl,
  ogImage: `${siteUrl}/images/projects/stone-terrace.jpeg`,
  ogImageAlt: 'Terrassen- und Natursteinarbeiten von Enis Shala Gartenbau',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div class="flex min-h-screen flex-col bg-[#f9fafb] text-[#111827]">
    <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-3 focus:text-[#1e4620] focus:outline-2 focus:outline-[#1e4620]">Zum Inhalt springen</a>
    <Navbar />
    <main id="main-content" class="flex-1"><slot /></main>
    <Footer />
  </div>
</template>
