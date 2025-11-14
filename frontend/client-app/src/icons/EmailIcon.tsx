import styles from "./icon.module.scss"

const EmailIcon = () => (
    <svg className={styles.iconBtnSvg}

        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/>
        <path d="M22 6 12 13 2 6"/>
    </svg>
);

export default EmailIcon;
