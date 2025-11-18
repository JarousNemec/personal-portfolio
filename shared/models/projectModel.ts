import {CategoryTag} from "./categoryTag";
import {ArticleImage} from "./articleImage";
import {ArticleSection} from "./articleSection";

export interface ProjectModel {
    id: string
    name: string;
    title: string;
    description: string;
    images: ArticleImage[];
    sections: ArticleSection[];
    tags: CategoryTag[];
}