import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { SmallButton } from '../components';

function ProjectCard({ project }) {
    return (
        <Link href={project.link} className='flex justify-start col:justify-between items-center w-full'>
            <Image src={project.logo} width='20' height='20' className='w-20 h-20 mr-6' />
            <div>
                <h2 className='mb-2'>{project.name}</h2>
                <p className='text-sm lg:text-base text-gray-400'>{project.description}</p>
            </div>
            <SmallButton text='View' />
        </Link>
    );
}

export default ProjectCard;