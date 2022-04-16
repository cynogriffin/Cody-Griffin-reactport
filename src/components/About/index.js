import React from 'react';
import avatar from '../../assets/avatar.png';

function About() {
    return (
        <section className='my-5'>
            <h1 id="about">About Me</h1>
            <img src={avatar} className='my-2' alt='avatar' />
        </section>
    );
}

export default About;