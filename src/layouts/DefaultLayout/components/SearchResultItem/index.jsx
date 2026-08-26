import styles from "./SearchResultItem.module.scss";

function SearchResultItem({ image, title, desc, status, hasStatus = true }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <img src={image} alt="image" className={styles.image} />
                <div className={styles.content}>
                    <p>{title}</p>
                    <p>{desc}</p>
                </div>
            </div>
            {hasStatus && <span className={styles.status}>{status}</span>}
        </div>
    );
}

export default SearchResultItem;
