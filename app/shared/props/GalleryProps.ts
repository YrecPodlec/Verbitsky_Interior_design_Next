export interface Project {
    _id: string;
    title: string;
    size: string;
    images: any[];
    description: string;
    deadline: string;
    StyleType: string;
}

export interface GalleryBlockProps {
    GalleryData: {
        results: Project[];
    };
    getDataProject: (data: Project) => void;
}
