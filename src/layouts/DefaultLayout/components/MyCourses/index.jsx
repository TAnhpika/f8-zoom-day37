import { useState } from "react";
import Dropdown from "../Dropdown";
import SearchResultGroup from "../SearchResultGroup";
import SearchResultItem from "../SearchResultItem";

import styles from "./MyCourses.module.scss";

function MyCourses({ style }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={styles.wrapper} style={style}>
            <div className={styles.button} onClick={() => setIsOpen(!isOpen)}>
                Khóa học của tôi
            </div>

            {isOpen && (
                <Dropdown
                    minWidth={"350px"}
                    maxHeight={"300px"}
                    position="right"
                    onClose={() => setIsOpen(false)}
                >
                    <SearchResultGroup
                        title={"Khóa học của tôi"}
                        tag="Xem tất cả"
                    >
                        <SearchResultItem
                            image={
                                "https://files.f8.edu.vn/f8-prod/courses/31/67f4c93c28d4b.png"
                            }
                            title={"Fullstack Web"}
                            desc={"Học cách đây 4 ngày trước"}
                            hasStatus={false}
                        />
                        <SearchResultItem
                            image={
                                "https://files.f8.edu.vn/f8-prod/courses/19/66aa28194b52b.png"
                            }
                            title={"Fullstack Web"}
                            desc={"Học cách đây 4 ngày trước"}
                            hasStatus={false}
                        />
                        <SearchResultItem
                            image={
                                "https://files.f8.edu.vn/f8-prod/courses/15/62f13d2424a47.png"
                            }
                            title={"Fullstack Web"}
                            desc={"Học cách đây 4 ngày trước"}
                            hasStatus={false}
                        />
                        <SearchResultItem
                            image={
                                "https://files.f8.edu.vn/f8-prod/courses/2.png"
                            }
                            title={"Fullstack Web"}
                            desc={"Học cách đây 4 ngày trước"}
                            hasStatus={false}
                        />
                        <SearchResultItem
                            image={
                                "https://files.f8.edu.vn/f8-prod/courses/13/13.png"
                            }
                            title={"Fullstack Web"}
                            desc={"Học cách đây 4 ngày trước"}
                            hasStatus={false}
                        />
                        <SearchResultItem
                            image={
                                "https://files.f8.edu.vn/f8-prod/courses/6.png"
                            }
                            title={"Fullstack Web"}
                            desc={"Học cách đây 4 ngày trước"}
                            hasStatus={false}
                        />
                    </SearchResultGroup>
                </Dropdown>
            )}
        </div>
    );
}

export default MyCourses;
