import { useState } from "react";
import styles from "./Notification.module.scss";
import Dropdown from "../Dropdown";
import SearchResultGroup from "../SearchResultGroup";
import SearchResultItem from "../SearchResultItem";

function Notification({style}) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={styles.wrapper} style={style}>
            <div className={styles.icon} onClick={() => setIsOpen(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    <path d="M320 64C302.3 64 288 78.3 288 96L288 99.2C215 114 160 178.6 160 256L160 277.7C160 325.8 143.6 372.5 113.6 410.1L103.8 422.3C98.7 428.6 96 436.4 96 444.5C96 464.1 111.9 480 131.5 480L508.4 480C528 480 543.9 464.1 543.9 444.5C543.9 436.4 541.2 428.6 536.1 422.3L526.3 410.1C496.4 372.5 480 325.8 480 277.7L480 256C480 178.6 425 114 352 99.2L352 96C352 78.3 337.7 64 320 64zM258 528C265.1 555.6 290.2 576 320 576C349.8 576 374.9 555.6 382 528L258 528z" />
                </svg>
            </div>

            {isOpen && (
                <Dropdown minWidth={"480px"} position="right" onClose={() => setIsOpen(false)}>
                    <SearchResultGroup title={"Thông báo"} tag="">
                        <SearchResultItem
                            image={
                                "https://files.fullstack.edu.vn/f8-prod/organization-logos/694743c405102.png"
                            }
                            title={
                                "Bài học Tạo và thao tác với Dom đã được thêm vào"
                            }
                            desc={"tháng trước"}
                            hasStatus={false}
                        />
                        <SearchResultItem
                            image={
                                "https://files.fullstack.edu.vn/f8-prod/organization-logos/694743c405102.png"
                            }
                            title={
                                "Bài học Tạo và thao tác với Dom đã được thêm vào"
                            }
                            desc={"tháng trước"}
                            hasStatus={false}
                        />
                        <SearchResultItem
                            image={
                                "https://files.fullstack.edu.vn/f8-prod/organization-logos/694743c405102.png"
                            }
                            title={
                                "Bài học Tạo và thao tác với Dom đã được thêm vào"
                            }
                            desc={"tháng trước"}
                            hasStatus={false}
                        />
                    </SearchResultGroup>
                </Dropdown>
            )}
        </div>
    );
}

export default Notification;
