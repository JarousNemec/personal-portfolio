import React from 'react';
import styles from './heroAside.module.scss'
import MetaList from "../MetaList/MetaList.tsx";
import UserCard from "../UserCard/UserCard.tsx";

type HeroAsideProps = {
    className?: string;
}

const HeroAside: React.FC<HeroAsideProps> = ({className}) => {
    return (
        <aside className={`${[styles.heroAside, className].filter(Boolean).join(" ")}`} aria-hidden="false">
            <UserCard className={"flex items-center gap-3 mb-3 "}/>
            <MetaList className={"flex-column gap-3"}/>
        </aside>
    );
};

export default HeroAside;