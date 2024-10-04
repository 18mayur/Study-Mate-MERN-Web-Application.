import React from 'react'
import "./about.css"
import Navigation from '../components/navigation'
const About = () => {
  return (
    <div>
      <div className="sticky top-0 z-10">
      <Navigation/>
      </div>
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

      {/* <section class="mt-[3rem] ">
        <div class="container flex flex-col items-center px-4 pt-9 pb-7 mx-auto text-center">
          <h2 class="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-6xl ">
            CONTACT US
          </h2>
          <p class="max-w-4xl mt-6 text-2xl text-center text-gray-500 ">

          </p>
        </div>
      </section>
    
      <section class="text-gray-600 body-font relative top-[23px]">
        <div class="container px-5 pb-[6rem] mx-auto flex sm:flex-nowrap flex-wrap">
          <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg h-[550px] overflow-hidden sm:mr-[3.3rem] flex items-end justify-start relative">
            <img src='images/contact1.jpg' />
           
          </div>
          <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:pt-[1rem] pb-[2rem] mt-8 md:mt-0">
            <h2 class="text-gray-900 text-[2.45rem] leading-[2.75rem] mb-[0.7rem] font-medium title-font">Feedback</h2>
         
            <div class="relative mb-4">
              <label htmlFor="name" class="leading-7 text-[1.3rem] text-gray-600">Name</label>
              <input type="text" id="name" name="name" class="w-full mt-[0.5rem] bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-[1.3rem] text-gray-600">Email</label>
              <input type="email" id="email" name="email" class="w-full mt-[0.5rem] bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div class="relative mb-4">
              <label for="message" class="leading-7 text-[1.3rem] text-gray-600">Message</label>
              <textarea id="message" name="message" class="w-full mt-[0.5rem] bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
      
          </div>
        </div>
      </section> */}
    </div>
  )
}

export default About