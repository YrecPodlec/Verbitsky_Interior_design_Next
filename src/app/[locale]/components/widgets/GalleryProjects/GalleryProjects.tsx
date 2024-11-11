"use client";

import React, { useState } from 'react';
import { useLocale } from "next-intl";
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
    const locale = useLocale();
    const [page, setPage] = useState(1);
    const { data, isLoading, isError } = useProject(page, locale);

    if (isLoading) {
        return <div><Loading /></div>;
    }

    if (isError) {
        return <div>{isError}</div>;
    }

    const { total, results } = data;
    const totalPagesL = Math.ceil(total / 6);

    return (
        <section>
            <div>
                <div className="grid grid-cols-4 gap-8">
                    {results.map((project: GalleryProjects) => (
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
