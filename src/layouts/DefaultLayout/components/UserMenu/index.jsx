import { useState } from "react";
import styles from "./UserMenu.module.scss";
import Dropdown from "../Dropdown";
import SearchResultItem from "../SearchResultItem";

function UserMenu({style}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.wrapper} style={style}>
            <div className={styles.avatar} onClick={() => setIsOpen(true)}>
                <img
                    src="https://files.f8.edu.vn/f8-prod/public-images/68f6fca7b904a.png"
                    alt="Avatar"
                />
            </div>

            {isOpen && (
                <Dropdown minWidth={"200px"} position="right" onClose={() => setIsOpen(false)} >
                    <SearchResultItem
                        image={
                            "https://files.f8.edu.vn/f8-prod/public-images/68f6fca7b904a.png"
                        }
                        title={"Tuấn Anh"}
                        desc={"@anhtuan194"}
                        hasStatus={false}
                    />

                    <ul className={styles.list} style={{marginTop: "18px"}}>
                        <li>
                            <a href="#" className={styles.item}>
                                Trang cá nhân
                            </a>
                        </li>
                        <li>
                            <a href="#" className={styles.item}>
                                Chứng chỉ của tôi
                            </a>
                        </li>
                    </ul>

                    <ul className={styles.list}>
                        <li>
                            <a href="#" className={styles.item}>
                                Viết blog
                            </a>
                        </li>
                        <li>
                            <a href="#" className={styles.item}>
                                Bài viết của tôi
                            </a>
                        </li>
                        <li>
                            <a href="#" className={styles.item}>
                                Bài viết đã lưu
                            </a>
                        </li>
                    </ul>

                    <ul className={styles.list}>
                        <li>
                            <a href="#" className={styles.item}>
                                Đăng nhập
                            </a>
                        </li>
                        <li>
                            <a href="#" className={styles.item}>
                                Đăng xuất
                            </a>
                        </li>
                    </ul>
                </Dropdown>
            )}
        </div>
    );
}

export default UserMenu;
