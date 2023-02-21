import React from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";

function Header() {
    const router = useRouter()
    const { pathname } = router;

    const linkStyle = 'font-medium px-4 py-[5px] bg-gray-100 rounded-3xl tracking-[0.01rem] mob:bg-white mob:p-0 mob:mr-10 mob:text-gray-400 '
    return (
        <div className='h-0 header'>
            <ul className='flex justify-between mob:justify-end col:h-36 px-4 mob:px-0 h-16 items-center mob:items-center col:pr-16 mob:text-base text-[15px]'>
                <li className={`${linkStyle} ${pathname === '/' && 'mob:text-gray-900'} hidden mob:inline-block`}><Link href='/'>Work</Link></li>
                <li className={linkStyle}><Link href='https://www.tada-blog.xyz' target='_blank'>Blog</Link></li>
                <li className={`${linkStyle} ${pathname === '/resume' && 'mob:text-gray-900'}`}><Link href='/?page=resume' as='/resume'>Resume</Link></li>
                <li className={`${linkStyle} ${pathname === '/about' && 'mob:text-gray-900'}`}><Link href='/?page=about' as='/about'>About</Link></li>
                <li className={`${linkStyle}`}><Link href=''>Contact</Link></li>
            </ul>
        </div>
    );
}

export default Header;