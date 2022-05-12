import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll/modules';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#181818]'>

        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#fff]'>Cody Griffin</h1>
            <h2 className='text-3xl sm:text-6xl font-bold text-[#00baf3]'>Full Stack Developer</h2>
            <p className='text-gray-200 text-lg py-4 max-w-[700px]'>
                Motivated. Passionate. Creator.
            </p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#00baf3] hover:border-[#00baf3] hover:text-[#181818]' to='work'>
                    <Link to="work"  smooth={true} duration={500}>
                        View Work
                    </Link> 
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3'/>
                    </span>
                </button>
            </div>
        </div>

    </div>
  )
}

export default Home