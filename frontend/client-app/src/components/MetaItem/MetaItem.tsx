import styles from './metaItem.module.scss';

const MetaItem = ({ label, value }: { label: string; value: string }) => (
  <div className={styles.meta}>
    <span className={styles.metaKey}>{label}</span>
    <span className={styles.metaValue}>{value}</span>
  </div>
);

export default MetaItem;