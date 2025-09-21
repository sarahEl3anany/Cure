export default defineNuxtRouteMiddleware((to) => {
  const token = useCookie('token').value
  const sessionToken = process.client ? sessionStorage.getItem('token') : null

  // User not logged in → redirect to /sign-in
  if (!token && !sessionToken && (to.path !== '/sign-in' && to.path !== '/sign-up' && to.path !== '/welcome')) {
    return navigateTo('/welcome')
  }

  // User logged in → prevent visiting auth pages
  if ((token || sessionToken) && (to.path === '/sign-in' || to.path === '/sign-up' || to.path === '/welcome')) {
    return navigateTo('/home')
  }

  // Otherwise → allow navigation
})
