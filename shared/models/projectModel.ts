import type {ArticleImage} from "./articleImage";
import type {ArticleSection} from "./articleSection";
import type {TagModel} from "./tagModel";

export interface ProjectModel {
    id: string
    name: string;
    title: string;
    description: string;
    downloadUrl: string;
    gitRepoUrl: string;
    downloadLabel: string;
    gitRepoLabel: string;
    images: ArticleImage[];
    sections: ArticleSection[];
    tags: TagModel[];
}