import React from 'react';
import { DrawerHeader, Button } from '.';

const linkedInButton = <Button key="linkedin" text='LinkedIn' icon={'/linkedin.svg'} link='https://www.linkedin.com/in/zoeferencova/' extraClasses='inline-block mr-3' />
const githubButton = <Button key="github" text='Github' icon={'/github.svg'} link='https://github.com/zoeferencova' extraClasses='inline-block' />


export default function AboutInfo() {
    const paragraphStyles = 'mb-4 mob:mb-5 text-base mob:text-md px-6 mob:px-10'

    return (
        <div className='px-0 py-6 mob:px-8 mob:pt-12'>
            <DrawerHeader title='About me' buttons={[linkedInButton, githubButton]} logo={'/profile-pic.png'} className='mb-10' />
            <p className={paragraphStyles}>Hello! My name is Zoe and I'm a software engineer, currently looking for opportunities in New York City. I attended Thinkful's full stack engineering bootcamp back in 2020 and have been obsessed with coding ever since. In addition to web development, I really enjoy working on data visualization projects, which I write about on my blog <a href="https://www.tada-blog.xyz" target="_blank" className="underline text-gray-500">here</a>.</p>
            <p className={paragraphStyles}>I grew up in the Czech Republic and the Philippines and have lived and worked mostly in the US since 2015. I have spent a majority of my career here as a coordinator for a market research company. During this time, I started to write little programs to make my job more efficient, eventually leading to the creation of a full-blown app that some of my colleagues and I ended up using for a couple of years. This sparked my interest in web development, and my goal has been to pivot into a career in tech ever since. I'm now at a level where I feel very confident in my skillset, and I'm super excited to work in a team environment and contribute to larger goals.</p>
            <p className={paragraphStyles}>Outside of coding, I love watching football (big Chelsea FC supporter), cooking, and hanging out with my two cats.</p>
        </div>
    );
}