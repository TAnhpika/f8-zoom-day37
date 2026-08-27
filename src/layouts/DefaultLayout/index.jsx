// import styles from './DefaultLayout.module.scss'

import { Outlet } from "react-router";
import Navigation from "../../components/Navigation";

function DefaultLayout() {
    return (
        <>
            <Navigation />
            <Outlet />
        </>
    );
}

export default DefaultLayout;
