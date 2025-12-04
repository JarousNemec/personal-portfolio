import styles from './metaList.module.scss';
import MetaItem from "../MetaItem/MetaItem.tsx";
import React from "react";

type MetaListProps = {
    className?: string;
}

const MetaList: React.FC<MetaListProps> = ({className}) => (
    <div className={`${[styles.metaList, className].filter(Boolean).join(" ")}`}>
        <MetaItem label="Lokalita" value="Hradec Králové, ČR" className={"row-between-2"}/>
        <MetaItem label="Nabízím" value="Praktická a chytrá řešení" className={"row-between-2"}/>
        <MetaItem label="Hodnoty" value="Výzvy, zodpovědnost, smysl" className={"row-between-2"}/>
        <MetaItem label="Aktualizace" value="listopad 2025" className={"row-between-2"}/>
    </div>
);

export default MetaList;