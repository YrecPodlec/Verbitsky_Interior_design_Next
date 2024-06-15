import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import '@/app/shared/fonts/fonts.css'

export const metadata: Metadata = {
    other: {
        'yandex-verification': '47a47e6d1de44eb7'
    },
    title: "Verbitsky | Дизайн интерьера",
    description: "Verbitsky - Студия дизайна интерьеров, которая предоставляет Вам возможность получить услуги по проектированию Дизайна ВАШЕГО личного пространства. " +
      "Мы предоставляем услуги Терапевтического дизайна, Васту дизайна, Салютогенного Дизайна",
    keywords: "verbitsky, studio, verbitsky studio, design, дизайн интерьера, иркутск, interior design, order interior design,\n" +
      "    заказать дизайн интерьера, дизайн студия, design studio, ирина вербицкая, ирина, вербицкая, вербитская, заказать, дизайн, интерьера, интерьер,\n" +
      "    дизайн 2022, designer, спальни, дизайнер, стили интерьера, красиво, красивый интерьер, дизайн кухни, дизайн комнаты, дизайн квартиры, дизайн цветов\n" +
      "    ландшафтный дизайн, mehndi design 2022, interior design trends 2022, trends, 2022, 2021, 2020, decoração pop it,\n" +
      "    irina verbitskiy, irina, verbitskiy, order, design, interior, interior,\n" +
      "    design 2022, designer, bedrooms, designer, interior styles, beautiful, beautiful interior, kitchen design, room design, apartment design, flower design\n" +
      "    landscape design, vastu design, vastu, VASTU, васту, дизайн по васту, васту архитектура, архитектура, verbitsky-vastu, verbitsky vastu, салютогенный," +
      "в, городе, Москва, Москве, в Москве, москва, москве, в москва, в городе москва, дизайн проект, нахимовский, проспект, индивидуальный, комплектация," +
      "поставщики, скидка, ремонт, ремонт помещения",
    icons: {
        icon: [
            {
                url: '/static/icon.ico',
                media: '(prefers-color-scheme: light)',
            },
            {
                url: '/static/icon.ico',
                media: '(prefers-color-scheme: dark)',
            },
        ],
    },
};
import { SpeedInsights } from "@vercel/speed-insights/next"
import Head from "next/head";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="ru">
      <Head>
          <link rel="shortcut icon" type="image/x-icon" href="/static/icon.ico" sizes="651x835"/>
      </Head>
      <SpeedInsights/>
      <body>
      {children}
      </body>
      </html>
  );
}
