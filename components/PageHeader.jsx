import React from 'react';
import Image from 'next/image';

function PageHeader({ title, subtitle, buttons, logo }) {
    return (
        <div className='flex items-center mb-10'>
            <Image className='h-28 w-28 mr-8' src={logo} />
            <div className=''>
                <h2 className='text-xl mb-4 tracking-wide'>{title}</h2>
                {subtitle && <p>{subtitle}</p>}
                {buttons && buttons.map(button => button)}
            </div>
        </div>
    );
}

export default PageHeader;