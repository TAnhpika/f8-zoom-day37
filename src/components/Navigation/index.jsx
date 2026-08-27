import styles from './Navigation.module.scss'

import { Link } from "react-router";

function Navigation() {
    const items = [
        {
            title: "Home",
            to: "/",
        },
        {
            title: "Modal demo",
            to: "/modal-demo",
        },
        {
            title: "Scroll demo",
            to: "/scroll-demo",
        },
        {
            title: "Profile",
            to: "/profile",
        },
    ];
    return (
        <>
            <ul className={styles.list}>
                {items.map((item, index) => (
                    <li key={index}>
                        <Link to={item.to} className={styles.item}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Navigation;
