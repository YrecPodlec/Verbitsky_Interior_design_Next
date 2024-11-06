import { unstable_setRequestLocale } from 'next-intl/server';
import {PriceCardFeach} from "@/app/[locale]/components/features";

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
            <PriceCardFeach locale={params.locale || 'en'} />
        </div>
    );
}
