import React from 'react';
import styles from './userCard.module.scss'

const UserCard: React.FC = () => {
    return (
            <div style={{display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '12px'}}>
                <div className={styles.avatar} aria-hidden="true">JN</div>
                <div>
                    <div style={{fontWeight: 700, color: 'var(--text)'}}>Jaroslav Němec</div>
                    <div style={{color: 'var(--muted)', fontSize: '13px'}}>Full-stack vývojář</div>
                </div>
            </div>
    );
};

export default UserCard;