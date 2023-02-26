import React from 'react';

function PageHeader({ title, subtitle, buttons, logo }) {
    return (
        <div>
            <div className='flex items-center mb-8'>
                <img className='h-28 w-28 mr-8' src={logo} />
                <div className=''>
                    <h2 className='text-xl mb-4 tracking-wide'>{title}</h2>
                    {subtitle && <p className='w-64 text-gray-400 -mt-2 leading-[1.35rem]'>{subtitle}</p>}
                    {!subtitle && buttons.map(button => button)}
                </div>
            </div>
            {subtitle && buttons.map(button => button)}
        </div>

    );
}

export default PageHeader;