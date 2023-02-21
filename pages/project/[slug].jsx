import React from "react"

const projects = [
    {
        id: 1,
        name: 'Coordinator',
        description: 'Lead management tool, created for my former coordinator job.',
        logo: logo,
        technologies: ['React', 'Node.js', 'PostgreSQL'],
        content: 'Content',
        link: 'https://www.google.com',
        images: ['../images/project-img-placeholder.png']
    },
    {
        id: 2,
        name: 'Tada Blog',
        description: 'Personal data visualization blog, built from scratch.',
        logo: logo,
        technologies: ['React', 'Node.js', 'PostgreSQL'],
        content: 'Content',
        link: 'https://www.google.com',
        images: ['../images/project-img-placeholder.png']
    },
    {
        id: 3,
        name: 'Comm-unity',
        description: 'Community platform for sharing resources and services.',
        logo: logo,
        technologies: ['React', 'Node.js', 'PostgreSQL'],
        content: 'Content',
        link: 'https://www.google.com',
        images: ['../images/project-img-placeholder.png']
    },
    {
        id: 4,
        name: 'Visualizing Football Migration',
        description: 'Data visualization project about player migration in football.',
        logo: logo,
        technologies: ['React', 'Node.js', 'PostgreSQL'],
        content: 'Content',
        link: 'https://www.google.com',
        images: ['../images/project-img-placeholder.png']
    },
]

export default function ProjectPage({ projects }) {
    return (
        <div>
            <p>{projects[0].name}</p>
        </div>
    )
}
