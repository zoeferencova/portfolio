import React from 'react';
import Link from 'next/link';
import Modal from 'react-modal';

Modal.setAppElement('#__next');

export default function ContactModal({ setContactOpen, contactOpen }) {
    const contactStyle = 'flex justify-between w-full items-center px-5 py-[7px] text-[0.87rem]'
    const contactImgStyle = 'w-4 h-4'

    return (
        <Modal id='contact-modal' overlayClassName={{ base: 'contact-overlay', afterOpen: 'contact-overlay-open', beforeClose: 'contact-overlay-close' }} onRequestClose={() => setContactOpen(false)} isOpen={contactOpen} closeTimeoutMS={200}>
            <Link href='mailto:zoeferencova@gmail.com' className={`${contactStyle} mr-5 border-b border-gray-200`}>
                <span>Email</span>
                <img src='/email-clear.svg' className={contactImgStyle} />
            </Link>
            <Link href='https://www.linkedin.com/in/zoeferencova' target="_blank" className={`${contactStyle} mr-5 border-b border-gray-200`}>
                <span>LinkedIn</span>
                <img src='/linkedin.svg' className={contactImgStyle} />
            </Link>
            <Link href='https://github.com/zoeferencova' target="_blank" className={`${contactStyle}`}>
                <span>Github</span>
                <img src='/github.svg' className={contactImgStyle} />
            </Link>
        </Modal>
    )
}