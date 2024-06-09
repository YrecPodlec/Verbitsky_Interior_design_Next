interface HookUseDataProps {
    data: any;
    loading?: boolean;
    error?: string | null;
    DataLength: number;
}

export interface GalleryBlockFeachProps {
    HookUseData: (url: string) => HookUseDataProps;
    DataUrlFeatch: string;
}