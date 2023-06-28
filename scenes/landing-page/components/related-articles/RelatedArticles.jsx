import styles from './RelatedArticles.module.scss'

const relatedArticles = [
    { id: 0, name: 'Articles 1' },
]

const RelatedArticles = () => {
    return (
        <div className={styles.relatedArticles}>
            <div className='container'>
                <h2>Related Articles</h2>

                <ul className={styles.listWrapper}>

                </ul>
            </div>
        </div>
    )
}

export default RelatedArticles