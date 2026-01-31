export const useImagePath = () => {
  // Get baseURL from app config or environment
  const app = useNuxtApp()
  const config = useRuntimeConfig()
  const baseURL = app.$router?.options?.base || config.public?.baseURL || process.env.NUXT_PUBLIC_BASE_URL || '/'
  
  const getImagePath = (path) => {
    if (!path) return ''
    // If baseURL is just '/', return path as is (works for root and subpaths)
    if (baseURL === '/') return path
    // For GitHub Pages with subpath, ensure baseURL is prepended
    // Static assets from public/ should work, but let's ensure the path is correct
    const cleanBase = baseURL.endsWith('/') ? baseURL.slice(0, -1) : baseURL
    const cleanPath = path.startsWith('/') ? path : `/${path}`
    // Only prepend if not already there
    if (cleanPath.startsWith(cleanBase)) return cleanPath
    return `${cleanBase}${cleanPath}`
  }
  
  return { getImagePath, baseURL }
}
