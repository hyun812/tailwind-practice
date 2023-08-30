import React from 'react';

import logo from '../img/logo.png'
import search from '../img/search.png'
import keyboard from '../img/keyboard.png'

const Content = () => {
    return (
        <div className='mt-[10%] flex flex-col items-center justify-center'>
            <div>
                <img src={logo}></img>
            </div>
            <div className='p-6 w-full flex flex-col items-center'>
                <div className='hover:shadow-md h-14 w-3/4 max-w-[590px] flex items-center px-3 pt-1 border-solid border-2 rounded-full'>
                    <img className="w-6 h-6" src={search}></img>
                    <input className=' pl-4 outline-none border-none w-12 h-5 grow type="text"'></input>
                    <img className='w-6 h-5 mx-2' src={keyboard}></img>
                    <img className="w-6 h-6 mx-2" src='https://www.gstatic.com/images/branding/googlemic/2x/googlemic_color_24dp.png'></img>
                </div>
                <div className='text-sm pt-4'>
                    <button className='p-2 m-2 border-solid bg-gray-50'>Google 검색</button>
                    <button className='p-2 m-2 border-solid bg-gray-50'>I'm Feeling Lucky</button>
                </div>
            </div>
        </div>
    );
};

export default Content;