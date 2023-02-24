import React from 'react';
import { SmallButton, PageHeader } from '.'

function ProjectInfo({ project }) {
    const buttons = project.links.map(link => <SmallButton key={link.id} text={link.name} icon={link.icon.url} link={link.url} extraClasses='inline-block' />)
    return (
        <div className=''>
            <PageHeader title={project.title} subtitle={project.subtitle} buttons={buttons} logo={project.logo.url} />

        </div>
    );
}

export default ProjectInfo;