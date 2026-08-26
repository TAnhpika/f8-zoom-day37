import styles from "./AppLogo.module.scss";

import Logo from "../../../../assets/images/f8-logo.png";
import { Link } from "react-router";

function AppLogo() {
    return (
        <div className={styles.wrapper}>
            <Link to={"/"}>
                <img src={Logo} alt="Logo" className={styles.logo} />
            </Link>
            <span className={styles.desc}>Học Lập Trình Để Đi Làm</span>
        </div>
    );
}

export default AppLogo;
