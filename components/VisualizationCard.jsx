import React from 'react';
import Image from 'next/image';

export default function VisualizationCard({ visualization }) {
    return (
        <a href={visualization.url} target='_blank'>
            <div className='border rounded-lg shadow-custom h-full flex flex-col justify-end'>
                <div className='px-2 py-[7px] flex items-center'>
                    <Image src={visualization.thumbnail.url} width={381} height={200} className='mx-auto h-auto max-h-full w-full' />
                </div>
                <div className='border-t py-3 px-4 bg-gray-100 bg-opacity-[0.4]'>
                    <h3 className='mb-1 text-[15px]'>{visualization.title}</h3>
                    <span className='block min-h-[2.2rem] text-[0.8rem] text-gray-400 leading-[1.1rem]'>{visualization.description}</span>
                </div>
            </div>
        </a>
    );
}