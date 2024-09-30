"use client"
import React from 'react';
import {AdvantagesText, Title} from "@/app/shared";
import {DataAdvantages, DataHome} from "@/app/shared/hooks/data";
import {Pagination} from "@/app/features";
import {useTranslations} from "next-intl";

const Advantages_bones = () => {
    const DataUrl = DataAdvantages;
    const [currentPage, setCurrentPage] = React.useState(1);
    const t = useTranslations('Advantages(Benefits)')
    return (
        <section id={DataHome.hrefMore} className={'gap-16 inline-flex flex-col xxxs:gap-4'}>
            <div className={'inline-block'}>
                <Title>
                    <h1>{t("NAMETITLE")}</h1>
                </Title>
            </div>
            <div className={'flex'}>
                <div className={'w-1/2'}>
                    <div>
                        {
                            DataUrl[currentPage - 1] && (
                                <div>
                                    {DataUrl[currentPage - 1].image}
                                </div>
                            )
                        }
                    </div>
                    <Pagination  DataUrl={DataUrl} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
                </div>
                <AdvantagesText/>
            </div>
        </section>
    );
};

export default Advantages_bones;