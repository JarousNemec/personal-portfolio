import React from "react";
import styles from "../../pages/blog/Blog/blog.module.scss";

interface PageProps {
    title: string;
    children?: React.ReactNode;
}

const Page: React.FC<PageProps> = ({title, children}) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    );
}

export default Page;