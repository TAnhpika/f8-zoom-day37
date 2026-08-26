// import styles from './DefaultLayout.module.scss'

import { Outlet } from "react-router";

function DefaultLayout() {
    return (
        <div>
            <Outlet/>
        </div>
    )
}

export default DefaultLayout;
