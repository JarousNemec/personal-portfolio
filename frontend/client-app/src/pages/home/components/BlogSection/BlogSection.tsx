import React from 'react';
import Section from '../../../../components/Section/Section';
import styles from "./blogSection.module.scss"
import {BlogCard} from "./components/BlogCard/BlogCard.tsx";
import {useBlogs} from "../../../../hooks/useBlogs.ts";
import StateMessage from "../../../../components/StateMessage/StateMessage.tsx";

const BlogSection: React.FC = () => {
    const {blogs, loading, error} = useBlogs();

    const blogsAvailable = ((blogs && blogs.length > 0) && !loading && !error);

    return (
        <>{blogsAvailable &&
            <Section id={"blog"} title={"Blog & poznámky"} containerClassName={styles.blogsGrid}
                     containerAriaLabel={"Seznam článků z blogu"} containerRole={"list"}>
                <StateMessage key={"blogs-state-message"} loading={loading}
                              message={!blogsAvailable ? "Zatím jsem ještě nenapsal žádný blog" : undefined}/>
                {blogsAvailable && (blogs.map((blog, index) => <BlogCard
                    key={blog.id + "-" + index}
                    id={blog.id}
                    title={blog.title}
                    description={blog.description}/>))}
            </Section>}
        </>
    );
};

export default BlogSection;
