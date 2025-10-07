export default defineNuxtRouteMiddleware((to) => {
  const config = useRuntimeConfig()
  const token = false//useCookie('token').value || config.public.localToken
  const sessionToken = false//process.client ? sessionStorage.getItem('token') : null
  const outRoutes = [
    '/auth/sign-in',
    '/auth/sign-up',
    '/',
    '/welcome',
    '/auth/forget-password',
    '/auth/code-verification',
    '/auth/set-new-password',
    '/auth/verify',
    '/auth/verify-account'
  ]
  const isAuthenticated = !!(token || sessionToken)
  if (!isAuthenticated && !outRoutes.includes(to.path)) {
      return navigateTo('/')
    }

    if (isAuthenticated && outRoutes.includes(to.path)) {
      return navigateTo('/home')
  }

})
