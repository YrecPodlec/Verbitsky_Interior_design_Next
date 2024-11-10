"use client";

import React, { useEffect, useState } from 'react';
import { useLocale } from "next-intl";
import { Loading } from "@/app/[locale]/components/shared";
import { Gallery, Pagination } from "@/app/[locale]/components/features";
import { fetchData } from "@/app/[locale]/components/shared/hooks/fetchData/UseFetch";

export interface GalleryProjects {
    _id: string;
    title: string;
    images: string[];
    description: string;
}

const Gallery_Projects = () => {
    const [projects, setProjects] = useState<GalleryProjects[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState<number>(1);
    const locale = useLocale();

    useEffect(() => {
        const fetchProjects = async () => {
            setLoading(true);
            setError(null);

            try {
                // Используем fetchData для запроса данных с параметрами
                const data = await fetchData<{ results: GalleryProjects[]; total: number }>(
                    'projects',
                    locale,
                    { page, limit: 6 }
                );

                if (data) {
                    setProjects(data.results);
                    setTotalPages(Math.ceil(data.total / 6));
                } else {
                    setError("Invalid data format");
                }
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (error) {
                setError('Error fetching projects');
            } finally {
                setLoading(false);
            }
        };

        fetchProjects().then(r => r);
    }, [page, locale]);

    if (loading) {
        return <div><Loading /></div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <section>
            <div>
                <div className="grid grid-cols-4 gap-8">
                    {projects.length > 0 ? (
                        projects.map((project) => (
                            <Gallery
                                key={project._id}
                                _id={project._id}
                                images={project.images}
                                description={project.description}
                                title={project.title}
                            />
                        ))
                    ) : (
                        <p>No projects found</p>
                    )}
                </div>
                <div className={'w-full flex justify-center mt-4'}>
                    <Pagination page={page} totalPages={totalPages} setPage={setPage} />
                </div>
            </div>
        </section>
    );
};

export default Gallery_Projects;
