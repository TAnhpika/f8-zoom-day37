import styles from './Navigation.module.scss'

import { NavLink } from "react-router";

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
        {
            title: "PerformanceDemo",
            to: "/performance-demo",
        },
        {
            title: "FocusDemo",
            to: "/focus-demo",
        },
        {
            title: "HOCDemo",
            to: "/hoc-demo",
        },
        {
            title: "RenderPropsDemo",
            to: "/render-props-demo",
        },
        {
            title: "CustomHooksDemo",
            to: "/custom-hooks-demo",
        },
    ];
    return (
        <>
            <ul className={styles.list}>
                {items.map((item, index) => (
                    <li key={index}>
                        <NavLink to={item.to} className={({isActive}) => isActive ? `${styles.item} ${styles.active}` : styles.item}>{item.title}</NavLink>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Navigation;
