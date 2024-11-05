import React from 'react';
import {ImageRel, SecondTitle, Title} from "@/app/[locale]/components/shared";
import {useTranslations} from "next-intl";

const styleImage = 'font-secondary responsive-80 text-center px-6 py-8 xxxs:py-4 xxxs:px-2'

const Text1 = () => {
    return (
        <div className={'bg-black bg-opacity-50'}>
            <h1 className={`${styleImage}`}>
                ОБМЕРНЫЙ ПЛАН ПОМЕЩЕНИЯ
            </h1>
            <p className={'p-6 text-center responsive-32'}>
                текст о том как все это делается и почнму эьто круто ведь можно онлайн
            </p>
        </div>
    )
}

const WorkStepsBones = () => {
    const image = useTranslations('images');
    const stylesSection = 'grid gap-4 py-4 border-b-2'
    const styleContent = 'grid grid-cols-2 gap-8 xxxs:grid-cols-1'
    return (
        <section className={'mx-4'}>

            <header className={'flex flex-col justify-center items-center'}>
                <Title Title={'ЭТАПЫ РАБОТЫ'}/>
                <p className={'text-center py-1 responsive-24'}>
                    текст
                </p>
            </header>

            <section className={`${stylesSection}`}>
                <div className={'inline-block w-fit'}>
                    <SecondTitle Title={"1 ЭТАП"}/>
                </div>
                <div className={`${styleContent}`}>
                    <ImageRel ImageObject={'https://verbitsky-design-server.vercel.app/images/river-park/4.webp'}
                              text={<Text1/>} alt={image('image_riverPark')}/>
                    <div>
                        Текст о том о сём
                    </div>
                </div>
            </section>

            <section className={`${stylesSection} justify-items-end`}>
                <div className={'inline-block w-fit'}>
                    <SecondTitle Title={"2 ЭТАП"}/>
                </div>
                <div className={`${styleContent}`}>
                    <div>
                        Текст о том о сём
                    </div>
                    <ImageRel ImageObject={'https://verbitsky-design-server.vercel.app/images/river-park/4.webp'}
                              text={<Text1/>} alt={image('image_riverPark')}/>
                </div>
            </section>

            <section className={`${stylesSection}`}>
                <div className={'inline-block w-fit'}>
                    <SecondTitle Title={"3 ЭТАП"}/>
                </div>
                <div className={`${styleContent}`}>
                    <ImageRel ImageObject={'https://verbitsky-design-server.vercel.app/images/river-park/4.webp'}
                              text={<Text1/>} alt={image('image_riverPark')}/>
                    <div>
                        Текст о том о сём
                    </div>
                </div>
            </section>

        </section>
    );
};

export default WorkStepsBones;