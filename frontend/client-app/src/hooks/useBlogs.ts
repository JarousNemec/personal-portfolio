import {useEffect, useState} from "react";
import {blogService} from "../services/blogService";
import type {BlogModel} from "../../../../shared/models/blogModel.ts";

export function useBlogs() {
    const [blogs, setBlogs] = useState<BlogModel[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        let isMounted = true;

        blogService
            .getBlogs()
            .then((data) => {
                if (isMounted) setBlogs(data);
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
    }, []);

    return {blogs, loading, error};
}
