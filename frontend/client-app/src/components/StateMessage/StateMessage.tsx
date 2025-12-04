import React from "react";
import styles from "./stateMessage.module.scss";

interface StateMessageProps {
    loading?: boolean;
    message?: string;
    className?: string;
}

const StateMessage: React.FC<StateMessageProps> = ({loading, message, className}) => {
    // Loading state
    if (loading) {
        return (
            <div className={`${className}`}>
                <div className={styles.spinner}></div>
            </div>
        );
    }

    // Message (error, empty, no data)
    if (message) {
        return (
            <div className={className ? className : ""}>
                <p className={styles.message}>{message}</p>
            </div>
        );
    }

    return null;
};

export default StateMessage;
