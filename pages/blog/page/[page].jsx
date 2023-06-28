import React, { useEffect, useState } from 'react'
import { Wrapper, Header } from '../../../components'
import BlogsPage from '../../../scenes/blogs-page/BlogsPage'

import { request } from '../../../services/datocms'
import { useRouter } from 'next/router'

const Blog = ({ page }) => {
  const { push } = useRouter()

  const [posts, setPosts] = useState([])
  const [allCount, setAllCount] = useState(0)

  const onChangePage = (page) => {
    push(`/blog/page/${page}`)
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await request({
        query: HOMEPAGE_QUERY,
        variables: { first: 12, skip: (+page - 1) * 12 },
      })

      setPosts(data.allPosts)
      setAllCount(data._allPostsMeta.count)
    }

    window.scrollTo({ top: 0 })

    fetchPosts()
  }, [page])

  return (
    <>
      <Wrapper
        isHeaderWhite={false}
        isFooterWhite={true}
        isShowBlog={false}
        textColor='white'
        bgColor='blue'
        title={'Digital Marketing Insights and Tips | Admiral Studio\'s Blog'}
        canonical={`https://admiral-studios.com/blog/page/${page}/`}
        description={
          'Boost your online presence with Admiral Studio\'s blog. The latest digital marketing strategies, tips, and trends are just one click away!'
        }>
        <BlogsPage
          posts={posts}
          handlePage={onChangePage}
          page={+page || 0}
          total={allCount}
          pageSize={12}
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

export async function getServerSideProps(ctx) {
  return {
    props: {
      page: ctx.query.page,
    },
  }
}

export default Blog
