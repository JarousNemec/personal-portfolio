import React from "react";
import styles from "./tag.module.scss"
import type {TagModel} from "../../../../../shared/models/tagModel.ts";

type TagProps = {
    keyId: string;
    model: TagModel; // assuming TagModel is a string union
};

export const Tag: React.FC<TagProps> = ({keyId, model}) => {

    return (
        <span key={keyId} className={`${styles.tag} ${styles[model.type]}`}>
            {model.label}
          </span>
    )
}