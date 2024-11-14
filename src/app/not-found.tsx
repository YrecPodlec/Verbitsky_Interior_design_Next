import RootLayout from "@/app/[locale]/layout";
import React from "react";
type Props = {
    children: React.ReactNode;
    params: { locale: string };
};
export default function NotFound({params}: Props) {
    return(
        <RootLayout params={params}>
            <section>

            </section>
        </RootLayout>
    );
};