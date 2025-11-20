import {blogDetailsMock, blogListMock} from "./mocks/blogMock.ts"
import type {BlogModel} from "../../../../shared/models/blogModel.ts";


const isDev = import.meta.env.DEV;

export const blogService = {

    async getBlogs(): Promise<BlogModel[]> {
        if (isDev) {
            return blogListMock;
        }

        const res = await fetch("/api/blogs");
        if (!res.ok) {
            throw new Error("Blogs list fetch failed.");
        }
        return res.json();
    },

    async getBlogDetails(id: string): Promise<BlogModel> {
        if (isDev) {
            return blogDetailsMock;
        }

        const res = await fetch(`/api/blog/${id}`);
        if (!res.ok) {
            throw new Error("Blog detail fetch failed");
        }

        return res.json();
    }
};