import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin} from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import { FaWhatsapp } from "react-icons/fa";
import { personal } from '../Data/data';


const Home = () => {
  return (
    <>
    <div className='flex flex-col px-4 sm:px-4 md:px-6 lg:px-8 xl:px-32 pt-40 pb-28' id='home'>

    <div className='mb-10'>
      
    <h1 
  className="bg-gradient-to-r from-primary to-white bg-clip-text text-5xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl font-bold tracking-[2px] inline-block"
  style={{ WebkitTextFillColor: "transparent" }}
>
  {`I'm ${personal.name}`}
</h1>
        <h1 className='text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl my-3'>

          Flutter Developer
      

          </h1>

        <p className='text-md text-gray-200 sm:text-md md:text-md lg:text-lg xl:text-xl w-80 mb-4 '>

        I'm a professional mobile Developer

        </p>
        <div className='flex mb-8'>

<div className="relative z-10">
  <a href='/CV.pdf' download={`${personal.name.replace(/\s+/g, '')}_CV.pdf`}><button className="text-sm flex bg-gradient-to-t from-primary to-white py-2.5 px-4 font-medium uppercase text-white rounded-full ">
        Download Cv
      </button></a>
    </div>
        <a href="https://github.com/Bu4ra-3mer"><FaGithub className='text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl mx-3 text-white'/></a>
        <a href="https://www.linkedin.com/in/bushra-amer-02a68a31b"><FaLinkedin className='text-3xl sm:text-3xl md:text-4xl lg:text-4xl mr-3 xl:text-4xl'/></a>
        {/* <a href="https://www.facebook.com/hazem.mahisin"> <FaFacebookSquare className='text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl mx-3 text-white'/></a> */}
        <a href="https://wa.me/201017823288"> <FaWhatsapp className='text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl text-white'/></a>


        </div>
    </div>

<div className='card rounded-xl border-2 border-primary shadow-xl w-[100%] sm:w-[90%] md:w-[80%] lg:w-[80%] transition-all duration-500 ease-in-out xl:w-[50%] p-4'>
  <ul className='flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-center gap-8 sm:gap-8 md:gap-16 lg:gap-24 xl:gap-24'> 
    <li className='flex gap-2'> <span className='font-bold text-5xl'>1+ </span><span className='text-sm relative top-4'>Years of Experience</span></li>
    <li className='flex gap-2'> <span className='font-bold text-5xl'>10+ </span><span className='text-sm relative top-4'>Projects Completed</span></li>
    <li></li>
  </ul>
</div> 



</div>

</>

  )
};

export default Home


