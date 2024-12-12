import "./globals.css";
import React from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { NavBar } from "@/app/[locale]/components/features";
import { Background } from "@/app/[locale]/components/shared";
import {Footer, LanguageModal} from "@/app/[locale]/components/widgets";
import { Metadata } from "next";

type Props = {
    children: React.ReactNode;
    params: { locale: string };
};

// Типизация для структуры сообщений в LocaleLayout
type LocaleLayoutMessages = {
    LocaleLayout: {
        title: string;
        description: string;
        meta: {
            ogTitle: string;
            ogDescription: string;
            ogImage: string;
            ogAlt: string;
        };
    };
};

// Функция для генерации метаданных
export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
    const messages = (await getMessages({ locale })) as LocaleLayoutMessages;

    return {
        title: messages.LocaleLayout.title,
        description: messages.LocaleLayout.description,
        openGraph: {
            title: messages.LocaleLayout.meta.ogTitle,
            description: messages.LocaleLayout.meta.ogDescription,
            url: 'https://www.verbitsky-art.com',
            images: [
                {
                    url: messages.LocaleLayout.meta.ogImage,
                    alt: messages.LocaleLayout.meta.ogAlt,
                },
            ],
        },
    };
}

// Основной RootLayout компонент
export default async function RootLayout({ children, params: { locale } }: Props) {
    const messages = await getMessages({ locale });

    return (
        <html lang={locale}>
        <body className="font-primary tracking-widest scroll-smooth">
        <NextIntlClientProvider messages={messages} locale={locale}>
            <NavBar />
            <LanguageModal/>
            <main className="pt-12 mx-32 xs:mx-16 xxxs:mx-4">
                {children}
                <Background />
            </main>
            <footer>
                <Footer />
            </footer>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}
