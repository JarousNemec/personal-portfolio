import React, { useState } from "react";
import styles from "./imageCarousel.module.scss";
import type {ArticleImage} from "../../../../../shared/models/articleImage.ts";

type ImageCarouselProps = {
    parentId: string
    parentType: string
    images: ArticleImage[];
};

const ImageCarousel: React.FC<ImageCarouselProps> = ({parentId, parentType, images }) => {
    const [index, setIndex] = useState(0);

    const prev = () => {
        setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
    };

    const next = () => {
        setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
    };

    if (!images || images.length === 0) {
        return <p>No images available.</p>;
    }

    const { id, description } = images[index];
    const url = `/granery/api/image/${parentType}/${parentId}/${id}`;

    return (
        <div className={styles.carousel}>
            <button className={styles.navButton} onClick={prev}>‹</button>

            <div className={styles.imageWrapper}>
                <img src={url} alt={description} />
                <p className={styles.caption}>{description}</p>
            </div>

            <button className={styles.navButton} onClick={next}>›</button>
        </div>
    );
};

export default ImageCarousel;
