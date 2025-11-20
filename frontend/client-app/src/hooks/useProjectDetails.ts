import {useEffect, useState} from "react";
import type {ProjectModel} from "../../../../shared/models/projectModel.ts";
import {projectService} from "../services/projectService.ts";

export function useProjectDetails(id: string) {
    const [blog, setBlog] = useState<ProjectModel | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        if (!id) return;

        let isMounted = true;
        setLoading(true);

        projectService.getProjectDetails(id)
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
