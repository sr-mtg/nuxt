// plugins/vuetify.js
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const lightTheme = {
  dark: false,
  colors: {
    background: "#EEEEEE",
    surface: "#E0E0E0",
    primary: "#3f51b5",
    secondary: "#03dac6",
    error: "#f44336",
    info: "#2196F3",
    success: "#4caf50",
    warning: "#fb8c00",
  }
}

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,

    theme: {
      defaultTheme: 'lightTheme',
      themes: {
        lightTheme
      }
    }
  })

  nuxtApp.vueApp.use(vuetify)
})