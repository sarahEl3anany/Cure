import type { NuxtApp } from '#app'

declare module '#app' {
  interface NuxtApp {
    $successRegister: (res: {
      data: {
        token: string
        token_type?: string
        user?: {
          avatar?: string
          birthdate?: string
          created_at?: string
          email: string
          email_verified_at?: string
          id: number
          name: string
          phone?: string
          updated_at?: string
        }
      }
    }) => void | Promise<void>,
    $fetch: () => $Fetch<unknown, NitroFetchRequest>
  }

  interface NuxtApp {
    $successRegisterSession: (res: {
      data: {
        token: string
        token_type?: string
        user?: {
          avatar?: string
          birthdate?: string
          created_at?: string
          email: string
          email_verified_at?: string
          id: number
          name: string
          phone?: string
          updated_at?: string
        }
      }
    }) => void | Promise<void>,
    $fetch: () => $Fetch<unknown, NitroFetchRequest>
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $successRegister: NuxtApp['$successRegister'],
    $successRegisterSession: NuxtApp['$successRegisterSession'],
    $fetch: NuxtApp['$fetch']
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $successRegister: NuxtApp['$successRegister'],
    $successRegisterSession: NuxtApp['$successRegisterSession'],
    $fetch: NuxtApp['$fetch']
  }
}