import { useSplashScreenStore } from '~/stores/SplashScreen'

export default defineNuxtPlugin((nuxtApp) => {
    const splashScreen = useSplashScreenStore()

    // Before every fetch call

    nuxtApp.hook('fetch:before', () => {
        splashScreen.start()
    })
    // After every fetch call
    nuxtApp.hook('fetch:after', () => {
        splashScreen.finish()
    })

    // Also handle error case
    nuxtApp.hook('fetch:error', () => {
        splashScreen.finish()
    })
})
