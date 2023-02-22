import React from 'react';
import PropTypes from 'prop-types';
import { Header } from '.'

function Layout({ children }) {
    return (
        <div className='h-screen'>
            <Header />
            <div className='h-full mt-24 mob:mt-36 col:mt-0 col:pt-14 flex flex-col justify-start col:justify-center mob:px-10 px-4'>
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
