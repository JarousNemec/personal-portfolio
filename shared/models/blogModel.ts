import type {ArticleImage} from "./articleImage";
import type {ArticleSection} from "./articleSection";

export interface BlogModel {
    id: string;
    name: string;
    title: string;
    description: string;
    sections: ArticleSection[];
    images: ArticleImage[];
}