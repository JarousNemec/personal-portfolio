import styles from "./footer.module.scss";

type FooterProps = {
    className?: string
}

const Footer: React.FC<FooterProps> = ({className}) => {
    return (<footer className={`${styles.footer} ${className}`}>
        © 2025 Jaroslav Němec - since 2005 (beta)
    </footer>)
}

export default Footer;