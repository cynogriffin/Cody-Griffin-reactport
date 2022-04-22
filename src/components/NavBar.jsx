import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFilPersonLinesFill } from 'react-icons/bs';
import { SiHashnode } from 'react-icons/si';

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#181818] text-[#fff] '>
            {/* logo */}
            <div className='text-[#00baf3] text-3xl font-bold'>
                {'<'}CG/{'>'}
            </div>
            
            {/* menu */}
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
            

            {/* hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            {/* mobile menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#181818] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Work</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul>

            {/* social icons */}
            <div className='flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-130px] hover:ml-[-30px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-white no-underline' href="/">
                            LinkedIn <FaLinkedin size={30}/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
  )
}

export default NavBar