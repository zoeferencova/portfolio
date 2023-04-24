import React from 'react';
import Link from 'next/link'

function Button({ link, extraClasses, text, icon, dark }) {
    return (
        <Link href={link || {}} target="_blank" className={`${extraClasses}`}>
            <button type='button' className={`flex flex-row items-center w-auto text-[14px] mob:text-[15px] bg-[#F5F5F8] ${dark && '!bg-[#262626] text-white'} py-1 px-3 mob:px-4 rounded-3xl`}>
                {icon && <img className='h-[14px] w-[14px] inline-block mr-[8px] -ml-1' src={icon} />}
                <span className='inline no-smooth'>{text}</span>
            </button>
        </Link >

    );
}

export default Button;