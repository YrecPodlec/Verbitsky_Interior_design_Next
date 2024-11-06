// app/[locale]/components/pages/home/page.tsx

import Page from "@/app/[locale]/components/pages/home/page";

interface PageProps {
    params: {
        locale: string;
    };
}

export default function Home({ params }: PageProps): JSX.Element {
    const { locale } = params;

    return (
        <>
            <Page locale={locale} />
        </>
    );
}
