import React, { useState } from 'react';
import { ProjectGrid, VisualizationGrid, Headline, Header, Drawer, ProjectCategorySelector } from '../components';
import { getProjects, getVisualizations } from '../services';

export default function Home({ projects, visualizations }) {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [drawerContent, setDrawerContent] = useState(null);
  const [projectCategory, setProjectCategory] = useState('apps');

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
          <ProjectCategorySelector setProjectCategory={setProjectCategory} projectCategory={projectCategory} />
          <div className='min-h-[238px]'>
            {projectCategory === 'apps' && <ProjectGrid projects={projects} openDrawer={openDrawer} />}
            {projectCategory === 'visualizations' && <VisualizationGrid visualizations={visualizations} />}
          </div>
          <Drawer drawerOpen={drawerOpen} closeDrawer={closeDrawer} drawerContent={drawerContent} />
        </div>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const projects = (await getProjects()) || [];
  const visualizations = (await getVisualizations()) || [];
  return {
    props: { projects, visualizations },
  };
}

