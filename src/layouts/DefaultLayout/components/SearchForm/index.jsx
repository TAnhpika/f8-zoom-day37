import { useState } from "react";
import styles from "./SearchForm.module.scss";
import Dropdown from "../Dropdown";
import SearchResultGroup from "../SearchResultGroup";
import SearchResultItem from "../SearchResultItem";

function SearchForm({style}) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={styles.wrapper} style={style}>
            <form className={styles.form}>
                <span className={styles.icon}>⌕</span>

                <input
                    type="text"
                    placeholder="Tìm khoá học, bài tập, hỏi đáp..."
                    className={styles.input}
                    onFocus={() => setIsOpen(true)}
                    onBlur={() => setIsOpen(false)}
                />

                <button className={styles.button} type="submit">
                    Search
                </button>
            </form>

            {isOpen && (
                <Dropdown minWidth={600}>
                    <SearchResultGroup title={"Khóa học phù hợp"}>
                        <SearchResultItem
                            image={
                                "https://files.f8.edu.vn/f8-prod/courses/6.png"
                            }
                            title={"Node & ExpressJS"}
                            desc={"Khóa học"}
                            status={"Đã mua"}
                        />
                        <SearchResultItem
                            image={
                                "https://files.f8.edu.vn/f8-prod/courses/31/67f4c93c28d4b.png"
                            }
                            title={"Fullstack Web"}
                            desc={"Khóa học Pro"}
                            status={"Đã mua"}
                        />
                        <SearchResultItem
                            image={
                                "https://files.f8.edu.vn/f8-prod/courses/28/6a420c5dbbe67.png"
                            }
                            title={"Devops for Engineers"}
                            desc={"Khóa học"}
                            status={"Đang mở"}
                        />
                    </SearchResultGroup>

                    <SearchResultGroup title={"Bài học"}>
                        <SearchResultItem
                            image={
                                "https://files.f8.edu.vn/f8-prod/courses/13/13.png"
                            }
                            title={"Arrow function"}
                            desc={"Xây dựng website với ReactJS"}
                            status={"Bài học miễn phí"}
                        />
                        <SearchResultItem
                            image={
                                "https://files.f8.edu.vn/f8-prod/courses/13/13.png"
                            }
                            title={"Thực hành tạo Arrow function"}
                            desc={"Xây dựng website với ReactJS"}
                            status={"Bài học miễn phí"}
                        />
                        <SearchResultItem
                            image={
                                "https://files.f8.edu.vn/f8-prod/courses/4/61a9e9e701506.png"
                            }
                            title={"Train function"}
                            desc={`App "Đừng Chạm Tay Lên Mặt"`}
                            status={"Bài học miễn phí"}
                        />
                    </SearchResultGroup>

                    <SearchResultGroup title={"Video"}>
                        <SearchResultItem
                            image={
                                "https://i.ytimg.com/vi/1EgUEeToJR0/maxresdefault.jpg"
                            }
                            title={"Khởi tạo dự án Fullstack #3"}
                            desc={"311 lượt xem"}
                            status={"Video"}
                        />
                        <SearchResultItem
                            image={
                                "https://i.ytimg.com/vi/1EgUEeToJR0/maxresdefault.jpg"
                            }
                            title={"Khởi tạo dự án Fullstack #2"}
                            desc={"198 lượt xem"}
                            status={"Video"}
                        />
                        <SearchResultItem
                            image={
                                "https://i.ytimg.com/vi/1EgUEeToJR0/maxresdefault.jpg"
                            }
                            title={"Khởi tạo dự án Fullstack #1"}
                            desc={"357 lượt xem"}
                            status={"Video"}
                        />
                    </SearchResultGroup>
                </Dropdown>
            )}
        </div>
    );
}

export default SearchForm;
