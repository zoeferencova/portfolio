import React from 'react';

function SmallButton({ text }) {
    return (
        <button type='button' className='text-[14px] mob:text-[15px] col:ml-2 lg:ml-4 bg-[#F5F5F8] py-1 px-3 mob:px-4 rounded-3xl ml-auto'>{text}</button>
    );
}

export default SmallButton;