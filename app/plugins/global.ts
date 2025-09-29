export default defineNuxtPlugin(nuxtApp => {
    const successRegister = (res: any) => {
        const token = res.data.token
        const tokenType = res.data.token_type || 'Bearer'
        const user = res.data.user
        useCookie('token').value = token
        useCookie('token_type').value = tokenType
        useCookie('avatar').value = user.avatar
        useCookie('birthdate').value = user.birthdate
        useCookie('created_at').value = user.created_at
        useCookie('email').value = user.email
        useCookie('email_verified_at').value = user.email_verified_at
        useCookie('id').value = user.id
        useCookie('name').value = user.name
        useCookie('phone').value = user.phone
        useCookie('updated_at').value = user.updated_at
        return navigateTo('/home')
    }

    const successRegisterSession = (res: any) => {
        debugger
        const token = res.data.token
        const tokenType = res.data.token_type || 'Bearer'
        const user = res.data.user
        sessionStorage.setItem('token', token)
        sessionStorage.setItem('tokenType', tokenType)
        sessionStorage.setItem('avatar', user.avatar)
        sessionStorage.setItem('birthdate', user.birthdate)
        sessionStorage.setItem('created_at', user.created_at)
        sessionStorage.setItem('email', user.email)
        sessionStorage.setItem('email_verified_at', user.email_verified_at)
        sessionStorage.setItem('id', user.id)
        sessionStorage.setItem('name', user.name)
        sessionStorage.setItem('phone', user.phone)
        sessionStorage.setItem('updated_at', user.updated_at)
        return navigateTo('/home')
    }
    nuxtApp.provide('successRegister', successRegister)
    nuxtApp.provide('successRegisterSession', successRegisterSession)
})
