import React from 'react'
import {
    CloudUploadIcon,
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon,
} from '@heroicons/react/solid'

import bgImg from '../assets/cyber-bg.png'
import rumah from '../assets/42.jpg'
import { HomeIcon, DesktopComputerIcon, OfficeBuildingIcon } from '@heroicons/react/outline'

const Hero = () => {
  return (
    <div name='home' className='w-full h-screen bg-zinc-400 flex flex-col justify-between'>
        <div className='w-full h-screen absolute'>
            <img className='w-full h-screen object-cover mix-blend-overlay' src={rumah} alt="/" />
        </div>
        {/* <div className='text-center max-w-[1240px] m-auto'>
            <h2 className='text-5xl font-bold'>Kiw Design</h2>
            <p className='text-3xl py-6 text-black'>Melayani pembuatan desain arsitektur rumah, maupun ruangan.</p>
        </div> */}
        <div className='absolute flex flex-col py-5 md:min-w-[760px] bottom-[5%]
        mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
        border border-slate-300 rounded-xl text-center shadow-xl'>
            <p>Layanan Kami</p>
            <div className='flex justify-between flex-wrap px-4'>
                <p className='flex px-4 py-2 text-slate-500'><HomeIcon className='h-6 text-indigo-600 mr-3' />Desain Arsitektur</p>
                <p className='flex px-4 py-2 text-slate-500'><DesktopComputerIcon className='h-6 text-indigo-600 mr-3' /> Desain Interior/Eksterior</p>
                <p className='flex px-4 py-2 text-slate-500'><OfficeBuildingIcon className='h-6 text-indigo-600 mr-3' /> Pembangunan</p>
            </div>
        </div> 
    </div>
  )
}

export default Hero