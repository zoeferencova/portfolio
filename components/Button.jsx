import React from 'react';
import Link from 'next/link'

function Button(props) {
    return (
        <Link href={props.link || 'javascript:;'} as={props.asLink || null} className={`${props.extraClasses}`}>
            <button type='button' className={`flex flex-row items-center w-auto text-[14px] mob:text-[15px] bg-[#F5F5F8] ${props.dark && 'bg-[#262626] text-white'} py-1 px-3 mob:px-4 rounded-3xl mr-3`}>
                {props.icon && <img className='h-4 w-4 inline-block mr-[8px] -ml-1' src={props.icon} />}
                <span className='inline'>{props.text}</span>
            </button>
        </Link>

    );
}

export default Button;