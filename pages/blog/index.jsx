import React, { useEffect, useRef, useState } from 'react'
import { Wrapper } from '../../components'
import BlogsPage from '../../scenes/blogs-page/BlogsPage'

import { request } from '../../services/datocms'
import { config } from '../../configs'

const BlogIndex = () => {
  const blogWrapperRef = useRef(null)
  const [posts, setPosts] = useState([])
  const [allCount, setAllCount] = useState(0)

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await request({
        query: HOMEPAGE_QUERY,
        variables: {
          first: config.articleCount,
          skip: (1 - 1) * config.articleCount,
        },
      })

      setPosts(data.allPosts)
      setAllCount(data._allPostsMeta.count)
    }

    fetchPosts()
  }, [])

  return (
    <>
      <Wrapper
        isHeaderWhite={false}
        isFooterWhite={true}
        isShowBlog={false}
        textColor='white'
        bgColor='blue'
        title={'Digital Marketing Insights and Tips | Admiral Studio\'s Blog'}
        canonical={'https://admiral-studios.com/blog'}
        description={
          'Boost your online presence with Admiral Studio\'s blog. The latest digital marketing strategies, tips, and trends are just one click away!'
        }
      >
        <BlogsPage
          blogWrapperRef={blogWrapperRef}
          posts={posts}
          page={1 || 0}
          total={allCount}
          pageSize={config.articleCount}
        />
      </Wrapper>
    </>
  )
}

const HOMEPAGE_QUERY = `query MyQuerry ($first: IntType = 10, $skip: IntType = 0) {
  allPosts(first: $first, skip: $skip, orderBy: _createdAt_DESC) {
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
  _allPostsMeta {
    count
  }
}`

export default BlogIndex
