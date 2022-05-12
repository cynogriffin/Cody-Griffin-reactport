import React from 'react';
import Ecomic from '../assets/ecomic.png';
import MoneyTracker from '../assets/money-tracker.png';
import NoteTaker from '../assets/note-taker.png';
import PhotoPort from '../assets/photo-port.png';
import TeamBuilder from '../assets/team-builder.png';

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-200 bg-[#181818] pt-2'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-200 border-[#00baf3]'>Work</p>
                <p className='py-6'>{'/'}{'/'} Check out some of my work</p>
            </div>

            {/* container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/* grid item */}
                <div style={{backgroundImage: `url(${Ecomic})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <div>
                            <span className='text-2xl font-bold text-white tracking-wider justify-center'>
                                E-comic
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/" target={'_blank'} rel={'noreferrer noopener'}>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/cynogriffin/deep-thoughts" target={'_blank'} rel={'noreferrer noopener'}>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* grid item */}
                <div style={{backgroundImage: `url(${MoneyTracker})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <div>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Money Tracker PWA
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://e-comic-403a6.web.app/" target={'_blank'} rel={'noreferrer noopener'}>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/dmevola/e-comics" target={'_blank'} rel={'noreferrer noopener'}>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* grid item */}
                <div style={{backgroundImage: `url(${PhotoPort})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <div>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Photo React Portfolio
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://cynogriffin.github.io/photo-port/" target={'_blank'} rel={'noreferrer noopener'}>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/cynogriffin/photo-port" target={'_blank'} rel={'noreferrer noopener'}>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* grid item */}
                <div style={{backgroundImage: `url(${NoteTaker})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <div>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Note Taking App
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://pure-headland-10773.herokuapp.com/" target={'_blank'} rel={'noreferrer noopener'}>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/cynogriffin/handy-note-taker" target={'_blank'} rel={'noreferrer noopener'}>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* grid item */}
                <div style={{backgroundImage: `url(${TeamBuilder})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <div>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Team Builder App
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/" target={'_blank'} rel={'noreferrer noopener'}>
                                    <button className='hidden text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/cynogriffin/team-info-builder" target={'_blank'} rel={'noreferrer noopener'}>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work