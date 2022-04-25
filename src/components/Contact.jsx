import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#181818] flex justify-center items-center p-4'>
        <form action="https://getform.io/f/bc092fdb-5653-4d60-93e1-c09bfe822c5c" method="POST" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#00baf3] text-gray-200'>Contact</p>
                <p className='text-gray-200 py-4'>{'/'}{'/'} Submit the form below or feel free to send me an email at griffinc6@gmail.com</p>
            </div>
            <input type="text" placeholder='Name' name='name' className='bg-gray-200 p-2' />
            <input type="email" placeholder='Email' name='email' className='my-4 p-2 bg-gray-200' />
            <textarea name="message" rows="10" placeholder='Message' className='bg-gray-200 p-2'></textarea>
            <button className='text-white border-2 hover:bg-[#00baf3] hover:border-[#00baf3] hover:text-[#181818] px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
        </form>
    </div>
  )
}

export default Contact