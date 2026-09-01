import styles from "./withLoading.module.scss";

function withLoading(Component) {
    return function WrappedComponent({ isLoading, ...props }) {
        return (
            <div>
                {isLoading ? <div className={styles.spinner}/> : <Component {...props} />}
            </div>
        );
    };
}

export default withLoading;
