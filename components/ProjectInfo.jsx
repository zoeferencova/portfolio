import React from 'react';
import { Button, DrawerHeader } from '.';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/react-splide/css';

const slideshowOptions = {
    gap: '1.5rem',
    fixedWidth: '65%',
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

export default function ProjectInfo({ project }) {
    const buttons = project.links.map(link => <Button key={link.id} text={link.name} icon={link.icon.url} link={link.url} extraClasses='inline-block mr-2 mob:mr-3' dark={link.name === 'Visit'} />);
    const sectionLabelStyles = 'text-[0.8rem] mob:text-sm text-gray-400 uppercase tracking-[0.07rem] mob:tracking-[0.1rem] mt-10 mob:mt-12'
    const paragraphStyles = 'my-4 mob:my-6 text-mob mob:text-base'

    return (
        <div className={`${!project.page && 'pt-6 mob:pt-10'}`}>
            <DrawerHeader title={project.title} subtitle={project.subtitle} buttons={buttons} logo={project.logo.url} />
            <div className='my-9 hover:cursor-grab slideshow-container'>
                <Splide options={slideshowOptions}>
                    {project.images.map((image) => (
                        <SplideSlide key={image.id}><img alt={image.alt} src={image.url} className='rounded-xl mob:rounded-3xl' /></SplideSlide>
                    ))}
                </Splide>
            </div>
            <div className='px-6 mob:px-10'>
                <h3 className={sectionLabelStyles}>About</h3>
                <p className={paragraphStyles}>{project.description.text}</p>
                <h3 className={sectionLabelStyles}>Technology</h3>
                <ul className='grid grid-cols-2 mob:flex my-5 mob:my-8 mob:flex-wrap'>
                    {project.technologies.map((tech) => (
                        <li key={tech.id} className='flex mr-3 mob:mr-8 mb-4 mob:mb-6 items-center'>
                            <img src={tech.icon.url} className='w-6 h-6 mr-2' />
                            <span className='text-sm mob:text-base'>{tech.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div >
    );
}