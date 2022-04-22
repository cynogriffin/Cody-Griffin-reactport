import React from 'react'
import avatar from '../assets/avatar.png'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[rgb(24,24,24)] text-gray-200'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid justify-center gap-1'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#00baf3]'>About</p>
                </div>
                <div>

                </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='grid justify-center'>
                    <img src={avatar} alt="my avatar" className='max-w-full h-auto rounded-full' />
                </div>
                <p>
                    Hello! My name is Cody and I am a full stack developer most experienced in the MERN stack (but eager to learn anything and everything) and looking for a meaningful career in tech. With a background as a classically trained musician and composer, and more recently coming from almost 4 years of experience working as a Human Resources professional, I bring a unique and diverse skillset with me into the field. With a passion for code, I am in search of a career that I can grow into and be challenged at daily, committing to it my best time and energy. I am also actively exploring new ways to get involved in the coding community through meetups, blogging, and dipping my toes into open source.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About