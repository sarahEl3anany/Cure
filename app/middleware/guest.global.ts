export default defineNuxtRouteMiddleware((to) => {
  const token = useCookie('token').value

  if (token && (to.path === '/sign-in' || to.path === '/sign-up' || to.path === '/')) {
    return navigateTo('/home')
  }
  if (!token && to.path.startsWith('/home')) {
    return navigateTo('/sign-in')
  }
})
