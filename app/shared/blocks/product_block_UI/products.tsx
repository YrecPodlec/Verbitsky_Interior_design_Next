"use client"
import React from 'react';
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ProductProps {
    data: Array<{
        id: number,
        name: string,
        description: string,
        see: string,
        test: string,
    }>;
}

const Products_bones: React.FC<ProductProps> = ({ data }) => {
    const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

    const handleClick = (index: number) => {
        setActiveIndex(prevIndex => prevIndex === index ? null : index);
    };

    return (
        <div className={'flex gap-4 flex-wrap w-[75%] xxxs:w-full'}>
            <AnimatePresence initial={false}>
            {
                data.map((value, index) =>
                    <div key={index} className={'p-1 flex cursor-pointer'} onClick={() => handleClick(index)}>
                        <div className={'bg-black flex justify-center py-4'} style={{ WebkitWritingMode: "vertical-lr", WebkitTextOrientation: "upright" }}>
                            <p className={'responsive-64 xxxs:responsive-24'}>
                                {value.name}
                            </p>
                        </div>
                        <div className={''}>
                            <div className={`relative w-full h-full flex items-center px-2 bg-blackOpacity overflow-hidden xxxs:px-1`}>
                                <Image
                                    src={'/images/miami/1.webp'}
                                    alt={'Изображение интерьера'}
                                    className={'-z-10'} fill quality={100}
                                    style={{ objectFit: "cover" }}
                                />
                                <AnimatePresence mode="wait">
                                    {activeIndex === index ? (
                                            <motion.div
                                                key="content"
                                                initial={{ opacity: 0, x: -450}}
                                                animate={{ opacity: 1, x: 0}}
                                                exit={{ opacity: 0, x: -450}}
                                                transition={{ duration: 0.3 }}
                                                className={'h-full w-full flex justify-center items-center'}
                                            >
                                                <div className={'responsive-24'}>
                                                    {value.test}
                                                </div>
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                key="placeholder"
                                                initial={{ opacity: 0}}
                                                animate={{ opacity: 1}}
                                                exit={{ opacity: 0}}
                                                transition={{ duration: 0.3 }}
                                                className={'flex justify-center items-center [&>p]:p-2 h-full hover:px-4 xxxs:[&>p]:p-1'}
                                            >
                                                <p className={`z-10 border-r-2 border-white responsive-24 xxxs:responsive-16`}
                                                   style={{
                                                       WebkitWritingMode: "vertical-lr",
                                                       WebkitTextOrientation: "upright"
                                                   }}>
                                                    {value.see}
                                                </p>
                                                <div className={'responsive-64 flex justify-center items-center mx-2 xxxs:mx-1'}>
                                                    &raquo;
                                                </div>
                                            </motion.div>
                                        )
                                    }
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                )
            }
            </AnimatePresence>
        </div>
    );
};

export default Products_bones;
