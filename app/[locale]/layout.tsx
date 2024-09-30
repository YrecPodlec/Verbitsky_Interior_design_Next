import "./globals.css";
import React from "react";
import '@/app/shared/fonts/fonts.css';
import { SpeedInsights } from "@vercel/speed-insights/next";
import Head from "next/head";
import { DynamicNavBar } from "@/app/features";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";

interface GenerateMetadataParams {
    params: {
        locale: string;
    };
}

export async function generateMetadata({ params: { locale } }: GenerateMetadataParams) {
    const t = await getTranslations({ locale, namespace: 'Metadata' });
    return {
        title: t('TheMainTitle'),
        description: t('TheMainDescription'),
    };
}

export default async function RootLayout({
                                             children,
                                             params: { locale },
                                         }: {
    children: React.ReactNode;
    params: {
        locale: string;
    }
}) {
    const messages = await getMessages({ locale });
    return (
        <html lang={locale}>
        <Head>
            <link rel="shortcut icon" href="/favicon.ico"/>
        </Head>
        <body className={'bg-back text-white'}>
        <NextIntlClientProvider messages={messages}>
            <SpeedInsights/>
            <DynamicNavBar/>
            <main className={'mx-16 pt-20 xxxs:mx-4 xxxs:pt-16 flex flex-col gap-16 xxxs:gap-4'}>
                {React.cloneElement(children as React.ReactElement, { locale })}
            </main>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}
