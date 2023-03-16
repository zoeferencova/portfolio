import React from "react";
import Image from "next/image";
import Link from "next/link";
import { VisualizationGrid } from '../../components';
import { getAllVisualizations } from '../../services';

export default function VisualizationPage({ visualizations }) {
    const h2Styles = 'text-xl mt-10 mb-6 font-medium tracking-[0.01rem]'
    return (
        <div className='px-2 col:px-8 py-10'>
            <Link href='/'>
                <button className='flex items-center'>
                    <Image src='/back.svg' height={14} width={14} className='inline-block mr-2' />
                    <span className='font-medium text-md tracking-[0.01rem]'>Portfolio</span>
                </button>
            </Link>
            <h1 className='mt-14 text-3xl'>Visualizations</h1>
            <h2 className={h2Styles}>Interactive</h2>
            <VisualizationGrid visualizations={visualizations.filter(viz => viz.interactive)} />
            <h2 className={h2Styles}>Static</h2>
            <VisualizationGrid visualizations={visualizations.filter(viz => !viz.interactive)} />
        </div>
    )
}

export async function getStaticProps() {
    const visualizations = (await getAllVisualizations()) || [];
    return {
        props: { visualizations },
    };
}