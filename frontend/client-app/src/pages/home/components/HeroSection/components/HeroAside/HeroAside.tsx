import React from 'react';
import styles from './heroAside.module.scss'
import MetaList from "../../../../../../components/MetaList/MetaList.tsx";
import UserCard from "../../../../../../components/UserCard/UserCard.tsx";

const HeroAside: React.FC = () => {
    return (
        <aside className={styles.heroAside} aria-hidden="false">
            <UserCard/>
            <MetaList/>
        </aside>
    );
};

export default HeroAside;