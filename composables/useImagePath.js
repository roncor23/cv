export const useImagePath = () => {
  // Get baseURL from runtime config (set during build)
  const config = useRuntimeConfig()
  const baseURL = config.public?.baseURL || '/'
  
  const getImagePath = (path) => {
    if (!path) return ''
    // If baseURL is just '/', return path as is
    if (baseURL === '/' || !baseURL) return path
    // For GitHub Pages with subpath like '/cv/', prepend it
    // Ensure baseURL doesn't have trailing slash for comparison
    const cleanBase = baseURL.endsWith('/') ? baseURL.slice(0, -1) : baseURL
    const cleanPath = path.startsWith('/') ? path : `/${path}`
    // Check if path already includes baseURL
    if (cleanPath.startsWith(cleanBase)) return cleanPath
    // Prepend baseURL
    return `${cleanBase}${cleanPath}`
  }
  
  return { getImagePath, baseURL }
}
