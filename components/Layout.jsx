import React from 'react';
import PropTypes from 'prop-types';
import { Header } from '.';

function Layout({ children }) {
    return (
        <div className='h-screen'>
            <Header />
            <div className='h-full -mt-8 flex flex-col justify-center px-10'>
                {children}
            </div>
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
