import React from 'react'
import Post from './components/post/Post'
import styles from './BlogsPage.module.scss'
import Link from 'next/link'
import CustomPagination from '../../components/pagination/Pagination'

const BlogsPage = ({ posts, handlePage, page, total, pageSize }) => {
  return (
    <div className={styles['blogs-page']}>
      <div className={styles['blogs-page-heading']}>
        <h1>Digital Marketing Insights: Tips, Tricks & Strategies for Success</h1>
      </div>

      <div className={styles['blogs-page-wrapper']}>
        {posts.map(({ slug, _publishedAt, category, coverImage, title }) => (
          <Link key={slug} href={`/blog/${slug}`}>
            <Post
              className='post'
              category={category.name}
              img={coverImage.responsiveImage}
              publishedAt={_publishedAt}
              excerpt={title}
            />
          </Link>
        ))}
      </div>

      <CustomPagination handlePage={handlePage} page={page} total={total} pageSize={pageSize} />
    </div>
  )
}

export default BlogsPage
