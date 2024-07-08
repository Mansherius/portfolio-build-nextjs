import React from 'react';
import { TextGenerateEffect } from './ui/textGenEffect';
import { Spotlight } from "@/components/ui/Spotlight";
import styles from './Icons.module.css';
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Highlight } from './ui/hero-highlight';

function Hero() {
  return (
    <div className='w-full h-[100%] text-center'>
        <div className='w-full h-full m-auto pt-[60px] px-6 flex flex-col justify-center items-center'>
            <div className='md:mt-60'>
                <h1 className='sm:text-4xl md:text-5xl tracking-wider'> Hi, I'm <span className=' text-teal-400'>Mansher</span></h1>
            </div>
            <div>
              <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20' fill="white"/>
              <Spotlight className='-top-10 -left-30 h-80vh w-50vw' fill="purple"/>
              <Spotlight className='top-28 left-80 w-50vw h-80vh' fill="blue"/>
            </div>
            <TextGenerateEffect className='sm:text-2xl md:text-4xl text-center' words='Budding Software Engineer and Full-stack Developer'/>
            <p className='text-gray-500 sm:text-xl md:text-2xl text-center sm:max-w-[70%] md:max-w-[80%] pt-4'> As an undergraduate in Computer Science (Hons.) based in Bangalore, India,<br /> I am currently devoted to learning <Highlight><span className='text-teal-400'>Full-Stack Web Dev</span></Highlight> </p>
            <div className='mt-[100px]'>
              <p className='uppercase tracking-widest text-teal-500 font-bold'>Let's Connect</p>
              <div className='flex justify-around items-center gap-[2rem] my-4'>
                  <div className={`${styles.icon} ${styles['icon-linkedin']}`}>
                    <FaLinkedinIn size={25} />
                  </div>
                <div className={`${styles.icon} ${styles['icon-github']}`}>
                  <FaGithub size={25} />
                </div>
                <div className={`${styles.icon} ${styles['icon-envelope']}`}>
                  <FaEnvelope size={25} />
                </div>
                <div className={`${styles.icon} ${styles['icon-person']}`}>
                  <BsFillPersonLinesFill size={25} />
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Hero