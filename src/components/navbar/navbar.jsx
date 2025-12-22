import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion, AnimatePresence } from 'framer-motion';
import { CiLocationArrow1 } from "react-icons/ci";

const NavBar = () => {
  

    const [isNavbarVisible, setNavbarVisible] = useState(false);
   
      const toggleNavbar = () => {
        setNavbarVisible(!isNavbarVisible);
    
      };


    return (
        
        <>

<div className="p-4 w-full rounded-full z-50">


<div className='flex items-center justify-around w-full'>


<div>
<h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl" style={{fontFamily:"serif"}}>
  B<span className='text-blue-500 relative right-1'>A</span>
  </h1>
  <h6 className="text-[10px] font-serif m-auto"> Bushra  A'mer</h6>
</div>
        
{/* القاءمه العاديه */}

        <div className="hidden sm:hidden md:block lg:block xl:block">
            <ul className='flex gap-6 text-md sm:text-md md:text-md lg:text-xl xl:text-xl p-2'>
           <li><a href="#home" className="relative transition duration-500 ease-in-out hover:text-primary"> Home</a></li>
                <li> <a  href='#about' className="relative transition duration-500 ease-in-out hover:text-primary">About</a></li>
                <li> <a  href='#experience' className="relative transition duration-500 ease-in-out hover:text-primary">experience</a></li>
                <li> <a  href='#projects' className="relative transition duration-500 ease-in-out hover:text-primary">projects</a></li>
                <li> <a  href='#contact' className="relative transition duration-500 ease-in-out hover:text-primary">contact</a></li>

          </ul>
        </div>



     {/* <button className="flex text-md sm:text-md md:text-md lg:text-lg xl:text-lg bg-[#8818f1] px-4 py-2 rounded-full hover:bg-transparent"> 
              <CiLocationArrow1 color="white" size={20} className="relative top-1 right-1"/>
   <a href='https://wa.me/201062588052'>Lets Talk</a> 
    </button> */}
    <div className="relative z-10">
  <button className="flex border-2 border-primary bg-transparent py-2.5 px-5 font-medium uppercase text-white rounded-full before:rounded-full transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-primary before:transition-transform before:duration-1000 before:content-[''] hover:text-white before:hover:scale-x-100">
           <CiLocationArrow1 color="white" size={20} className="relative top-1 right-1"/>
        <a href='https://wa.me/201017823288'>Lets Talk</a>
      </button>
    </div>
    

           

<GiHamburgerMenu className='text-2xl mt-1 cursor-pointer block sm:block md:hidden lg:hidden xl:hidden' onClick={toggleNavbar} />


{/* {القاءمه المنسدله} */}
<AnimatePresence>
      {isNavbarVisible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }} // ❌ تأثير الاختفاء
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed top-0 right-0 inset-0 w-[40%] h-max p-1 bg-primary z-40 "
        >
          <div className="flex flex-col gap-2 items-center w-full">

          <ul className="flex flex-col gap-x-3 font-semibold gap-y-4 my-8 mx-4">
          {["home", "about", "experience", "projects", "contact" ].map((item) => (
            <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }} // ❌ تأثير اختفاء كل عنصر
                  transition={{ duration: 0.3, delay: Math.random() * 0.3 }}

                >
                  <a
                    href={`#${item}`}
                    className="relative transition duration-500 ease-in-out"
                    onClick={toggleNavbar}
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>

            <button
        onClick={toggleNavbar}
        className="text-white font-bold text-xl absolute top-2 right-2"
       >
        ✖
      </button>
     </div>
  </motion.div>
  )}
 </AnimatePresence> 
 
    
            </div>
        </div>

        
        </>
    )
}

export default NavBar




         
