import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.daichijuku.com'

    // The static pages of the site
    const staticRoutes = [
        '',
        '/column',
        '/law',
        '/privacy-policy',
        '/terms',
    ]

    // This will return an array of sitemap objects
    return staticRoutes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' || route === '/column' ? 'weekly' : 'monthly',
        priority: route === '' ? 1.0 : route === '/column' ? 0.8 : 0.5,
    }))
}
