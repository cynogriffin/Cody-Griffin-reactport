import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { SiHashnode } from 'react-icons/si';
import { Link } from 'react-scroll';

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#181818] text-[#fff]'>
            {/* logo */}
            <div className='text-[#00baf3] text-3xl font-bold'>
                {'<'}CG/{'>'}
            </div>
            
            {/* menu */}
            <ul className='hidden md:flex'>
                <li className='hover:text-[#00baf3]'>
                    <Link to="home"  smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='hover:text-[#00baf3]'>
                    <Link to="about"  smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='hover:text-[#00baf3]'>
                    <Link to="skills"  smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='hover:text-[#00baf3]'>
                    <Link to="work"  smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li className='hover:text-[#00baf3]'>
                    <Link to="contact"  smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
            

            {/* hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            {/* mobile menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#181818] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="work" smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0E76A8]'>
                        <a className='flex justify-between items-center w-full text-white no-underline' href="https://www.linkedin.com/in/cody-griffin-0a74b1222/" target={'_blank'} rel={'noreferrer noopener'}>
                            LinkedIn <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full text-white no-underline' href="https://github.com/cynogriffin" target={'_blank'} rel={'noreferrer noopener'}>
                            GitHub <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <a className='flex justify-between items-center w-full text-white no-underline' href="mailto:griffinc6@gmail.com" target={'_blank'} rel={'noreferrer noopener'}>
                            Email <HiOutlineMail size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a className='flex justify-between items-center w-full text-white no-underline' href={"Cody-Griffin-Resume.pdf"} download>
                            Resume <BsFillPersonLinesFill size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-white no-underline' href="https://cynogriffin.hashnode.dev/" target={'_blank'} rel={'noreferrer noopener'}>
                            Hashnode <SiHashnode size={30}/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
  )
}

export default NavBar