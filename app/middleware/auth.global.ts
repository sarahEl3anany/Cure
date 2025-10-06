export default defineNuxtRouteMiddleware((to) => {
  const config = useRuntimeConfig()
  const token = useCookie('token').value || config.public.localToken
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
  const isAuthenticated = !!(token || sessionToken)
  if (!isAuthenticated && !outRoutes.includes(to.path)) {
      return navigateTo('/welcome')
    }

    // المستخدم عامل تسجيل دخول وبيحاول يدخل صفحة من الـ outRoutes
    if (isAuthenticated && outRoutes.includes(to.path)) {
      return navigateTo('/home')
  }

})
