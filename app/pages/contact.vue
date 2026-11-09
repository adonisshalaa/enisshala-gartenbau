<script setup lang="ts">
import { company } from '~/config/company'

const pageTitle = 'Kontakt | Enis Shala Gartenbau in Abensberg'
const pageDescription = 'Kontaktieren Sie Enis Shala Gartenbau in Abensberg für Anfragen zu Pflasterarbeiten, Naturstein und Terrassenbau. Telefon, E-Mail und Kontaktformular.'

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  ogTitle: pageTitle,
  ogDescription: pageDescription
})

const form = reactive({ name: '', email: '', message: '', website: '' })
const { data: contactStatus } = await useFetch<{ available: boolean }>('/api/contact/status')
const formAvailable = computed(() => contactStatus.value?.available === true)
const submitState = ref<'idle' | 'sending' | 'success' | 'error'>('idle')
const feedback = ref('')

async function submitForm() {
  if (!formAvailable.value || submitState.value === 'sending') return
  submitState.value = 'sending'
  feedback.value = ''

  try {
    await $fetch('/api/contact', { method: 'POST', body: form })
    submitState.value = 'success'
    feedback.value = 'Vielen Dank! Ihre Anfrage wurde versendet.'
    form.name = ''
    form.email = ''
    form.message = ''
    form.website = ''
  } catch (error) {
    submitState.value = 'error'
    const status = (error as { statusCode?: number })?.statusCode
    feedback.value = status === 429
      ? 'Bitte warten Sie kurz, bevor Sie eine weitere Anfrage senden.'
      : status === 503
        ? 'Das Formular ist derzeit nicht verfügbar. Bitte schreiben Sie uns eine E-Mail oder rufen Sie an.'
        : status === 400
          ? 'Bitte prüfen Sie Ihre Eingaben und versuchen Sie es erneut.'
          : 'Ihre Anfrage konnte nicht versendet werden. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns per E-Mail.'
  }
}
</script>

<template>
  <section class="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:gap-24 lg:px-10 lg:py-28">
    <div v-reveal>
      <p class="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#1e4620]">Sprechen wir darüber</p>
      <h1 class="text-4xl font-semibold tracking-tight text-[#111827] sm:text-5xl">Kontakt</h1>
      <p class="mt-6 max-w-md text-base leading-7 text-[#111827]/65">Sie planen einen Weg, einen neuen Hauseingang oder eine Terrasse? Erzählen Sie uns, was Sie vorhaben.</p>
      <div class="mt-12 space-y-7">
        <div>
          <p class="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#111827]/50">Telefon</p>
          <a :href="company.phoneHref" class="text-lg font-medium text-[#1e4620] underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1e4620]">{{ company.phoneDisplay }}</a>
        </div>
        <div>
          <p class="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#111827]/50">E-Mail</p>
          <a :href="`mailto:${company.email}`" class="text-lg font-medium text-[#1e4620] underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1e4620]">{{ company.email }}</a>
        </div>
        <div>
          <p class="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#111827]/50">Adresse</p>
          <address class="not-italic">
            <a :href="company.addressHref" target="_blank" rel="noopener noreferrer" class="text-lg font-medium text-[#1e4620] underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1e4620]">{{ company.addressDisplay }}</a>
          </address>
        </div>
      </div>
    </div>
    <div v-reveal="120" class="rounded-2xl border border-[#1e4620]/10 bg-white p-6 shadow-sm sm:p-9">
      <h2 class="text-xl font-semibold text-[#111827]">{{ formAvailable ? 'Anfrage senden' : 'Kontakt per E-Mail oder Telefon' }}</h2>
      <p v-if="formAvailable" class="mt-2 text-sm leading-6 text-[#111827]/60">Schreiben Sie uns kurz, was Sie planen. Wir melden uns bei Ihnen.</p>
      <p v-else class="mt-2 text-sm leading-6 text-[#111827]/60">Das Kontaktformular wird derzeit eingerichtet. Bitte schreiben Sie uns direkt an <a :href="`mailto:${company.email}`" class="font-medium text-[#1e4620] underline">{{ company.email }}</a> oder rufen Sie uns an.</p>
      <form v-if="formAvailable" class="mt-8 space-y-6" :aria-busy="submitState === 'sending'" @input="submitState = 'idle'; feedback = ''" @submit.prevent="submitForm">
        <div class="absolute -left-[10000px]" aria-hidden="true">
          <label for="website">Website</label>
          <input id="website" v-model="form.website" name="website" type="text" autocomplete="off" tabindex="-1">
        </div>
        <div>
          <label for="name" class="mb-2 block text-sm font-medium text-[#111827]">Name <span aria-hidden="true">*</span></label>
          <input id="name" v-model.trim="form.name" name="name" type="text" autocomplete="name" required minlength="2" maxlength="100" :disabled="submitState === 'sending'" class="block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-[#111827] outline-none placeholder:text-gray-400 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 disabled:opacity-60" placeholder="Ihr Name">
        </div>
        <div>
          <label for="email" class="mb-2 block text-sm font-medium text-[#111827]">E-Mail <span aria-hidden="true">*</span></label>
          <input id="email" v-model.trim="form.email" name="email" type="email" autocomplete="email" required maxlength="254" :disabled="submitState === 'sending'" class="block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-[#111827] outline-none placeholder:text-gray-400 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 disabled:opacity-60" placeholder="name@beispiel.de">
        </div>
        <div>
          <label for="message" class="mb-2 block text-sm font-medium text-[#111827]">Nachricht <span aria-hidden="true">*</span></label>
          <textarea id="message" v-model.trim="form.message" name="message" rows="6" required minlength="10" maxlength="5000" :disabled="submitState === 'sending'" class="block w-full resize-y rounded-lg border border-gray-300 bg-white px-4 py-3 text-[#111827] outline-none placeholder:text-gray-400 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 disabled:opacity-60" placeholder="Beschreiben Sie kurz Ihr Vorhaben" />
        </div>
        <button type="submit" :disabled="submitState === 'sending'" class="inline-flex min-h-12 items-center justify-center rounded-full bg-[#1e4620] px-7 text-sm font-semibold text-white transition-colors hover:bg-[#285b2b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1e4620] disabled:cursor-wait disabled:opacity-60">{{ submitState === 'sending' ? 'Wird gesendet …' : 'Anfrage senden' }}</button>
        <p v-if="feedback" role="status" aria-live="polite" class="text-sm leading-6" :class="submitState === 'error' ? 'text-red-700' : 'text-[#1e4620]'">{{ feedback }}</p>
      </form>
    </div>
  </section>
</template>
