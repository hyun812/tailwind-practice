import React from 'react';
import dot from '../img/dotsnine.png'

const Top = () => {
    return (
        <div className="text-xs p-2 flex justify-between h-16">
            <div className='flex justify-items-center '>
                <button className='p-1 ml-4 mr-1'>Google 정보</button>
                <button className='p-1 ml-1 mr-4'>스토어</button>
            </div>
            <div className='flex items-center'>
                <button className='p-1 ml-4 mr-1' >Gmail</button>
                <button className='p-1 ml-1 mr-1'>이미지</button>
                <div className='w-8 h-8 p-1 m-1 rounded-full hover:bg-gray-200 cursor-pointer'>
                    <img src={dot}></img>
                </div>
                <button className='h-9 w-20 p-1 ml-1 mr-4 rounded bg-[#3a80f1] text-white hover:bg-[#1c5abd]'>로그인</button>
            </div>
        </div>
    );
};
export default Top;