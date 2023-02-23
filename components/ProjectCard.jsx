import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { SmallButton } from '.';

function ProjectCard({ project }) {
    return (
        <Link href={`/?page=${project.slug}`} as={`/project/${project.slug}`} className='flex justify-start col:justify-between items-center w-full'>
            <Image src={project.logo} width='20' height='20' className='w-16 h-16 mob:w-20 mob:h-20 mr-4 mob:mr-6' />
            <div>
                <h2 className='mb-1 mob:mb-1 mob:text-base text-[15px]'>{project.name}</h2>
                <p className='text-[13px] mob:text-sm lg:text-[15px] text-gray-400'>{project.description}</p>
            </div>
            <SmallButton text='View' extraClasses='col:ml-2 lg:ml-4 ml-auto' />
        </Link>
    );
}

export default ProjectCard;