export default defineNuxtRouteMiddleware((to) => {
  const token = useCookie('token').value
  const sessionToken = process.client ? sessionStorage.getItem('token') : null
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
  if (!token && !sessionToken && !outRoutes.includes(to.path)) {
    return navigateTo('/welcome')
  }

  if ((token || sessionToken) && outRoutes.includes(to.path)) {
    return navigateTo('/home')
  }
})
