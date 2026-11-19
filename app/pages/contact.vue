<script setup lang="ts">
import { company } from '~/config/company'

const pageTitle = 'Kontakt & Anfrage | Enis Shala Gartenbau Abensberg'
const pageDescription = 'Kontaktieren Sie Enis Shala Gartenbau für Pflasterarbeiten, Terrassenbau, Naturstein, Erdarbeiten und Drainage in Abensberg und ca. 150 km Umkreis.'

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
const successOpen = ref(false)
const successDialog = ref<HTMLElement | null>(null)
const closeButton = ref<HTMLButtonElement | null>(null)
const submitButton = ref<HTMLButtonElement | null>(null)
let previousOverflow = ''

function closeSuccess() {
  successOpen.value = false
}

function onDialogKeydown(event: KeyboardEvent) {
  if (!successOpen.value) return
  if (event.key === 'Escape') {
    event.preventDefault()
    closeSuccess()
  } else if (event.key === 'Tab') {
    const buttons = successDialog.value?.querySelectorAll<HTMLButtonElement>('button')
    if (!buttons?.length) return
    const first = buttons[0]!
    const last = buttons[buttons.length - 1]!
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    } else if (!successDialog.value?.contains(document.activeElement)) {
      event.preventDefault()
      first.focus()
    }
  }
}

function onDialogFocus(event: FocusEvent) {
  if (successOpen.value && !successDialog.value?.contains(event.target as Node)) closeButton.value?.focus()
}

watch(successOpen, async (open, wasOpen) => {
  if (open) {
    previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onDialogKeydown)
    document.addEventListener('focusin', onDialogFocus)
    await nextTick()
    closeButton.value?.focus()
  } else if (wasOpen) {
    document.body.style.overflow = previousOverflow
    document.removeEventListener('keydown', onDialogKeydown)
    document.removeEventListener('focusin', onDialogFocus)
    await nextTick()
    submitButton.value?.focus()
  }
})

onBeforeUnmount(() => {
  if (!import.meta.client) return
  if (successOpen.value) document.body.style.overflow = previousOverflow
  document.removeEventListener('keydown', onDialogKeydown)
  document.removeEventListener('focusin', onDialogFocus)
})

async function submitForm() {
  if (!formAvailable.value || submitState.value === 'sending') return
  submitState.value = 'sending'
  feedback.value = ''

  try {
    const result = await $fetch<{ ok: boolean }>('/api/contact', { method: 'POST', body: form })
    if (!result.ok) throw new Error('Contact request was not accepted')
    submitState.value = 'success'
    form.name = ''
    form.email = ''
    form.message = ''
    form.website = ''
    successOpen.value = true
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
        <div>
          <p class="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#111827]/50">Einsatzgebiet</p>
          <p class="text-lg font-medium text-[#1e4620]">{{ company.serviceAreaDisplay }}</p>
        </div>
      </div>
    </div>
    <div v-reveal="120" class="rounded-2xl border border-[#1e4620]/10 bg-white p-6 shadow-sm sm:p-9">
      <h2 class="text-xl font-semibold text-[#111827]">{{ formAvailable ? 'Anfrage senden' : 'Kontakt per E-Mail oder Telefon' }}</h2>
      <p v-if="formAvailable" class="mt-2 text-sm leading-6 text-[#111827]/60">Schreiben Sie uns, was Sie planen. Wir melden uns bei Ihnen.</p>
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
          <textarea id="message" v-model.trim="form.message" name="message" rows="6" required :disabled="submitState === 'sending'" class="block w-full resize-y rounded-lg border border-gray-300 bg-white px-4 py-3 text-[#111827] outline-none placeholder:text-gray-400 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 disabled:opacity-60" placeholder="Beschreiben Sie Ihr Vorhaben" />
        </div>
        <button ref="submitButton" type="submit" :disabled="submitState === 'sending'" class="inline-flex min-h-12 items-center justify-center rounded-full bg-[#1e4620] px-7 text-sm font-semibold text-white transition-colors hover:bg-[#285b2b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1e4620] disabled:cursor-wait disabled:opacity-60">{{ submitState === 'sending' ? 'Wird gesendet …' : 'Anfrage senden' }}</button>
        <p v-if="feedback" role="alert" class="text-sm leading-6 text-red-700">{{ feedback }}</p>
      </form>
    </div>
  </section>

  <Teleport to="body">
    <Transition enter-active-class="transition-opacity duration-200 motion-reduce:transition-none" enter-from-class="opacity-0" enter-to-class="opacity-100" leave-active-class="transition-opacity duration-200 motion-reduce:transition-none" leave-from-class="opacity-100" leave-to-class="opacity-0">
      <div v-if="successOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-[#111827]/70 p-4 backdrop-blur-sm" @click.self="closeSuccess">
        <div ref="successDialog" role="dialog" aria-modal="true" aria-labelledby="success-title" aria-describedby="success-description" tabindex="-1" class="relative w-full max-w-md rounded-3xl border border-[#1e4620]/10 bg-[#f9fafb] p-8 text-center shadow-2xl outline-none sm:p-10">
          <button ref="closeButton" type="button" aria-label="Meldung schließen" class="absolute right-4 top-4 flex size-11 items-center justify-center rounded-full text-[#111827]/60 transition-colors hover:bg-[#e9f0e8] hover:text-[#1e4620] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1e4620]" @click="closeSuccess">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="size-5"><path stroke-linecap="round" d="M5 5l14 14M19 5L5 19" /></svg>
          </button>
          <div class="mx-auto flex size-20 items-center justify-center rounded-full bg-[#e3eee2] text-[#1e4620]">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" class="size-11"><circle cx="12" cy="12" r="9" /><path stroke-linecap="round" stroke-linejoin="round" d="m8 12 2.7 2.7L16.5 9" /></svg>
          </div>
          <p class="mt-7 text-xs font-semibold uppercase tracking-[0.24em] text-[#1e4620]">Nachricht versendet</p>
          <h2 id="success-title" class="mt-3 text-3xl font-semibold tracking-tight text-[#111827]">Vielen Dank für Ihre Anfrage!</h2>
          <p id="success-description" class="mt-4 leading-7 text-[#111827]/70">Ihre Nachricht wurde erfolgreich versendet. Wir melden uns schnellstmöglich bei Ihnen.</p>
          <button type="button" class="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#1e4620] px-7 text-sm font-semibold text-white transition-colors hover:bg-[#285b2b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1e4620]" @click="closeSuccess">Schließen</button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
