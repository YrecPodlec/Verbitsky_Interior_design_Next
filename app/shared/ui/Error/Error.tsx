import React from 'react';
interface ErrorProps {
    errorMessage456789: string;
}
const Error_bones:React.FC<ErrorProps> = ({errorMessage456789}) => {
    return (
        <div className={'flex flex-col w-full text-2xl text-center p-4'}>
            <p>Приносим извинения 😔</p>
            <p>Произошла ошибка в загрузке данных <br/><br/>
            Попробуйте обновить страницу</p>
        </div>
    );
};

export default Error_bones;