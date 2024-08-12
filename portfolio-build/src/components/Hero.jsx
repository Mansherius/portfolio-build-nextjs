import React from 'react';
import { TextGenerateEffect } from './ui/TextGenEffect';
import { Spotlight } from "@/components/ui/Spotlight";
import styles from './Icons.module.css';
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
import { TypewriterEffectSmooth } from './ui/TypewriterEffect';

function Hero() {
  const words = [
    {
      text: "Hi,",
    },
    {
      text: "I'm",
    },
    {
      text: "Mansher",
      className: "text-green-4",
    },
  ]
  return (
    <div className='w-full h-[100%] text-center'>
        <div className='w-full h-full m-auto sm:pt-[30px] md:pt-[60px] px-6 flex flex-col justify-center items-center'>
            <div className='mt-60'>
                <TypewriterEffectSmooth words={words} />
                {/* <h1 className='sm:text-4xl md:text-5xl tracking-wider'> Hi, I'm <span className=' text-green-4'>Mansher</span></h1> */}
            </div>
            <div>
              <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20' fill="green"/>
              <Spotlight className='-top-10 -left-30 h-80vh w-50vw' fill="green"/>
              <Spotlight className='top-28 left-80 w-50vw h-80vh' fill="purple"/>
            </div>
            <TextGenerateEffect className='text-2xl md:text-4xl text-center' words='Budding Software Engineer and Full-stack Developer'/>
            <p className='text-gray-500 sm:text-xl md:text-2xl text-center sm:max-w-[70%] md:max-w-[80%] pt-4'> As an undergraduate in Computer Science (Hons.) based in Bangalore, India,<br /> I am currently devoted to learning <span className='text-green-4 font-bold'>Full-Stack Web Dev</span></p>
            <div className='mt-[100px]'>
              <p className='uppercase tracking-widest text-green-4 font-bold'>Let&apos;s Connect</p>
              <div className='flex justify-around items-center gap-[2rem] my-4'>
                <a href='https://www.linkedin.com/in/mansherius' target='_blank' rel='noreferrer'>
                  <div className={`${styles.icon} ${styles['icon-linkedin']}`}>
                    <FaLinkedinIn size={25} />
                  </div>
                </a>
                <a href='https://github.com/Mansherius' target='_blank' rel='noreferror'>
                <div className={`${styles.icon} ${styles['icon-github']}`}>
                  <FaGithub size={25} />
                </div>
                </a>
                <a href="mailto: mansherius@gmail.com" target='_blank' rel='noreferror'>
                <div className={`${styles.icon} ${styles['icon-envelope']}`}>
                  <FaEnvelope size={24} />
                </div>
                </a>
                <a href='https://leetcode.com/mansherius/' target='_blank' rel='noreferrer'>
                <div className={`${styles.icon} ${styles['icon-leet']}`}>
                  <SiLeetcode size={25} />
                </div>
                </a>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Hero