import React, { useState } from 'react';
import { ProjectGrid, Headline, Header, Drawer } from '../components';
import { getProjects } from '../services';

export default function Home({ projects }) {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [drawerContent, setDrawerContent] = useState(null);

  function closeDrawer() {
    setDrawerOpen(false)
    setTimeout(() => {
      setDrawerContent(null)
    }, 450)
  }

  function openDrawer(content) {
    setDrawerOpen(true)
    setDrawerContent(content)
  }

  return (
    <>
      <Header drawerContent={drawerContent} openDrawer={openDrawer} />
      <main className='col:h-[75vh] mt-[7vh] col:mt-0 flex items-center'>
        <div className='max-w-4xl'>
          <Headline />
          <ProjectGrid projects={projects} openDrawer={openDrawer} />
          <Drawer drawerOpen={drawerOpen} closeDrawer={closeDrawer} drawerContent={drawerContent} />
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

