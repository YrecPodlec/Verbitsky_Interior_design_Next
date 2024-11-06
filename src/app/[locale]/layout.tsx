import "./globals.css";
import React from "react";
import { NextIntlClientProvider } from "next-intl";
import {getMessages, getTranslations, unstable_setRequestLocale} from "next-intl/server";
import {locales} from "@/config";
import {NavBar} from "@/app/[locale]/components/features";
import {Link} from "@/navigation";
import {Background} from "@/app/[locale]/components/shared";

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export function generateStaticParams(){
    return locales.map((locale) => ({locale}))
}

export async function generateMetadata({
    params: { locale },
}: Omit<Props, "children">){
    const t = await getTranslations({locale, namespace: "LocaleLayout"});
    return {
        title: t("title"),
        description: t("description"),
    }
}

export default async function RootLayout({ children, params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  const messages = await getMessages({ locale });

  return (
      <html lang={locale}>
      <NextIntlClientProvider messages={messages} locale={locale}>
              <body className={'font-primary tracking-widest'}>
                  <NavBar/>
                  <main className={'pt-12 mx-32 xs:mx-16 xxxs:mx-4'}>
                      {React.cloneElement(children as React.ReactElement, { locale })}
                      <Link href={'/'} locale="en">EN</Link>
                      <Link href={'/'} locale="ru">ru</Link>
                      <Background/>
                  </main>
                  <footer>
                      <div>
                          КОНТАКТЫ:
                      </div>
                      <p>
                          +79771315563 (WhatsApp)
                      </p>
                      <p>
                          verbitsky.vastu@gmail.com
                      </p>
                  </footer>
              </body>
      </NextIntlClientProvider>
      </html>
  );
}
