'use client';

// components/Navbar.jsx
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import styles from './Icons.module.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleNav = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='w-full h-20 shadow-xl z-[100] bg-white'>
      <div className='flex justify-between items-center w-full h-full px-2 pl-4'>
        <Image src='/logoLeo.png' alt='logo' width={50} height={50} />
        <div>
          <ul className='hidden md:flex'>
            <li className='ml-10 uppercase text-sm hover:border-b'>
              <Link href='/home' className='menuItem'>Home</Link>
            </li>
            <li className='ml-10 uppercase text-sm hover:border-b'>
              <Link href='/about' className='menuItem'>About</Link>
            </li>
            <li className='ml-10 uppercase text-sm hover:border-b'>
              <Link href='/resume' className='menuItem'>Resume</Link>
            </li>
            <li className='ml-10 uppercase text-sm hover:border-b'>
              <Link href='/projects' className='menuItem'>Projects</Link>
            </li>
            <li className='ml-10 mr-2 uppercase text-sm hover:border-b'>
              <Link href='/contact' className='menuItem'>Contact</Link>
            </li>
          </ul>
          <div onClick={handleNav} className='md:hidden'>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div className={showMenu ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div className={showMenu ? 'fixed left-0 top-0 w-[70%] sm:w-[65%] md:w-[50%] h-screen bg-white p-10 ease-in duration-300' : 'fixed left-[-100%] top-0 ease-in duration-300'}>
          <div className='flex w-full justify-between items-center'>
            <Image src='/logoLeo.png' alt='logo' width={50} height={50} />
            <div onClick={handleNav} className='rounded-full shadow-lg p-3 cursor-pointer'>
              <AiOutlineClose size={25} />
            </div>
          </div>
          <div className='border-b border-grey my-4'>
            <p className='md:w-full py-4'>You should be hiring me now</p>
          </div>
          <div>
            <ul className='text-sm uppercase hover:border-b'>
              <li className='my-4'>
                <Link href='/home' onClick={() => setShowMenu(false)} className='menuItem'>Home</Link>
              </li>
              <li className='my-4'>
                <Link href='/about' onClick={() => setShowMenu(false)} className='menuItem'>About</Link>
              </li>
              <li className='my-4'>
                <Link href='/resume' onClick={() => setShowMenu(false)} className='menuItem'>Resume</Link>
              </li>
              <li className='my-4'>
                <Link href='/projects' onClick={() => setShowMenu(false)} className='menuItem'>Projects</Link>
              </li>
              <li className='my-4'>
                <Link href='/contact' onClick={() => setShowMenu(false)} className='menuItem'>Contact</Link>
              </li>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-blue-800 font-bold'>Let's Connect</p>
              <div className='flex justify-center items-center gap-[2rem] my-4 sm:w-[80%]'>
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
