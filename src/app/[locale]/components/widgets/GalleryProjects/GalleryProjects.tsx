"use client";

import React, { useState } from 'react';
import {useLocale, useTranslations} from "next-intl";
import { Loading } from "@/app/[locale]/components/shared";
import { Gallery, Pagination } from "@/app/[locale]/components/features";
import { useProject } from "@/app/[locale]/components/shared/hooks/useProjects/useProjects";

export interface GalleryProjects {
    _id: string;
    title: string;
    images: string[];
    description: string;
}

const Gallery_Projects = () => {
    const t = useTranslations('gallery')
    const locale = useLocale();
    const [page, setPage] = useState(1);
    const { data, isLoading, isError } = useProject(page, locale);
    if (isLoading) {
        return <div><Loading /></div>;
    }

    if (isError) {
        return <p>An error occurred</p>;
    }

    // Проверяем, что data существует и имеет нужную структуру
    if (!data || !data.results || !Array.isArray(data.results)) {
        return <p>No projects available</p>;
    }
    const totalPagesL = Math.ceil(data.total / 6);

    return (
        <section className={'grid gap-8'}>
            <div className={'border-b-4 text-center'}>
                <h1 className={'responsive-64 font-secondary'}>
                    {t('title')}
                </h1>
                <p className={'responsive-32'}>
                    {t('description')}
                </p>
            </div>
            <div>
                <div className="grid grid-cols-4 xs:grid-cols-3 xxs:grid-cols-2 gap-8">
                    {data.results.map((project: GalleryProjects) => (
                        <Gallery
                            key={project._id}
                            _id={project._id}
                            images={project.images}
                            description={project.description}
                            title={project.title}
                        />
                    ))}
                </div>
                <div className="w-full flex justify-center mt-4">
                    <Pagination page={page} totalPages={totalPagesL} setPage={setPage} />
                </div>
            </div>
        </section>
    );
};

export default Gallery_Projects;
