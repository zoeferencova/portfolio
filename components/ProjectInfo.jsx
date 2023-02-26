import React from 'react';
import { Button, PageHeader } from '.';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/react-splide/css';

function ProjectInfo({ project }) {
    const buttons = project.links.map(link => <Button key={link.id} text={link.name} icon={link.icon.url} link={link.url} extraClasses='inline-block' dark={link.name === 'Visit'} />);
    const slideStyles = 'rounded-xl mob:rounded-3xl'
    return (
        <div className=''>
            <PageHeader title={project.title} subtitle={project.subtitle} buttons={buttons} logo={project.logo.url} />
            <div className='mt-9 hover:cursor-grab'>
                <Splide options={{
                    gap: '1.5rem',
                    fixedWidth: '75%',
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
                }}>
                    <SplideSlide>
                        <img src='/project-img-placeholder.png' className={slideStyles} />
                    </SplideSlide>
                    <SplideSlide>
                        <img src='/project-img-placeholder.png' className={slideStyles} />
                    </SplideSlide>
                    <SplideSlide>
                        <img src='/project-img-placeholder.png' className={slideStyles} />
                    </SplideSlide>
                    <SplideSlide>
                        <img src='/project-img-placeholder.png' className={slideStyles} />
                    </SplideSlide>
                </Splide>
            </div>

        </div >
    );
}

export default ProjectInfo;