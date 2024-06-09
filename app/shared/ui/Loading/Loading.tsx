import React, {forwardRef} from 'react';
import {motion} from "framer-motion";

// eslint-disable-next-line react/display-name
const Loading_bones = forwardRef<HTMLDivElement>(({}, ref) => {
    return (
        <div className={'flex flex-col w-full text-center'} ref={ref}>
            <div className="inline-block animate-spin text-4xl py-4
            motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status" >⌛</div>
            <p>
                ПОДОЖДИТЕ НЕМНОГО <br/>
                ДАННЫЕ ЗАГРУАЮТСЯ 😀
            </p>
        </div>
    );
});

export const MotionLoading_bones = motion(Loading_bones);