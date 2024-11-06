import { unstable_setRequestLocale } from 'next-intl/server';
import {GalleryProjects} from "@/app/[locale]/components/widgets";

interface PageProps {
    params: {
        locale: string;
    };
}

export async function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'ru' }];
}

export default async function PricePage({ params }: PageProps) {
    unstable_setRequestLocale(params.locale || 'en');

    return (
        <div>
            <GalleryProjects locale={params.locale || 'en'} />
        </div>
    );
}
