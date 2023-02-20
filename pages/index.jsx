import Head from 'next/head'
import { ProjectCard } from '../components'

import logo from '../images/logo-placeholder.png';

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

export default function Home() {
  return (
    <>
      <Head>
        <title>Zoe Ferencova</title>
        <meta name="description" content="Portfolio for Zoe Ferencova" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='max-w-4xl my-0 mx-auto'>
        <h1 className='text-[1.9rem] tracking-[0.02rem] leading-[2.55rem]'>Zoe Ferencova is a full stack software engineer who loves using technology to make work more efficient and make sense of data.</h1>
        <div className='grid grid-cols-1 col:grid-cols-2 gap-x-10 lg:gap-x-14 gap-y-10 mt-20'>
          {projects.map((project) => (<ProjectCard project={project} key={project.id} />))}
        </div>
      </main>
    </>
  )
}
