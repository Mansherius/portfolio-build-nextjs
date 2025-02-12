import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import styles from './Icons.module.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);

    const handleChange = (e) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const textColorClass = isDarkMode ? 'text-white' : 'text-black-100';
  const backgroundColorClass = isDarkMode ? 'bg-black-100' : 'bg-white';

  const handleNav = () => {
    setShowMenu(!showMenu);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setShowMenu(false); // Close the menu after selecting an item
    }
  };

  return (
    <div className='w-full h-20 z-[100] sticky top-2'>
      <div className='flex justify-between items-center h-full px-4 bg-black-100 shadow-lg shadow-green-3 rounded-full m-4'>
        <Image src='/logoLeo.png' alt='logo' width={50} height={50} onClick={() => scrollToSection('home')} />
        <div>
          <ul className='hidden md:flex'>
            <li className={`ml-6 uppercase text-lg tracking-widest hover:border-b-2 border-green-3 text-white hover:transform hover:translate-y-[-2px] transition-transform duration-200`} onClick={() => scrollToSection('home')}>
              Home
            </li>
            <li className={`ml-6 uppercase text-lg tracking-widest hover:border-b-2 border-green-3 text-white hover:transform hover:translate-y-[-2px] transition-transform duration-200`} onClick={() => scrollToSection('about')}>
              About
            </li>
            <li className={`ml-6 uppercase text-lg tracking-widest hover:border-b-2 border-green-3 text-white hover:transform hover:translate-y-[-2px] transition-transform duration-200`} onClick={() => scrollToSection('projects')}>
              Projects
            </li>
            <li className={`ml-6 uppercase text-lg tracking-widest hover:border-b-2 border-green-3 text-white hover:transform hover:translate-y-[-2px] transition-transform duration-200`} onClick={() => scrollToSection('experience')}>
              Experience
            </li>
            <li className={`ml-6 mr-2 uppercase text-lg tracking-widest hover:border-b-2 border-green-3 text-white hover:transform hover:translate-y-[-2px] transition-transform duration-200`} onClick={() => scrollToSection('contact')}>
              Contact
            </li>
          </ul>
          <div onClick={handleNav} className='md:hidden pr-2'>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div className={showMenu ? 'fixed inset-0 bg-black/70 md:hidden' : ''}>
        <div className={showMenu ? `fixed left-0 top-0 h-screen bg-black-100 p-4 ease-in-out duration-1000 transform translate-x-0` : `fixed left-0 top-0 h-screen bg-transparent p-4 ease-in-out duration-1000 transform -translate-x-full`}>
          <div className='flex w-full justify-between items-center'>
            <Image src='/logoLeo.png' alt='logo' width={50} height={50} onClick={() => scrollToSection('home')} />
            <div onClick={handleNav} className='rounded-full shadow-lg p-3 cursor-pointer'>
              <AiOutlineClose size={25} />
            </div>
          </div>
          <div className='border-b border-grey my-4'>
            <p className='py-4'>You should be hiring me now</p>
          </div>
          <div>
            <ul className='text-sm uppercase'>
              <li className='uppercase text-lg tracking-widest my-4 hover:border-b border-green-3 hover:transform hover:translate-y-[-2px] transition-transform duration-200' onClick={() => scrollToSection('home')}>
                Home
              </li>
              <li className='uppercase text-lg tracking-widest my-4 hover:border-b border-green-3 hover:transform hover:translate-y-[-2px] transition-transform duration-200' onClick={() => scrollToSection('about')}>
                About
              </li>
              <li className='uppercase text-lg tracking-widest my-4 hover:border-b border-green-3 hover:transform hover:translate-y-[-2px] transition-transform duration-200' onClick={() => scrollToSection('projects')}>
                Projects
              </li>
              <li className='uppercase text-lg tracking-widest my-4 hover:border-b border-green-3 hover:transform hover:translate-y-[-2px] transition-transform duration-200' onClick={() => scrollToSection('experience')}>
                Experience
              </li>
              <li className='uppercase text-lg tracking-widest my-4 hover:border-b border-green-3 hover:transform hover:translate-y-[-2px] transition-transform duration-200' onClick={() => scrollToSection('contact')}>
                Contact
              </li>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-green-4 font-bold'>Let&apos;s Connect</p>
              <div className='flex sm:justify-around md:justify-evenly md:mx-auto items-center gap-[2rem] my-4'>
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
            <p className='text-sm'>Copyright © 2024 Mansher Singh. All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
