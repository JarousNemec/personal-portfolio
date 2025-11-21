import {useEffect, useState} from "react";
import {blogService} from "../services/blogService";
import type {BlogModel} from "../../../../shared/models/blogModel.ts";

export function useBlogDetails(id: string | undefined) {
    const [blog, setBlog] = useState<BlogModel | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        if (!id) {
            setError(new Error("No blog id"));
            return;
        }

        let isMounted = true;
        setLoading(true);

        blogService
            .getBlogDetails(id)
            .then((data) => {
                if (isMounted) setBlog(data);
            })
            .catch((err) => {
                if (isMounted) setError(err);
            })
            .finally(() => {
                if (isMounted) setLoading(false);
            });

        return () => {
            isMounted = false;
        };
    }, [id]);

    return {blog, loading, error};
}
