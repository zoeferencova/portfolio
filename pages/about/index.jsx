import React from "react"
import { AboutInfo } from '../../components'
import Link from 'next/link'

export default function AboutPage() {
    return (
        <div className='col:max-w-[70%] col:h-full mt-10 col:mt-32 col:mx-auto'>
            <AboutInfo page={true} />
            <button className='block mob:hidden mt-10 ml-3'><Link href='/' className='flex items-center'><img src='/back.svg' className='w-4 h-4 inline-block mr-2' /><span className='font-medium'>Home</span></Link></button>
        </div>
    )
}