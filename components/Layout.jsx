import React from 'react';
import PropTypes from 'prop-types';
import { Header } from '.'

function Layout({ children }) {
    return (
        <div className=''>
            <Header />
            <div className='h-full flex flex-col justify-start col:justify-center col:items-center mob:px-10 px-4 pb-10'>
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
    children: PropTypes.objectOf(PropTypes.any),
};
