export interface Tag {
    name: string
    // SVG imports can be component objects (when using Vite/nuxt svg loader).
    // Marking this as `any` allows components or string paths.
    img?: any
    id?: number,
    selected?: boolean
}