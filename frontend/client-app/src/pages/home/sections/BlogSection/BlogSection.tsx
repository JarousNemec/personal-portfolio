import React from 'react';
import Section from '../../../../components/Section/Section.tsx';
import {BlogCard} from "../../../../components/BlogCard/BlogCard.tsx";
import {useBlogs} from "../../../../hooks/useBlogs.ts";
import StateMessage from "../../../../components/StateMessage/StateMessage.tsx";

type BlogSectionProps = {
    className?: string;
}

const BlogSection: React.FC<BlogSectionProps> = ({className}) => {
    const {blogs, loading, error} = useBlogs();

    const blogsAvailable = ((blogs && blogs.length > 0) && !loading && !error);

    return (
        <>{blogsAvailable &&
            <Section id={"blog"} title={"Blog & poznámky"} containerClassName={`grid-cards justify-between gap-5`}
                     containerAriaLabel={"Seznam článků z blogu"} className={className}>
                <StateMessage key={"blogs-state-message"} loading={loading}
                              message={!blogsAvailable ? "Zatím jsem ještě nenapsal žádný blog" : undefined}
                              className={"row-center py-8"}/>
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
