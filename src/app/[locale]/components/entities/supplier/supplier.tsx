import React from 'react';
import Image from "next/image";
import {ModalComponent} from "@/app/[locale]/components/features";

interface TableItem {
    Фото: string;
    Артикул: string;
    Наименование: string;
    Габариты: string;
    Материал: string;
    Комплектация: string;
    Цвет: string;
    Тип: string;
    Объем: string;
    Линия: string;
    Управление: string;
    РРЦ: string;
    Дилер: string;
    Шоурум: string;
    Наличие: string;
}

interface DataItem {
    logo: string;
    image: string;
    table: TableItem[];
}

interface Props {
    title: string;
    description: string;
    data: DataItem;
}

const Supplier: React.FC<Props> = ({description, data}) => {
    return (
        <section className={'mx-8'}>
            <div className={'mx-auto p-8 border-4 border-white rounded-main flex gap-8 justify-between'}>
                <div className={'w-1/2'}>
                    <div className={'relative w-full aspect-square'}>
                        <Image src={data.image} alt={'Фото товара'} fill quality={100} style={{objectFit: "cover"}} className={'z-20'}/>
                    </div>
                </div>
                <div className={'flex flex-col gap-8 w-1/2'}>
                    <div className={'flex gap-8 flex-col'}>
                        <img src={data.logo} alt="Логотип" />
                        <p>{description}</p>
                    </div>

                    <div className={'flex justify-center'}>
                        <ModalComponent
                            childrenBtn={
                                <a className="border-2 border-GreenLight bg-PurpleLight2 bg-opacity-40 text-center responsive-24 rounded-3xl py-2 px-4 w-fit hover:px-12 xxs:py-0">
                                    УЗНАТЬ БОЛЬШЕ
                                </a>
                            }
                            className={''}
                            hover={''}
                        >
                            <div className="overflow-auto max-w-full">
                                <table className="min-w-full border border-collapse border-black text-sm">
                                    <thead className="bg-black">
                                    <tr>
                                        {Object.keys(data.table[0]).map((key) => (
                                            <th key={key} className="border border-black px-2 py-1 whitespace-nowrap text-left font-bold">
                                                {key}
                                            </th>
                                        ))}
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {data.table.map((item, idx) => (
                                        <tr key={idx} className="bg-black">
                                            {Object.entries(item).map(([key, value], i) => (
                                                <td key={i} className="border border-gray-400 px-2 py-1 whitespace-nowrap">
                                                    {key === 'Фото' ? (
                                                        <div className="min-w-[128px] min-h-128px]">
                                                            <img src={value} alt="Фото" className="w-full h-full object-cover rounded" />
                                                        </div>
                                                    ) : (
                                                        value
                                                    )}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </ModalComponent>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Supplier;
