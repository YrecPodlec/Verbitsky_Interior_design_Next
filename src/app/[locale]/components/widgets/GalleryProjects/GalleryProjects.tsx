"use client"
import React, { useState } from 'react';
import {Gallery, Pagination} from "@/app/[locale]/components/features";
import { useFetchData } from "@/app/[locale]/components/shared/hooks/fetchData/UseFetch";
import { Loading } from "@/app/[locale]/components/shared";

export interface GalleryProjects {
    _id: string;
    title: string;
    images: string[];
    description: string;
}

const Gallery_Projects = () => {
    const [page, setPage] = useState(1);
    const limit = 6;
    const url = `https://verbitsky-design-server.vercel.app/projects?page=${page}&limit=${limit}&lang=en`;
    const { data, loading, error } = useFetchData<{ total: number, results: GalleryProjects[] }>(url);
    if (error) {
        return (
            <div>
                Ошибка загрузки данных
            </div>
        );
    }

    if (loading) {
        return (
            <div>
                <Loading />
            </div>
        );
    }

    const projects = data?.results || [];
    const totalPages = Math.ceil((data?.total || 0) / limit);

    return (
        <section>
            <div>
                <div className="grid grid-cols-4 gap-8">
                    {projects.map((project) => (
                        <Gallery
                            key={project._id}
                            _id={project._id}
                            images={project.images}
                            description={project.description}
                            title={project.title}
                        />
                    ))}
                </div>
                <Pagination page={page} totalPages={totalPages} setPage={setPage} />
            </div>
        </section>
    );
};

export default Gallery_Projects;
