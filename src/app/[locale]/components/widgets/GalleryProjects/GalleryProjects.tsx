"use client";

import React, {useEffect, useState} from 'react';
import {useLocale} from "next-intl";
import {Loading} from "@/app/[locale]/components/shared";
import {Gallery, Pagination} from "@/app/[locale]/components/features";

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
                const res = await fetch(`https://verbitsky-design-server.vercel.app/projects?page=${page}&limit=6&lang=${locale}`);
                const data = await res.json();

                if (res.ok) {
                    if (Array.isArray(data.results)) {
                        setProjects(data.results);
                    } else {
                        setError("Invalid data format");
                    }
                    setTotalPages(Math.ceil(data.total / 6));
                } else {
                    setError(data.message || 'Error fetching projects');
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
                <Pagination page={page} totalPages={totalPages} setPage={setPage} />
            </div>
        </section>
    );
};

export default Gallery_Projects;
