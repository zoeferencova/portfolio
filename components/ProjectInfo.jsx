import React from 'react';
import { Button, PageHeader } from '.';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/react-splide/css';

const slideshowOptions = {
    gap: '1.5rem',
    fixedWidth: '68%',
    perPage: 1,
    loop: false,
    drag: 'free',
    snap: false,
    rewind: false,
    type: 'slide',
    arrows: false,
    pagination: false,
    breakpoints: {
        640: {
            fixedWidth: '88%',
            gap: '15px'
        },
    }
}

function ProjectInfo({ project }) {
    const buttons = project.links.map(link => <Button key={link.id} text={link.name} icon={link.icon.url} link={link.url} extraClasses='inline-block' dark={link.name === 'Visit'} />);
    const sectionLabelStyles = 'text-sm text-gray-400 uppercase tracking-[0.1rem] mt-12'
    const paragraphStyles = 'my-6'

    return (
        <div className='pt-[40px] pl-[40px]'>
            <PageHeader title={project.title} subtitle={project.subtitle} buttons={buttons} logo={project.logo.url} />
            <div className='my-9 hover:cursor-grab slideshow-container'>
                <Splide options={slideshowOptions}>
                    {project.images.map((image) => (
                        <SplideSlide><img key={image.id} src={image.url} className='rounded-xl mob:rounded-3xl' /></SplideSlide>
                    ))}
                </Splide>
            </div>
            <div className='pr-[40px]'>
                <h3 className={sectionLabelStyles}>About</h3>
                <p className={paragraphStyles}>{project.description.text}</p>
                <h3 className={sectionLabelStyles}>Technology</h3>
                <ul className='flex my-8 flex-wrap'>
                    {project.technologies.map((tech) => (
                        <li className='flex mr-8 mb-6 items-center'>
                            <img src={tech.icon.url} className='w-8 h-8 mr-3' />
                            <span>{tech.name}</span>
                        </li>
                    ))}
                </ul>
            </div>

        </div >
    );
}

export default ProjectInfo;