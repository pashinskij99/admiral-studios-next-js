import { Image } from 'react-datocms/image'
import cn from 'classnames'

import styles from './Post.module.scss'
import { format } from 'date-fns'

const Post = ({
  img,
  category,
  publishedAt,
  excerpt,
  className,
  related = false,
}) => {
  return (
    <div
      className={cn(styles['post'], {
        [className]: className,
      })}
    >
      <div className={styles['post-heading']}>
        <p className={styles['post-heading-name']}>{category}</p>
        <p className={styles['post-heading-date']}>
          {format(new Date(publishedAt), 'dd.MM.yyyy')}
        </p>
      </div>
      <Image data={img} alt='Post Image' />
      {related ? (
        <h3 className={styles['post-body-text']}>{excerpt}</h3>
      ) : (
        <h2 className={styles['post-body-text']}>{excerpt}</h2>
      )}
    </div>
  )
}

export default Post
