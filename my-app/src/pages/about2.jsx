import React from 'react'
import "./about.css"
import Navi2 from '../components/Navi2'
const About2 = () => {
  return (
    <div>
      <Navi2/>
      <div class="relative pt-48 pb-12 bg-black xl:pt-[20rem] sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-[13.5rem]">
        <header class="absolute inset-x-0 top-0 z-10 ">
          <div class="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
            <div class="flex items-center justify-between">
              <div class="md:hidden">
                <button type="button" class="p-2 -m-2 transition-all duration-200 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary">
                  <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>


            </div>
          </div>
        </header>

        <div class="absolute inset-0 opacity-80">
          <img class="object-cover w-full h-[59.2rem]" src="images/about1.jpg" alt="" />
        </div>

        <div class="relative">
          <div class="px-6 ml-40 sm:px-8 lg:px-12 max-w-7xl">
            <div class="w-full lg:w-2/3 xl:w-full">
              <p class="mt-6 tracking-tighter text-white">
                {/* <span class="font-sans font-normal text-5xl leading-loose">StudyMate </span><br /> */}
                <span class="font-serif relative top-[-255px] shade font-normal text-8xl">About Us</span>
                {/* <p className='font-serif  relative top-[-210px]  font-normal text-3xl leading-loose'><span className='pr-4'> •</span> At StudyMate, we are committed to empowering students on their academic journey by providing a comprehensive suite of resources and tools designed to enhance learning, productivity, and success..</p> */}
                <ul class=" list-disc list-outside font-serif  relative top-[-210px] tracking-[1.1px] font-normal text-3xl leading-[2.4rem]">
                  <li className='pb-[1.5rem] '> At StudyMate, we are committed to empowering students on their academic journey by providing a comprehensive suite of resources and tools designed to enhance learning, productivity, and success.</li>
                  <li>With the ever-evolving landscape of education, students often find themselves navigating a vast array of online resources and tools. Our platform seeks to simplify this process by curating the topmost useful websites and tools across various academic domains, all in one convenient location.</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>

    
      {/* <br/> */}
      
    </div>
  )
}

export default About2