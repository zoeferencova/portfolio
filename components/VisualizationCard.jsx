import React from 'react';
import Image from 'next/image';

export default function VisualizationCard({ visualization }) {
    return (
        <a href={visualization.url} target='_blank'>
            <div className='border rounded-lg shadow-custom h-full'>
                <div className='px-2 py-[7px] min-h-[60%]'>
                    <Image src={visualization.thumbnail.url} width={381} height={200} className='mx-auto' />
                </div>
                <div className='border-t p-3 bg-gray-100 bg-opacity-[0.4]'>
                    <h3 className='mb-1 text-[15px]'>{visualization.title}</h3>
                    <span className='block text-[0.8rem] text-gray-400 leading-[1.1rem]'>{visualization.description}</span>
                </div>
            </div>
        </a>
    );
}