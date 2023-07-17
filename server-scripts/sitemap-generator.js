const { GraphQLClient } = require('graphql-request')
const fs = require('fs')

const ALL_POSTS_QUERY = `query MyQuery {
  allPosts {
    slug
  }
}`

;(async () => {
  const { allPosts } = await request({ query: ALL_POSTS_QUERY })
  const newSitemapBlogData = allPosts.map(({ slug }) => getUrl(`${slug}`))
  const newSitemapPagesData = getStaticPath().map((name) => getUrl(name))

  const sitemapSubData = [
    { name: 'sitemap-blog.xml', data: newSitemapBlogData },
    { name: 'sitemap-pages.xml', data: newSitemapPagesData },
  ]

  const newSitemapIndexData = sitemapSubData.map(({ name }) =>
    getIndexUrl(name)
  )

  sitemapSubData.forEach(({ name, data }) => {
    createSubSitemap(`public/${name}`, data)
  })

  createIndexSitemap('public/sitemap.xml', newSitemapIndexData)
})()

function getUrl(name) {
  return `
        <url>
          <loc>https://admiral-studios.com/${name}</loc>
          <lastmod>2023-04-18T12:27:40.152Z</lastmod>
          <priority>1</priority>
        </url>
  `
}

function getStaticPath() {
  const staticPath = fs
    .readdirSync('pages')
    .filter(
      (staticPage) =>
        !['api', '_app.js', '_document.js', '404.jsx', 'thank.jsx', '[slug]'].includes(
          staticPage
        )
    )
    .map((staticPagePath) =>
      staticPagePath !== 'index.jsx' ? staticPagePath.split('.')[0] : ''
    )

  return staticPath
}

function getIndexUrl(name) {
  return `
      <sitemap>
        <loc>https://admiral-studios.com/${name}</loc>
      </sitemap>
    `
}

function createSubSitemap(fileName, data) {
  const sitemapSubStart =
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
  const sitemapSubEnd = '</urlset>'

  createAndWriteFile(
    fileName,
    [sitemapSubStart, data.join(' '), sitemapSubEnd].join(' ')
  )
}

function createIndexSitemap(fileName, data) {
  const sitemapIndexStart = `<?xml version="1.0" encoding="UTF-8"?>
  <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`
  const sitemapIndexEnd = '</sitemapindex>'

  createAndWriteFile(
    fileName,
    [sitemapIndexStart, data.join(' '), sitemapIndexEnd].join(' ')
  )
}

function createAndWriteFile(pathWithFileName, content) {
  fs.writeFileSync(pathWithFileName, content)
}

function request({
  query,
  variables,
  includeDrafts = false,
  excludeInvalid = false,
}) {
  const headers = {
    authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
  }
  if (includeDrafts) {
    headers['X-Include-Drafts'] = 'true'
  }
  if (excludeInvalid) {
    headers['X-Exclude-Invalid'] = 'true'
  }
  const client = new GraphQLClient('https://graphql.datocms.com', { headers })
  return client.request(query, variables)
}
