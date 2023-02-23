import Head from 'next/head'
import { ProjectCard } from '../components'
import { AboutInfo, Resume, ProjectInfo } from '../components';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Modal from 'react-modal';
import React, { useState, useEffect } from 'react';

Modal.setAppElement('#__next');

import logo from '../images/logo-placeholder.png';
import close from '../images/close.svg';

const projects = [
  {
    id: 1,
    name: 'Coordinator',
    slug: 'coordinator',
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
    slug: 'blog',
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
    slug: 'community',
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
    slug: 'football-viz',
    description: 'Data visualization project about player migration in football.',
    logo: logo,
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    content: 'Content',
    link: 'https://www.google.com',
    images: ['../images/project-img-placeholder.png']
  },
]


export default function Home() {
  const router = useRouter();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [closing, setClosing] = React.useState(false);


  useEffect(() => {
    setClosing(false)
    if (!closing && router.asPath !== '/') setIsOpen(true)
  }, [router.asPath])

  function closeModal() {
    setClosing(true)
    setIsOpen(false)
    setTimeout(() => {
      router.push("/")
    }, 200);
  }


  return (
    <>
      <Head>
        <title>Zoe Ferencova</title>
        <meta name="description" content="Portfolio for Zoe Ferencova" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='max-w-4xl my-0 mx-auto'>
        <h1 id='headline' className='text-[1.6rem] tracking-[0.005rem] leading-[2.1rem] mob:text-[1.9rem] mob:tracking-[0.02rem] mob:leading-[2.55rem]'>Zoe Ferencova is a full stack software engineer who loves using technology to make work more efficient and make sense of data.</h1>
        <div className='grid grid-cols-1 col:grid-cols-2 gap-x-10 lg:gap-x-14 gap-y-10 mt-16 mob:mt-20'>
          {projects.map((project) => (<ProjectCard project={project} key={project.id} />))}
        </div>
        <Modal closeTimeoutMS={400} isOpen={modalIsOpen} onRequestClose={() => closeModal()} style={router.query.page === 'about' ? { content: { marginTop: '17%' } } : { content: { marginTop: '1%' } }}>
          <button onClick={() => closeModal()} className='float-right'><Image src={close} className='w-7 h-7 p-1 mr-0 ml-auto bg-slate-100 rounded-3xl' /></button>
          {router.query.page === 'resume' && <Resume />}
          {router.query.page === 'about' && <AboutInfo />}
          {router.asPath.split('/')[1] === 'project' && <ProjectInfo project={projects.find(project => project.slug === router.query.page)} />}
        </Modal>
      </main>
    </>
  )
}
