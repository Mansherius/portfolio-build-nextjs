import React from 'react';
import { TextGenerateEffect } from './ui/textGenEffect';
import { Spotlight } from "@/components/ui/Spotlight";

function Hero() {
  return (
    <div className='w-full h-screen text-center'>
        <div className='max-w-max w-full h-full mx-auto p-2 pb-40 flex flex-col justify-center items-center'>
            <div>
                <h1 className='text-5xl tracking-wider'> Hi, I'm <span className=' text-teal-400'>Mansher</span></h1>
            </div>
            <div>
              <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20' fill="white"/>
              <Spotlight className='-top-10 -left-30 h-80vh w-50vw' fill="purple"/>
              <Spotlight className='top-28 left-80 w-50vw h-80vh' fill="blue"/>
            </div>
            <TextGenerateEffect className='text-4xl text-center' words='Budding Software Engineer and Fullstack Developer'/>
        </div>
    </div>
  )
}

export default Hero