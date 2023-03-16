import React, { useState } from 'react';
import Link from 'next/link';
import { ContactModal } from '.'

export default function Header({ drawerContent, openDrawer }) {
    const [contactOpen, setContactOpen] = useState(false)

    const linkStyle = 'font-medium px-4 py-[5px] bg-gray-100 rounded-3xl tracking-[0.01rem] mob:bg-white mob:p-0 mob:mr-10 last:mr-0 mob:text-gray-400 transition ease-in duration-200 cursor-pointer'
    const selectedStyle = 'mob:text-gray-900 transition ease-in duration-200'

    return (
        <div className='header mob:self-end mr-1 col:mr-10'>
            <ul className='flex justify-between mob:justify-end col:h-28 px-0 h-20 items-center mob:items-center mob:text-base text-[15px]'>
                <li className={`${linkStyle} ${(!drawerContent && !contactOpen) && selectedStyle} hidden mob:inline-block`} onClick={() => setContactOpen(false)}>
                    <Link href='/'>Work</Link>
                </li>
                <li className={linkStyle}>
                    <Link href='https://www.tada-blog.xyz' target='_blank'>Blog</Link>
                </li>
                <li className={`${linkStyle} ${drawerContent === 'resume' && selectedStyle}`} onClick={() => openDrawer('resume')}>
                    Resume
                </li>
                <li className={`${linkStyle} ${drawerContent === 'about' && selectedStyle}`} onClick={() => openDrawer('about')}>
                    About
                </li>
                <li className={`${linkStyle} ${contactOpen && selectedStyle}`} onClick={() => setContactOpen(!contactOpen)}>
                    Contact
                </li>
            </ul>
            <ContactModal setContactOpen={setContactOpen} contactOpen={contactOpen} />
        </div>
    );
}