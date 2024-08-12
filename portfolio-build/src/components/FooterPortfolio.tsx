import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import styles from './Icons.module.css';

const FooterPortfolio = () => {
  return (
    <footer className='relative w-full pt-20 pb-10 overflow-hidden'>
        <div className='w-full absolute left-0 bottom-0'> 
            <img
            src='/footer-grid.svg'
            alt='grid'
            className='w-full h-auto opacity-70'
            />
        </div>
        <div className='relative flex flex-col items-center z-10'> 
            <h1 className='sm:text-4xl md:text-5xl lg:max-w-[45vw] uppercase tracking-widest text-green-4 font-bold'>
                Let's Connect
            </h1>
            <p className='font-bold text-lg text-center p-8'>
                Reach out today and let's discuss how I can help you with your next project.
            </p>
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
              <p className='text-base text-center p-12 text-slate-500'>
              Copyright © 2024 Mansher Singh. All rights reserved.
              </p>
        </div>
    </footer>
  )
}

export default FooterPortfolio
