import {useEffect, useState} from "react";
import type {ProjectModel} from "../../../../shared/models/projectModel.ts";
import {projectService} from "../services/projectService.ts";

export function useProjectDetails(id: string | undefined) {
    const [project, setProject] = useState<ProjectModel | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        if (!id) {
            setError(new Error("No project id"));
            return;
        }

        let isMounted = true;
        setLoading(true);

        projectService.getProjectDetails(id)
            .then((data) => {
                if (isMounted) setProject(data);
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

    return {project, loading, error};
}
