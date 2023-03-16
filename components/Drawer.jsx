import React from 'react';
import Modal from 'react-modal';
import SimpleBarReact from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

import { AboutInfo, Resume, ProjectInfo } from '../components';

Modal.setAppElement('#__next');

export default function Drawer({ drawerOpen, drawerContent, closeDrawer }) {
    return (
        <Modal
            closeTimeoutMS={400}
            isOpen={drawerOpen}
            onRequestClose={() => closeDrawer()}
            style={drawerContent === 'about' ? { content: { marginTop: '14%' } } : { content: { marginTop: '0.5%' } }}
        >
            <SimpleBarReact style={{ maxHeight: '100%' }}>
                <button onClick={() => closeDrawer()} className='float-right mt-4 mr-3 mob:mt-10 mob:mr-10'>
                    <img src='/close.svg' className='w-6 h-6 mob:w-7 mob:h-7 p-1 mr-0 ml-auto bg-slate-100 rounded-3xl' />
                </button>
                {drawerContent === 'resume' && <Resume />}
                {drawerContent === 'about' && <AboutInfo />}
                {typeof (drawerContent) === 'object' && <ProjectInfo project={drawerContent} />}
            </SimpleBarReact>
        </Modal>
    )
}