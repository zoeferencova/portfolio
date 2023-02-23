import React from 'react';
import Link from 'next/link'
import Image from 'next/image';

function SmallButton({ text, icon = null, extraClasses, link, asLink }) {
    return (
        <Link href={link || 'javascript:;'} as={asLink || null} className={`${extraClasses}`}>
            <button type='button' className={`flex flex-row items-center w-auto text-[14px] mob:text-[15px] bg-[#F5F5F8] py-1 px-3 mob:px-4 rounded-3xl`}>
                {icon && <Image className='h-4 w-4 inline-block mr-[6px] -ml-1' src={icon} />}
                <span className='inline'>{text}</span>
            </button>
        </Link>

    );
}

export default SmallButton;