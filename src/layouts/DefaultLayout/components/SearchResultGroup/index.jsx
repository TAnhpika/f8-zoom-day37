import { Link } from "react-router";
import styles from "./SearchResultGroup.module.scss";

function SearchResultGroup({ title, tag = "Xem thêm", children }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.heading}>
                <span>{title}</span>
                <Link className={styles.tag}>{tag}</Link>
            </div>
            <div className={styles.body}>{children}</div>
        </div>
    );
}

export default SearchResultGroup;
