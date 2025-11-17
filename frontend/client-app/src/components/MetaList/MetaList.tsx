import styles from './metaList.module.scss';
import MetaItem from "../MetaItem/MetaItem.tsx";

const MetaList = () => (
    <div className={styles.metaList}>
        <MetaItem label="Lokalita" value="Hradec Králové, ČR"/>
        <MetaItem label="Nabízím" value="Praktická a chytrá řešení"/>
        <MetaItem label="Hodnoty" value="Výzvy, zodpovědnost, smysl"/>
        <MetaItem label="Aktualizace" value="listopad 2025"/>
    </div>
);

export default MetaList;