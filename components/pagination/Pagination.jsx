import React, { useState } from 'react'
import { DOTS, usePagination } from './usePagination'
import styles from './Pagination.module.scss'

const CustomPagination = ({ handlePage, page, total, pageSize }) => {
  const paginationRange = usePagination({
    currentPage: page,
    totalCount: total,
    siblingCount: 1,
    pageSize,
  })

  if (page === 0 || paginationRange.length < 2) {
    return null
  }

  const onNext = () => {
    handlePage(page + 1)
  }

  const onPrevious = () => {
    handlePage(page - 1)
  }

  let lastPage = paginationRange[paginationRange.length - 1]
  return (
    <ul className={styles['pagination']}>
      <li onClick={onPrevious} className={page === 1 ? styles['events-none'] : ''}>
        <div className={`${styles['prev']}`} />
      </li>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return (
            <li className={styles['dots']} key={Math.random()}>
              &#8230;
            </li>
          )
        }

        return (
          <li
            key={pageNumber}
            className={pageNumber === page ? styles['active'] : ''}
            onClick={() => handlePage(pageNumber)}>
            {pageNumber}
          </li>
        )
      })}
      <li onClick={onNext} className={page === lastPage ? styles['events-none'] : ''}>
        <div className={`${styles['next']}`} />
      </li>
    </ul>
  )
}

export default CustomPagination
