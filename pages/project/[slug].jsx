import React from "react"
import { ProjectInfo } from '../../components'
import { getProjectDetails, getProjects } from "../../services";
import Link from 'next/link'


export default function ProjectPage({ project }) {
    return (
        <div className='col:max-w-[75%] col:h-full mt-10 col:mt-24 col:mx-auto'>
            <ProjectInfo project={{ ...project, page: true }} />
            <button className='block mob:hidden mt-4'><Link href='/' className='flex items-center'><img src='/back.svg' className='w-4 h-4 inline-block mr-2' /><span className='font-medium'>Home</span></Link></button>
        </div>

    )
}


export async function getStaticPaths() {
    const projects = await getProjects();

    return {
        paths: projects.map(({ slug }) => ({ params: { slug } })),
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const data = (await getProjectDetails(params.slug)) || [];
    return {
        props: { project: data }
    }
}
