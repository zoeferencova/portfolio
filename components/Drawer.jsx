import React from 'react';

function Drawer({ drawerStatus }) {
    return (
        <div className='h-0 header'>
            <p>{drawerStatus}</p>
        </div>
    );
}

export default Drawer;