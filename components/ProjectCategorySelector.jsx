import React from 'react';
import { Button } from '.'

export default function ProjectCategorySelector({ projectCategory, setProjectCategory }) {
    const linkStyle = 'text-[1.1rem] tracking-[0.03rem] mr-5 last:mr-0 text-gray-400 transition ease-in duration-100 cursor-pointer'
    const selectedStyle = 'text-gray-900 transition ease-in duration-100 font-medium'

    return (
        <div className='mb-8 flex justify-between items-end min-h-[31px]'>
            <ul className='flex'>
                <li className={`${linkStyle} ${projectCategory === 'apps' && selectedStyle}`}><button onClick={() => setProjectCategory('apps')}>Apps</button></li>
                <li className={`${linkStyle} ${projectCategory === 'visualizations' && selectedStyle}`}><button onClick={() => setProjectCategory('visualizations')}>Visualizations</button></li>
            </ul>
            {projectCategory === 'visualizations' && <Button text='View all' link='/visualizations' />}
        </div>

    );
}