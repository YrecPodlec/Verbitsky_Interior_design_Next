import "./globals.css";
import React from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { NavBar } from "@/app/[locale]/components/features";
import { Background } from "@/app/[locale]/components/shared";

type Props = {
    children: React.ReactNode;
    params: { locale: string };
};

// Основной layout компонент
export default async function RootLayout({ children, params: { locale } }: Props) {
    const messages = await getMessages({ locale });
    console.log(locale);
    return (
        <html lang={locale}>
            <body className="font-primary tracking-widest">
                <NextIntlClientProvider messages={messages} locale={locale}>
                    <NavBar />
                    <main className="pt-12 mx-32 xs:mx-16 xxxs:mx-4">
                        {children}
                        <Background />
                    </main>
                    <footer>
                        <div>КОНТАКТЫ:</div>
                        <p>+79771315563 (WhatsApp)</p>
                        <p>verbitsky.vastu@gmail.com</p>
                    </footer>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
