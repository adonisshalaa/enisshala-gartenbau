export default defineNuxtConfig({
  compatibilityDate: '2026-11-09',
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  runtimeConfig: {
    brevoSmtpUser: '',
    brevoSmtpKey: '',
    brevoSenderEmail: '',
    brevoSmtpPort: '587',
    contactRecipient: 'info@enisshala-gartenbau.de',
    public: {
      siteUrl: 'https://enisshala-gartenbau.de'
    }
  },
  app: {
    head: {
      htmlAttrs: { lang: 'de' },
      title: 'Enis Shala Gartenbau',
      meta: [
        { name: 'description', content: 'Enis Shala Gartenbau aus Abensberg: Pflasterarbeiten, Terrassenbau, Naturstein, Erdarbeiten, Entwässerung und Rasenarbeiten im Umkreis von ca. 150 km.' },
        { name: 'theme-color', content: '#1e4620' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/enis-shala-logo.png' }
      ]
    }
  }
})
