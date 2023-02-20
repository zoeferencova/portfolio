import React from 'react';

function SmallButton({ text }) {
    return (
        <button type='button' className='text-[15px] ml-2 lg:ml-4 bg-[#F5F5F8] py-1 px-4 rounded-3xl bottom-0'>{text}</button>
    );
}

export default SmallButton;