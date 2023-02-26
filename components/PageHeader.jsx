import React from 'react';

function PageHeader({ title, subtitle, buttons, logo }) {
    return (
        <div>
            <div className='flex items-center mb-8'>
                <img className='h-[4.7rem] w-[4.7rem] mob:h-24 mob:w-24 mr-5 mob:mr-8' src={logo} />
                <div className=''>
                    <h2 className='text-base mob:text-xl mb-[0.7rem] mob:mb-4 tracking-[0.01rem] mob:tracking-wide'>{title}</h2>
                    {subtitle && <p className='w-full mob:w-64 text-gray-400 -mt-2 leading-[1.2rem] mob:leading-[1.35rem] text-[0.85rem] mob:text-base'>{subtitle}</p>}
                    {!subtitle && buttons.map(button => button)}
                </div>
            </div>
            {subtitle && buttons.map(button => button)}
        </div>

    );
}

export default PageHeader;