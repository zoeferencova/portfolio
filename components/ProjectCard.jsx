import React from 'react';
import { Button } from '.';

export default function ProjectCard({ project, openDrawer }) {
    return (
        <div className='flex justify-start col:justify-between items-center w-full cursor-pointer' onClick={() => openDrawer(project)}>
            <img src={project.logo.url} width='20' height='20' className='w-16 h-16 mob:w-20 mob:h-20 mr-4 mob:mr-6' />
            <div>
                <h2 className='no-smooth mb-1 mob:mb-1 mob:text-base text-[15px]'>{project.title}</h2>
                <p className='text-[13px] mob:text-sm lg:text-[15px] text-gray-400 max-w-[13rem] col:max-w-full'>{project.subtitle}</p>
            </div>
            <Button text='View' onClick={e => e.preventDefault()} extraClasses='col:ml-2 lg:ml-4 ml-auto' />
        </div>
    );
}