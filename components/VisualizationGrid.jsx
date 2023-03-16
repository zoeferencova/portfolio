import React from 'react';
import { VisualizationCard } from '.';

export default function VisualizationGrid({ visualizations }) {
    return (
        <div className='grid grid-cols-1 viz-col:grid-cols-2 col:grid-cols-3 gap-x-10 lg:gap-x-14 gap-y-10'>
            {visualizations.map(visualization => (
                <VisualizationCard visualization={visualization} key={visualization.id} />
            ))}
        </div>
    )
}