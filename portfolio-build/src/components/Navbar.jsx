import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
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

  return (
    <div className='w-full h-20 z-[100] sticky top-8'>
      <div className='flex justify-between items-center h-full px-4 bg-black-100 shadow-lg shadow-teal-400 rounded-full m-4'>
        <Link href='/home'>
          <Image src='/logoLeo.png' alt='logo' width={50} height={50} />
        </Link>
        <div>
          <ul className='hidden md:flex'>
            <li className={`ml-10 uppercase text-lg tracking-widest hover:border-b-2 border-teal-500 ${textColorClass} hover:transform hover:translate-y-[-2px] transition-transform duration-200`}>
              <Link href='/home'>Home</Link>
            </li>
            <li className={`ml-10 uppercase text-lg tracking-widest hover:border-b-2 border-teal-500 ${textColorClass} hover:transform hover:translate-y-[-2px] transition-transform duration-200`}>
              <Link href='/'>About</Link>
            </li>
            <li className={`ml-10 uppercase text-lg tracking-widest hover:border-b-2 border-teal-500 ${textColorClass} hover:transform hover:translate-y-[-2px] transition-transform duration-200`}>
              <Link href='/'>Resume</Link>
            </li>
            <li className={`ml-10 uppercase text-lg tracking-widest hover:border-b-2 border-teal-500 ${textColorClass} hover:transform hover:translate-y-[-2px] transition-transform duration-200`}>
              <Link href='/'>Projects</Link>
            </li>
            <li className={`ml-10 mr-2 uppercase text-lg tracking-widest hover:border-b-2 border-teal-500 ${textColorClass} hover:transform hover:translate-y-[-2px] transition-transform duration-200`}>
              <Link href='/'>Contact</Link>
            </li>
          </ul>
          <div onClick={handleNav} className='md:hidden pr-2'>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div className={showMenu ? 'fixed inset-0 bg-black/70 md:hidden' : ''}>
        <div className={showMenu ? `fixed left-0 top-0 h-screen ${backgroundColorClass} p-4 ease-in-out duration-1000 transform translate-x-0` : `fixed left-0 top-0 h-screen bg-transparent p-4 ease-in-out duration-1000 transform -translate-x-full`}>
          <div className='flex w-full justify-between items-center'>
            <Image src='/logoLeo.png' alt='logo' width={50} height={50} />
            <div onClick={handleNav} className='rounded-full shadow-lg p-3 cursor-pointer'>
              <AiOutlineClose size={25} />
            </div>
          </div>
          <div className='border-b border-grey my-4'>
            <p className='py-4'>You should be hiring me now</p>
          </div>
          <div>
            <ul className='text-sm uppercase'>
              <li className='uppercase text-lg tracking-widest my-4 hover:border-b border-teal-500 hover:transform hover:translate-y-[-2px] transition-transform duration-200'>
                <Link href='/home' onClick={() => setShowMenu(false)}>Home</Link>
              </li>
              <li className='uppercase text-lg tracking-widest my-4 hover:border-b border-teal-500 hover:transform hover:translate-y-[-2px] transition-transform duration-200'>
                <Link href='/about' onClick={() => setShowMenu(false)}>About</Link>
              </li>
              <li className='uppercase text-lg tracking-widest my-4 hover:border-b border-teal-500 hover:transform hover:translate-y-[-2px] transition-transform duration-200'>
                <Link href='/resume' onClick={() => setShowMenu(false)}>Resume</Link>
              </li>
              <li className='uppercase text-lg tracking-widest my-4 hover:border-b border-teal-500 hover:transform hover:translate-y-[-2px] transition-transform duration-200'>
                <Link href='/projects' onClick={() => setShowMenu(false)}>Projects</Link>
              </li>
              <li className='uppercase text-lg tracking-widest my-4 hover:border-b border-teal-500 hover:transform hover:translate-y-[-2px] transition-transform duration-200'>
                <Link href='/contact' onClick={() => setShowMenu(false)}>Contact</Link>
              </li>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-blue-800 font-bold'>Let's Connect</p>
              <div className='flex sm:justify-around md:justify-evenly md:mx-auto items-center gap-[2rem] my-4'>
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
            <p className='text-sm'>© 2021 Leo. All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
