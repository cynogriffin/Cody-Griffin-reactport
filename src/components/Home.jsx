import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#181818]'>

        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#fff]'>Cody Griffin</h1>
            <h2 className='text-3xl sm:text-6xl font-bold text-[#00baf3]'>Full Stack Developer</h2>
            <p className='text-gray-200 py-4 max-w-[700px]'>
                Hello! My name is Cody and I am a full stack developer trained in the MERN stack (but eager to learn anything and everything) and looking for a meaningful career in tech. With a background as a classically trained musician and composer, and more recently coming from almost 4 years of experience working as a Human Resources professional, I bring a unique and diverse skillset with me into the field. With a passion for code, I am in search of a career that I can grow into and be challenged at daily, committing to it my best time and energy. I am also actively exploring new ways to get involved in the coding community through meetups, blogging, and dipping my toes into open source.
            </p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#00baf3] hover:border-[#00baf3] hover:text-[#181818]'>View Work 
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