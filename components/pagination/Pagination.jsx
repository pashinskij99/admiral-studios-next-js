import { DOTS, usePagination } from './usePagination'
import styles from './Pagination.module.scss'
import Link from 'next/link'

const CustomPagination = ({ page, total, pageSize }) => {
  const paginationRange = usePagination({
    currentPage: page,
    totalCount: total,
    siblingCount: 1,
    pageSize,
  })

  if (page === 0 || paginationRange.length < 2) {
    return null
  }

  let lastPage = paginationRange[paginationRange.length - 1]
  return (
    <ul className={styles['pagination']}>
      <Link
        className={page === 1 ? styles['events-none'] : ''}
        href={page - 1 === 1 ? '/blog' : `/blog/page/${page - 1}`}>
        <li
          className={page === 1 ? styles['events-none'] : ''}
        >
          <div className={`${styles['prev']}`} />
        </li>
      </Link>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return (
            <li className={styles['dots']} key={Math.random()}>
              &#8230;
            </li>
          )
        }

        return (
          <Link
            key={pageNumber}
            href={pageNumber === 1 ? '/blog' : `/blog/page/${pageNumber}`}
            scroll={true}
          >
            <li
              className={pageNumber === page ? styles['active'] : ''}
            >
              {pageNumber}
            </li>
          </Link>

        )
      })}
      <Link
        className={page === lastPage ? styles['events-none'] : ''}
        href={`/blog/page/${page + 1}`}>
        <li
          className={page === lastPage ? styles['events-none'] : ''}
        >
          <div className={`${styles['next']}`} />
        </li>
      </Link>
    </ul>
  )
}

export default CustomPagination
