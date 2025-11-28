import {projectDetailMock, projectListMock} from "./mocks/projectMock.ts"
import type {ProjectModel} from "../../../../shared/models/projectModel.ts";


const isDev = import.meta.env.DEV;

export const projectService = {

    async getProjects(): Promise<ProjectModel[]> {
        if (isDev) {
            return projectListMock;
        }

        const res = await fetch("/granery/api/projects");
        if (!res.ok) {
            throw new Error("Projects list fetch failed.");
        }
        return res.json();
    },

    async getProjectDetails(id: string): Promise<ProjectModel> {
        if (isDev) {
            return projectDetailMock;
        }

        const res = await fetch(`/granery/api/project/${id}`);
        if (!res.ok) {
            throw new Error("Project detail fetch failed");
        }

        return res.json();
    }
};