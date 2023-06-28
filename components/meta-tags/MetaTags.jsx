import Head from 'next/head'
import { useEffect } from 'react'

const MetaTags = ({ title, description, keywords, canonical }) => {
  useEffect(() => {
    document.documentElement.lang = 'en'
  }, [])
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content='https://admiral-studios.com/images/fb_image.png' />
      <meta property='og:url' content='https://admiral-studios.com/' />
      <meta property='og:type' content='website' />
      <meta property='og:locale' content='en_US' />
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='canonical' key='canonical' href={canonical} />
      <link rel='alternate' hrefLang='en' href='https://admiral-studios.com/' />
      <link rel='icon' type='image/png' sizes='32x32' href='/images/favicon-16x16.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/images/favicon-16x16.png' />
      <link rel='apple-touch-icon' sizes='180x180' href='/public/apple-touch-icon.png' />
      {/*<link rel='manifest' href='/public/site.webmanifest'/>*/}
      <link rel='mask-icon' href='/public/safari-pinned-tab.svg' color='#5bbad5' />
      <meta name='msapplication-TileColor' content='#da532c' />
      <meta name='robots' content='noindex, nofollow' />
    </Head>
  )
}

export default MetaTags
