import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from "next/router";
import Modal from 'react-modal';

Modal.setAppElement('#__next');

import github from '../images/contact-github.png'
import linkedin from '../images/contact-linkedin.png'
import email from '../images/contact-email.png'

function Header() {
    const [contactOpen, setContactOpen] = useState(false)

    const router = useRouter()
    const { asPath } = router;

    const linkStyle = 'font-medium px-4 py-[5px] bg-gray-100 rounded-3xl tracking-[0.01rem] mob:bg-white mob:p-0 mob:mr-10 mob:text-gray-400 transition ease-in duration-200'
    const selectedStyle = 'mob:text-gray-900 transition ease-in duration-200'
    return (
        <div className='h-0 header'>
            <ul className='flex justify-between mob:justify-end col:h-36 px-4 mob:px-0 h-16 items-center mob:items-center col:pr-16 mob:text-base text-[15px]'>
                <li className={`${linkStyle} ${(asPath === '/' || asPath.split('/')[1] === 'project') && !contactOpen && selectedStyle} hidden mob:inline-block`} onClick={() => setContactOpen(false)}>
                    <Link href='/'>Work</Link>
                </li>
                <li className={linkStyle}>
                    <Link href='https://www.tada-blog.xyz' target='_blank'>Blog</Link>
                </li>
                <li className={`${linkStyle} ${asPath === '/resume' && selectedStyle}`} onClick={() => setContactOpen(false)}>
                    <Link href='/?page=resume' as='/resume'>Resume</Link>
                </li>
                <li className={`${linkStyle} ${asPath === '/about' && selectedStyle}`} onClick={() => setContactOpen(false)}>
                    <Link href='/?page=about' as='/about'>About</Link>
                </li>
                <li className={`${linkStyle} ${contactOpen && selectedStyle} hover:cursor-pointer`} onClick={() => setContactOpen(!contactOpen)}>
                    Contact
                </li>
            </ul>
            <Modal id='contact-modal' overlayClassName={{ base: 'contact-overlay', afterOpen: 'contact-overlay-open', beforeClose: 'contact-overlay-close' }} onRequestClose={() => setContactOpen(false)} isOpen={contactOpen} closeTimeoutMS={200}>
                <Link href='email' className='inline-block mr-5'>
                    <Image src={email} className='w-12 h-12' />
                    <p className='text-[0.84rem] mt-1'>Email</p>
                </Link>
                <Link href='linkedin' className='inline-block mr-5'>
                    <Image src={linkedin} className='w-12 h-12' />
                    <p className='text-[0.84rem] mt-1'>LinkedIn</p>
                </Link>
                <Link href='github' className='inline-block'>
                    <Image src={github} className='w-12 h-12' />
                    <p className='text-[0.84rem] mt-1'>Github</p>
                </Link>
            </Modal>

        </div>
    );
}

export default Header;

{/* <Modal className={`relative px-6 pt-4 pb-2 rounded-xl bg-slate-200 w-fit text-center -mt-10 mr-24 ml-auto fadeIn`}> */ }
