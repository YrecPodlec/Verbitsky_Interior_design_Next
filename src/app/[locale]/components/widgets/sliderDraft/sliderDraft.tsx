"use client";
import React, { useState } from "react";
import { Pagination } from "@/app/[locale]/components/features";
import Image from "next/image";

const SliderDraft = () => {
    const [page, setPage] = useState(1);
    const itemsPerPage = 2;

    const data = [
        { image: "https://verbitsky-design-server.vercel.app/images/drafts/4.webp" },
        { image: "https://verbitsky-design-server.vercel.app/images/drafts/5.webp" },
        { image: "https://verbitsky-design-server.vercel.app/images/drafts/6.webp" },
        { image: "https://verbitsky-design-server.vercel.app/images/drafts/7.webp" },
        { image: "https://verbitsky-design-server.vercel.app/images/drafts/8.webp" },
        { image: "https://verbitsky-design-server.vercel.app/images/drafts/9.webp" },
        { image: "https://verbitsky-design-server.vercel.app/images/drafts/10.webp" },
        { image: "https://verbitsky-design-server.vercel.app/images/drafts/11.webp" },
        { image: "https://verbitsky-design-server.vercel.app/images/drafts/12.webp" },
        { image: "https://verbitsky-design-server.vercel.app/images/drafts/13.webp" },
        { image: "https://verbitsky-design-server.vercel.app/images/drafts/14.webp" },
        { image: "https://verbitsky-design-server.vercel.app/images/drafts/15.webp" },
        { image: "https://verbitsky-design-server.vercel.app/images/drafts/16.webp" },
        { image: "https://verbitsky-design-server.vercel.app/images/drafts/17.webp" },
        { image: "https://verbitsky-design-server.vercel.app/images/drafts/18.webp" },
        { image: "https://verbitsky-design-server.vercel.app/images/drafts/19.webp" }
    ];

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = data.slice(startIndex, endIndex);

    return (
        <section>
            <h1>ntsnsnsn</h1>
            <div className="grid grid-cols-2 gap-8">
                {currentData.map((value, index) => (
                    <div key={index}>
                        <Image
                            src={value.image}
                            alt=""
                            className="w-full h-auto object-cover"
                            width={1}  // или любые подходящие значения
                            height={1} // начальная высота, изображение масштабируется
                            layout="responsive"
                        />
                    </div>
                ))}
            </div>
            <div className="w-full justify-center flex mt-4">
                <Pagination
                    page={page}
                    totalPages={Math.ceil(data.length / itemsPerPage)}
                    setPage={setPage}
                />
            </div>
        </section>
    );
};

export default SliderDraft;
