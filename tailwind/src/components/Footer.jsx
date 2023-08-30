import React from 'react';

const Footer = () => {
    return (
        <div className='h-28 relative -translate-y-full text-xs text-slate-500 min-w-full bg-gray-100'>
            <div className='p-4 text-sm'>대한민국</div>
            <div className='border-solid border-t-2 border-slate-200 flex flex-row justify-around lg:justify-between'>
                <div className='flex'>
                    <p className='p-4'>광고</p>
                    <p className='p-4'>비즈니스</p>
                    <p className='p-4'>검색의 원리</p>
                </div>
                <div className='flex mx-2'>
                    <div className='p-4'>개인정보처리방침</div>
                    <div className='p-4'>약관</div>
                    <div className='p-4'>설정</div>
                </div>
            </div>
        </div>
    );
};

export default Footer;