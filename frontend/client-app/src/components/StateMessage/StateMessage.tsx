import React from "react";
import styles from "./stateMessage.module.scss";

interface StateMessageProps {
    loading?: boolean;
    message?: string;
}

const StateMessage: React.FC<StateMessageProps> = ({ loading, message }) => {
    // Loading state
    if (loading) {
        return (
            <div className={styles.wrapper}>
                <div className={styles.spinner}></div>
            </div>
        );
    }

    // Message (error, empty, no data)
    if (message) {
        return (
            <div className={styles.wrapper}>
                <p className={styles.message}>{message}</p>
            </div>
        );
    }

    return null;
};

export default StateMessage;
