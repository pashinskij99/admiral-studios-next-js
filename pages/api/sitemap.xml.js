import { createReadStream } from 'fs'
import { createInterface } from 'readline'
import { SitemapStream, streamToPromise } from 'sitemap'
import { request } from '../../services/datocms'

const ALL_POSTS_QUERY = `query MyQuery {
  allPosts {
    slug
  }
}`

export default async function handler(req, res) {
  // Fetch blogs from your API or database
  const { allPosts } = await request({
    query: ALL_POSTS_QUERY,
  })

  // Create a readable stream to read each line of the sitemap
  const stream = createReadStream('./public/sitemap.xml')
  const reader = createInterface({ input: stream })

  // Create a new sitemap stream and add the existing lines
  const sitemapStream = new SitemapStream({ hostname: 'https://admiral-studios.com' })
  reader.on('line', (line) => sitemapStream.write(line))

  // Add URLs for each blog to the sitemap
  allPosts.forEach((post) => {
    sitemapStream.write({ url: `/blog/${post.slug}`, changefreq: 'weekly', priority: 0.7 })
  })

  // End the sitemap stream and convert it to a string
  sitemapStream.end()
  const sitemapXml = await streamToPromise(sitemapStream)

  // Send the updated sitemap XML as the response
  res.setHeader('Content-Type', 'application/xml')
  res.send(sitemapXml)
}
