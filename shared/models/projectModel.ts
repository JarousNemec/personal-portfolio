import {CategoryTag} from "./categoryTag";
import {ArticleImage} from "./articleImage";
import {ArticleSection} from "./articleSection";

export interface ProjectModel {
    id: string
    name: string;
    title: string;
    description: string;
    downloadUrl: string;
    gitRepoUrl: string;
    images: ArticleImage[];
    sections: ArticleSection[];
    tags: CategoryTag[];
}