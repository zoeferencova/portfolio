import React from 'react';
import PropTypes from 'prop-types';
import { Header } from '.';
import { useRouter } from 'next/router';
import Modal from 'react-modal';

Modal.setAppElement('#__next');

function Layout({ children }) {
    const router = useRouter();
    return (
        <div className='h-screen'>
            <Header />
            <div className='h-full mt-24 mob:mt-36 col:mt-0 col:pt-14 flex flex-col justify-start col:justify-center mob:px-10 px-4'>
                {children}
            </div>
            <Modal isOpen={!!router.query.page} onRequestClose={() => router.push("/")}>
                {router.query.page}
            </Modal>
        </div>
    );
}

export default Layout;

Layout.defaultProps = {
    children: [],
};

Layout.propTypes = {
    children: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
};
