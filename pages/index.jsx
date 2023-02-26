import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head'
import Modal from 'react-modal';
import SimpleBarReact from 'simplebar-react';

import { AboutInfo, Resume, ProjectInfo, ProjectCard } from '../components';
import { getProjects } from '../services';

import 'simplebar-react/dist/simplebar.min.css';

Modal.setAppElement('#__next');

export default function Home({ projects }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [closing, setClosing] = React.useState(false);

  const router = useRouter();

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
      <main className='col:h-[75vh] mt-[10vh] flex items-center'>
        <div className='max-w-4xl'>
          <h1 id='headline' className='text-[1.6rem] tracking-[0.005rem] leading-[2.1rem] mob:text-[1.9rem] mob:tracking-[0.02rem] mob:leading-[2.55rem] mt-0'>Zoe Ferencova is a full stack software engineer who loves using technology to make work more efficient and make sense of data.</h1>
          <div className='grid grid-cols-1 col:grid-cols-2 gap-x-10 lg:gap-x-14 gap-y-10 mt-[11vh] mob:mt-20'>
            {projects.map((project) => (<ProjectCard project={project} key={project.id} />))}
          </div>
          <Modal closeTimeoutMS={400} isOpen={modalIsOpen} onRequestClose={() => closeModal()} style={router.query.page === 'about' ? { content: { marginTop: '14%' } } : { content: { marginTop: '0.5%' } }}>
            <SimpleBarReact style={{ maxHeight: '100%' }}>
              <button onClick={() => closeModal()} className='float-right mt-4 mr-3 mob:mt-10 mob:mr-10'><img src='/close.svg' className='w-6 h-6 mob:w-7 mob:h-7 p-1 mr-0 ml-auto bg-slate-100 rounded-3xl' /></button>
              {router.query.page === 'resume' && <Resume />}
              {router.query.page === 'about' && <AboutInfo />}
              {router.asPath.split('/')[1] === 'project' && <ProjectInfo project={projects.find(project => project.slug === router.query.page)} />}
            </SimpleBarReact>
          </Modal>
        </div>

      </main>
    </>
  )
}

export async function getStaticProps() {
  const projects = (await getProjects()) || [];
  return {
    props: { projects },
  };
}

