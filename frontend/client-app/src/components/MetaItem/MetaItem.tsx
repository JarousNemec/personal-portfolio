import styles from './metaItem.module.scss';
import React from "react";

type MetaItemProps = {
    label: string;
    value: string;
    className?: string;
}

const MetaItem:React.FC<MetaItemProps> = ({ label, value, className }) => (
  <div className={className ? className : ""}>
    <span className={styles.metaKey}>{label}</span>
    <span className={styles.metaValue}>{value}</span>
  </div>
);

export default MetaItem;