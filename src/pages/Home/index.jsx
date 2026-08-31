import styles from "./Home.module.scss";

import AppLogo from "@/layouts/DefaultLayout/components/AppLogo";
import SearchForm from "@/layouts/DefaultLayout/components/SearchForm";
import MyCourses from "@/layouts/DefaultLayout/components/MyCourses";
import Notification from "@/layouts/DefaultLayout/components/Notification";
import UserMenu from "@/layouts/DefaultLayout/components/UserMenu";

function Home() {
    return (
        <div className={styles.wrapper}>
            <AppLogo />
            <SearchForm style={{marginLeft: "200px"}}/>
            <MyCourses style={{marginLeft: "200px"}}/>
            <Notification style={{marginLeft: "180px"}}/>
            <UserMenu style={{marginLeft: "32px"}}/>
        </div>
    );
}

export default Home;
