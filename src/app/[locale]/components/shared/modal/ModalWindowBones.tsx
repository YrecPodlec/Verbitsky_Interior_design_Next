import React from 'react';

interface Props {
    active: boolean;
    setActive: (active: boolean) => void;
    children: React.ReactNode;
}

const ModalWindowBones: React.FC<Props> = ({ active, setActive, children }) => {
    return (
        <div
            className={`z-50 mt-4 xxxs:mt-8 w-screen h-screen fixed top-0 left-0 flex items-center justify-center ${active ? "opacity-100 pointer-events-all" : "opacity-0 pointer-events-none"} bg-black bg-opacity-40 z-50`}
            onClick={() => { setActive(false) }}>

            <div
                className={`w-[94%] h-[92%] p-4 xxxs:p-1 rounded-[48px] bg-back2 ${active ? "scale-1" : "scale-50"}`}
                onClick={e => e.stopPropagation()}>
                <header className="flex justify-between px-8">
                    <div className="ml-auto">
                        <button
                            className={'responsive-24 p-1 px-2 bg-PurpleLight2 text-white rounded-3xl cursor-pointer inline-block hover:px-8 hover:bg-OrangePeach'}
                            onClick={() => setActive(false)}>
                            CLOSE
                        </button>
                    </div>
                </header>
                <section className={'overflow-y-scroll overflow-x-hidden h-[95%] mt-4'}>
                    {children}
                </section>
            </div>
        </div>
    );
};

export default ModalWindowBones;
