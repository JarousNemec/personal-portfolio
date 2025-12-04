import React from 'react';
import styles from './userCard.module.scss'

type UserCardProps = {
    className?: string
}

const UserCard: React.FC<UserCardProps> = ({className}) => {
    return (
            <div className={className ? className : ''}>
                <div className={styles.avatar} aria-hidden="true">JN</div>
                <div>
                    <div className={styles.cardTitle}>Jaroslav Němec</div>
                    <div className={styles.cardSubtitle}>Full-stack vývojář</div>
                </div>
            </div>
    );
};

export default UserCard;