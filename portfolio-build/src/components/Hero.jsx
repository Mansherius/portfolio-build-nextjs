import React from 'react'
import { TextGenerateEffect } from './ui/textGenEffect'

function Hero() {
  return (
    <div className='w-full h-screen text-center'>
        <div className='max-w-max w-full h-full mx-auto p-2 pb-40 flex flex-col justify-center items-center'>
            <div>
                <h1 className='text-5xl tracking-wider'> Hi, I'm <span className=' text-teal-400'>Mansher</span></h1>
            </div>
            <TextGenerateEffect className='text-4xl text-center' words='Budding Software Engineer and Fullstack Developer'/>
        </div>
    </div>
  )
}

export default Hero