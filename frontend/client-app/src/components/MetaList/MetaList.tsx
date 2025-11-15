
import styles from './metaList.module.scss';
import MetaItem from "../MetaItem/MetaItem.tsx";

const MetaList = () => (
  <div className={styles.metaList}>
    <MetaItem label="Lokace" value="Hradec Králové, ČR" />
    <MetaItem label="Specializace" value="ESP32, MQTT, Node.js, React" />
    <MetaItem label="Poslední update" value="listopad 2025" />
  </div>
);

export default MetaList;