import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin} from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import { FaWhatsapp } from "react-icons/fa";
import { personal } from '../Data/data';
import profilePhoto from '../../assets/WhatsApp Image 2025-12-22 at 2.06.27 PM.jpeg';


const Home = () => {
  return (
    <>
    <div className='flex flex-col px-4 sm:px-4 md:px-6 lg:px-8 xl:px-32 pt-40 pb-28' id='home'>

    <div className='flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20 mb-16'>
    
    <div className='flex-1 text-center lg:text-left'>
      
      <p className='text-primary text-lg md:text-xl font-medium mb-2 animate-pulse'>Welcome to my portfolio</p>
      
    <h1 
  className="bg-gradient-to-r from-primary via-purple-400 to-white bg-clip-text text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-[2px] inline-block leading-tight"
  style={{ WebkitTextFillColor: "transparent" }}
>
  {`I'm ${personal.name}`}
</h1>

        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl my-4 font-semibold'>
          <span className='text-gray-400'>I'm a </span>
          <TypeAnimation
            sequence={[
              'Flutter Developer',
              2000,
              'Mobile Developer',
              2000,
              'UI/UX Enthusiast',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className='text-primary'
          />
        </h1>

        <p className='text-md text-gray-300 sm:text-md md:text-lg lg:text-lg xl:text-xl max-w-md mx-auto lg:mx-0 mb-6 leading-relaxed'>
          I'm a professional mobile developer passionate about creating beautiful and functional applications that make a difference.
        </p>
        
        <div className='flex flex-wrap justify-center lg:justify-start items-center gap-4 mb-8'>
          <a href='/CV.pdf' download={`${personal.name.replace(/\s+/g, '')}_CV.pdf`}>
            <button className="group relative text-sm flex items-center gap-2 bg-gradient-to-r from-primary to-purple-500 py-3 px-6 font-medium uppercase text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/50">
              <span>Download CV</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>
          </a>
          
          <a href='#contact'>
            <button className="text-sm flex items-center gap-2 border-2 border-primary py-3 px-6 font-medium uppercase text-white rounded-full transition-all duration-300 hover:bg-primary hover:scale-105">
              <span>Contact Me</span>
            </button>
          </a>
        </div>

        <div className='flex justify-center lg:justify-start items-center gap-4'>
          <span className='text-gray-400 text-sm'>Follow me:</span>
          <a href="https://github.com/Bu4ra-3mer" className='group' target="_blank" rel="noopener noreferrer">
            <FaGithub className='text-3xl text-gray-400 transition-all duration-300 group-hover:text-white group-hover:scale-110'/>
          </a>
          <a href="https://www.linkedin.com/in/bushra-amer-02a68a31b" className='group' target="_blank" rel="noopener noreferrer">
            <FaLinkedin className='text-3xl text-gray-400 transition-all duration-300 group-hover:text-blue-500 group-hover:scale-110'/>
          </a>
          <a href="https://wa.me/201017823288" className='group' target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className='text-3xl text-gray-400 transition-all duration-300 group-hover:text-green-500 group-hover:scale-110'/>
          </a>
        </div>
    </div>
    
    <div className='flex-shrink-0 relative'>
      {/* Decorative rings */}
      <div className='absolute inset-0 rounded-full border-2 border-primary/30 animate-ping' style={{animationDuration: '3s'}}></div>
      <div className='absolute -inset-4 rounded-full border border-primary/20'></div>
      <div className='absolute -inset-8 rounded-full border border-primary/10'></div>
      
      {/* Glowing background */}
      <div className='absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 to-purple-500/40 blur-2xl'></div>
      
      <img 
        src={profilePhoto} 
        alt={personal.name} 
        className='relative z-10 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-primary shadow-2xl shadow-primary/30 transition-transform duration-500 hover:scale-105'
      />
    </div>
    </div>

<div className='card backdrop-blur-sm bg-white/5 rounded-2xl border border-primary/30 shadow-2xl w-full lg:w-[80%] xl:w-[60%] p-6 transition-all duration-500 ease-in-out hover:border-primary/60'>
  <ul className='flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12 md:gap-16 lg:gap-24'> 
    <li className='flex flex-col items-center text-center group'>
      <span className='font-bold text-5xl md:text-6xl bg-gradient-to-r from-primary to-purple-400 bg-clip-text' style={{ WebkitTextFillColor: "transparent" }}>1+</span>
      <span className='text-sm text-gray-400 mt-2 group-hover:text-white transition-colors'>Years of Experience</span>
    </li>
    <li className='w-px h-12 bg-primary/30 hidden sm:block'></li>
    <li className='flex flex-col items-center text-center group'>
      <span className='font-bold text-5xl md:text-6xl bg-gradient-to-r from-primary to-purple-400 bg-clip-text' style={{ WebkitTextFillColor: "transparent" }}>10+</span>
      <span className='text-sm text-gray-400 mt-2 group-hover:text-white transition-colors'>Projects Completed</span>
    </li>
    <li className='w-px h-12 bg-primary/30 hidden sm:block'></li>
    <li className='flex flex-col items-center text-center group'>
      <span className='font-bold text-5xl md:text-6xl bg-gradient-to-r from-primary to-purple-400 bg-clip-text' style={{ WebkitTextFillColor: "transparent" }}>5+</span>
      <span className='text-sm text-gray-400 mt-2 group-hover:text-white transition-colors'>Happy Clients</span>
    </li>
  </ul>
</div> 



</div>

</>

  )
};

export default Home


