import React, { useEffect } from 'react'
import { Image as DatoImage } from 'react-datocms/image'
import { StructuredText } from 'react-datocms/structured-text'

import { request } from '../../../services/datocms'
import { Wrapper } from '../../../components'

import styles from './Style.module.scss'
import { format } from 'date-fns'
import Post from '../../../scenes/blogs-page/components/post/Post'
import Link from 'next/link'

const BlogPage = ({ postData, related }) => {

  return (
    <Wrapper
      isHeaderWhite={false}
      isFooterWhite={false}
      textColor='white'
      bgColor='blue'
      title={postData?.seoSettings?.title}
      canonical={`https://admiral-studios.com/blog/${postData.slug}`}
      description={postData?.seoSettings?.description}>
      <div className={styles['blog-page']}>
        <div className={styles['blog-page-heading']}>
          <DatoImage
            className={styles['blog-page-heading-info-img']}
            data={postData.coverImage.responsiveImage}
          />
          <div className={styles['blog-page-heading-info']}>
            <div className={styles['blog-page-heading-info-main']}>
              <div className={styles['blog-page-heading-info-main-worm']}>
                <p>{postData.category.name}</p>
              </div>
              <h1>{postData.title}</h1>
              <p className={styles['blog-page-heading-info-main-text']}>{postData.excerpt}</p>
            </div>
            <div className={styles['blog-page-heading-info-data']}>
              <div className={styles['blog-page-heading-info-data-wrapper']}>
                <p>{format(new Date(postData._publishedAt), 'dd.MM.yyyy')}</p>
                <span className={styles['blog-page-heading-info-data-wrapper-slash']}>/</span>
                <p>{postData.minutesRead} min. read</p>
              </div>
            </div>
          </div>
          <div className={styles['blog-page-heading-overlay']}></div>
        </div>
        <div className={styles['blog-page-body']}>
          <StructuredText
            data={postData.content}
            renderBlock={({ record }) => {
              switch (record.__typename) {
                case 'ImageBlockRecord':
                  return <DatoImage data={record.image.responsiveImage} />
                default:
                  return null
              }
            }}
          />
        </div>

        {related.length ? (
          <div className='container'>
            <h2 className={styles['blog-page-related-title']}>Related articles</h2>
            <div className={styles['blog-page-related-wrapper']}>
              {related.map(({ slug, _publishedAt, category, coverImage, title }) => (
                <Link key={slug} href={`/blog/${slug}`}>
                  <div className={styles.relatedPostWrapper}>
                    <Post
                      key={slug}
                      className={`post ${styles['blog-page-related-post']}`}
                      category={category.name}
                      img={coverImage.responsiveImage}
                      publishedAt={_publishedAt}
                      excerpt={title}
                    />
                  </div>

                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </Wrapper>
  )
}

const PATHS_QUERY = `
query MyQuery {
  allPosts {
    slug
  }
}
`

export const getStaticPaths = async (context) => {
  const slugQuery = await request({
    query: PATHS_QUERY,
    preview: context.preview,
  })

  let paths = []
  slugQuery.allPosts.map((p) => paths.push(`/blog/${p.slug}`))

  return {
    paths,
    fallback: 'blocking',
  }
}

const ARTICLE_QUERY = `
query MyQuerry($slug: String) {
  post(filter: {slug: {eq: $slug}}) {
    author {
      id
      name
    }
    excerpt
    id
    date
    title
    seoReadabilityAnalysis
    seoSettings {
      description
      title
      twitterCard
    }
    coverImage {
      responsiveImage {
        alt
        aspectRatio
        base64
        bgColor
        height
        sizes
        src
        srcSet
        title
        webpSrcSet
        width
      }
    }
    content {
      value
      blocks {
        __typename
        ... on ImageBlockRecord {
          id
          image {
          	responsiveImage {
              width
              webpSrcSet
              title
              srcSet
              src
              sizes
              height
              bgColor
              base64
              aspectRatio
              alt
          	}
          }
        }
      }
    }
    category {
      name
      id
    }
    _publishedAt
    slug
    minutesRead
  }
}
`

const RELATED_ARTICLES_QUERY = `query MyQuerry($first: IntType = 5, $categoryId: ItemId, $postId: ItemId) {
  allPosts(first: $first, orderBy: _createdAt_DESC, filter: {category: {eq: $categoryId}, id: {neq: $postId}}) {
    slug
    excerpt
    id
    title
    coverImage {
      responsiveImage {
        alt
        aspectRatio
        base64
        bgColor
        height
        sizes
        src
        srcSet
        title
        webpSrcSet
        width
      }
    }
    category {
      name
      id
    }
    _publishedAt
  }
}`

export const getStaticProps = async ({ params, preview }) => {
  const postRes = await request({
    query: ARTICLE_QUERY,
    variables: { slug: params.slug },
  })

  const relatedRes = await request({
    query: RELATED_ARTICLES_QUERY,
    variables: { categoryId: postRes.post.category.id, postId: postRes.post.id },
  })

  return {
    props: {
      postData: postRes.post,
      related: relatedRes.allPosts,
    },
    revalidate: 120,
  }
}

export default BlogPage
