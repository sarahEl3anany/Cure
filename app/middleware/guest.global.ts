export default defineNuxtRouteMiddleware((to) => {
  const token = useCookie('token').value
  const sessionToken = process.client ? sessionStorage.getItem('token') : null
  const outRoutes = [
    '/sign-in',
    '/sign-up',
    '/',
    '/welcome',
    '/forget-password',
    '/code-verification',
    '/set-new-password'
  ]
  if (!token && !sessionToken && !outRoutes.includes(to.path)) {
    return navigateTo('/welcome')
  }

  if ((token || sessionToken) && outRoutes.includes(to.path)) {
    return navigateTo('/home')
  }
})
