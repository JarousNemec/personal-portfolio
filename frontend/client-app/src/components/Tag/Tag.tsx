import React from "react";
import styles from "./tag.module.scss"
import type {TagModel} from "../../../../../shared/models/tagModel.ts";

type TagProps = {
    keyId: string;
    model: TagModel; // assuming TagModel is a string union
    className?: string;
};

export const Tag: React.FC<TagProps> = ({keyId, model, className}) => {

    return (
        <span key={keyId}
              className={`${[styles.tag, styles[model.type], className].filter(Boolean).join(" ")}`}>
            {model.label}
          </span>
    )
}