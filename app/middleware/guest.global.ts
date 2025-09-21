export default defineNuxtRouteMiddleware((to) => {
  const token = useCookie('token').value
  const sessionToken = process.client ? sessionStorage.getItem('token') : null
  const outRoutes = [
    '/sign-in',
    '/sign-up',
    '/welcome',
    '/forget-password'
  ]
  // User not logged in → redirect to /sign-in
  if (!token && !sessionToken && !outRoutes.includes(to.path)) {
    return navigateTo('/welcome')
  }

  // User logged in → prevent visiting auth pages
  if ((token || sessionToken) && outRoutes.includes(to.path)) {
    return navigateTo('/home')
  }

  // Otherwise → allow navigation
})
