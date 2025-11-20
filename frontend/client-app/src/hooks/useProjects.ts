import {useEffect, useState} from "react";
import type {ProjectModel} from "../../../../shared/models/projectModel.ts";
import {projectService} from "../services/projectService.ts";

export function useProjects() {
    const [blogs, setBlogs] = useState<ProjectModel[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        let isMounted = true;

        projectService.getProjects()
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
