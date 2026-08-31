import styles from "./Profile.module.scss";

import DefaultAvatar from "@/assets/images/avatar-placeholder.png";
import { useEffect, useState } from "react";

function Profile() {
    const [previewUrl, setPreviewUrl] = useState(null);

    useEffect(() => {
        return () => {
            URL.revokeObjectURL(previewUrl);
        };
    }, [previewUrl]);

    const handleChange = (e) => {
        const image = e.target.files[0];
        const previewUrl = URL.createObjectURL(image);
        setPreviewUrl(previewUrl);
    };

    return (
        <label>
            <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleChange}
            />
            <img
                className={styles.avatar}
                src={previewUrl || DefaultAvatar}
                alt="avatar"
            />
        </label>
    );
}

export default Profile;
