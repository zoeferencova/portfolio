import React from 'react';
import { ProjectCard } from '.';

export default function ProjectGrid({ projects, openDrawer }) {
    return (
        <div className='grid grid-cols-1 col:grid-cols-2 gap-x-10 lg:gap-x-14 gap-y-10'>
            {projects.map(project => (
                <ProjectCard openDrawer={openDrawer} project={project} key={project.id} />
            ))}
        </div>
    )
}