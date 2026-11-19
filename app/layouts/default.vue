<script setup lang="ts">
import { company } from '~/config/company'
import { services } from '~/data/services'

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
  image: `${siteUrl}/images/projects/new/paved-courtyard.jpeg`,
  description: 'Gartenbau und Pflasterarbeiten in Abensberg: Gartenwege, Hofflächen, Terrassenbau, Naturstein, Palisaden, L-Steine, Erdarbeiten, Entwässerung, Drainage und Rasenarbeiten.',
  telephone: company.phoneHref.replace('tel:', ''),
  email: company.email,
  address: {
    '@type': 'PostalAddress',
    ...company.address
  },
  areaServed: {
    '@type': 'Place',
    name: company.serviceAreaDisplay
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Leistungen im Gartenbau',
    itemListElement: services.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.title,
        description: service.description,
        url: `${siteUrl}/leistungen#${service.id}`
      }
    }))
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
  ogImage: `${siteUrl}/images/projects/new/paved-courtyard.jpeg`,
  ogImageAlt: 'Gepflasterte Hoffläche mit Stützmauern von Enis Shala Gartenbau',
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
