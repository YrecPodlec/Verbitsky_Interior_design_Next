import React from 'react';
import {ModalHref} from "@/app/[locale]/components/shared";
import {useTranslations} from "next-intl";

interface PriceCardMaket {
    title: string;
    services: string[];
    price: number;
    category: string;
    tags: string[];
}

const PriceCardBones: React.FC<PriceCardMaket> = ({title, services}) => {
    const [active, setActive] = React.useState(false);
    const tCard = useTranslations('priceCard')
    return (
    <article className={'rounded-main max-w-96 overflow-hidden mx-auto my-0'}>
        <div className={'p-2 bg-PurpleLight2 bg-opacity-25 grid gap-2'}>
            <div className={'flex items-center gap-2 justify-center'}>
                <h1 className={'responsive-32'}>
                    {title}
                </h1>
            </div>
            <div className={'border-y-2'}>
                {/*<p className={'responsive-32 text-center'}>*/}
                {/*    {tCard('costBy')}*/}
                {/*</p>*/}
                {/*<p className={'font-secondary responsive-48 w-full text-center'}>{price}</p>*/}
            </div>
            <div className={'py-2 mx-auto my-0'}>
                <ModalHref href={'#contacts'} text={tCard('callMe')}/>
            </div>
        </div>
        <div className={'flex-col flex bg-GreenLight bg-opacity-15 p-2'}>
            <p className={'py-2 responsive-32 cursor-pointer'} onClick={() => setActive(prevState => !prevState)}>
                {tCard('listPrice')}&#9660;
            </p>
            <ul
                className={`trans gap-1 responsive-24 transition-all duration-300 relative flex-col flex border-t-2 list-disc overflow-hidden ${active ? 'scale-100 max-h-fit' : 'scale-0 max-h-0'}`}>
                {
                    services.map((value, index) =>
                        <li key={index} className={'mt-2 flex'}>
                            <p
                                className={`${index % 2 !== 1 ? 'bg-white text-back' : 'bg-GreenLight bg-opacity-80'} p-4 bg-opacity-80 w-full responsive-24`}
                            >
                                {value}
                            </p>
                        </li>
                    )}
            </ul>
        </div>
    </article>
    );
};

export default PriceCardBones;