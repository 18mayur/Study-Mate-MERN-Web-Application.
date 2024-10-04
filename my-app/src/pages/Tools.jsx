import React from 'react'
import './tools.css'
import Navigation from '../components/navigation'
const Tools = () => {
  return (
    <div>
      <div className="sticky top-0 z-10">
      <Navigation/>
      </div>
      <section class="overflow-hidden h-[43rem] bg-[url(images/tool.jpg)] bg-cover bg-center bg-no-repeat">
        <div class=" h-[43rem] bg-black/30 p-8 md:p-12 lg:px-16 lg:py-24">
          <div class="relative top-[220px] left-[35px] text-left ltr:sm:text-left rtl:sm:text-right">
            <h2 class="text-2xl font-bold text-white sm:text-3xl md:text-[7.3rem]">StudyMate Tools</h2>
            <p class="hidden max-w-[50%] text-white/90 md:mt-14 md:block md:text-[2.125rem] md:leading-tight">
            </p>
            <div class="mt-4 sm:mt-8">
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-48 mt-[5rem] mb-[-3rem] text-4xl font-semibold"><h2>Tools For :Productivity </h2></div>
      <div className="flex flex-row flex-wrap gap-x-[3rem] gap-y-[5rem] mx-48 my-20">
        <div className="flex flex-col h-[650px] max-w-[37rem] p-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
          <div className="flex space-x-4">
            <div className="flex flex-col space-y-1">
              <a rel="noopener noreferrer" href="#" className="text-4xl font-semibold ">I Love Pdf</a>
            </div>
          </div>
          <div>
            <img src="images/ilovepdf.png" alt="" className=" mt-[25px]  mb-[1.8rem] object-inherit w-full h-60 sm:h-[13rem] dark:bg-gray-500" />
            <p className="text-[1.5rem] leading-10 dark:text-gray-600">Every tool you need to work with PDFs in one place
              Every tool you need to use PDFs, at your fingertips. All are 100% FREE and easy to use! Merge, split, compress, convert, rotate, unlock and watermark PDFs with just a few clicks.</p>
          </div>
          <div className="flex flex-wrap relative top-[35px] justify-between">
            <div className="space-x-2">
              <a href='https://www.ilovepdf.com/'><button  className='but1'>Vist Website</button></a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col h-[650px] max-w-[37rem] p-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
          <div className="flex space-x-4">
            <div className="flex flex-col space-y-1">
              <a rel="noopener noreferrer" href="#" className="text-4xl font-semibold">Chegg Study</a>
            </div>
          </div>
          <div>
            <img src="images/chegg.webp" alt="" className="mt-[25px] object-cover w-full mb-[1.8rem] h-60 sm:h-[13rem] dark:bg-gray-500" />
            <p className="text-[1.5rem] leading-10 dark:text-gray-600">Chegg Study offers 24/7 online study help and guided text book solutions with step-by-step explanations of tough to solve problems contained in specific text books. Stuck on a homework problem, Chegg Study can help.</p>
          </div>
          <div className="flex flex-wrap relative top-[35px] justify-between">
            <div className="space-x-2">
              <a href='https://www.chegg.com/study'><button className='but1'>Vist Website</button></a>
            </div>
          </div>
        </div>

        <div className="flex flex-col h-[650px] max-w-[37rem] p-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
          <div className="flex space-x-4">
            <div className="flex flex-col space-y-1">
              <a rel="noopener noreferrer" href="#" className="text-4xl font-semibold">Creately </a>
            </div>
          </div>
          <div>
            <img src="images/creately.png" alt="" className="object-cover w-full mt-[25px]  mb-[1.8rem] h-60 sm:h-[13rem] dark:bg-gray-500"/>
            <p className="text-[1.5rem] leading-10 dark:text-gray-600">Creately is an online diagramming tool that enables users to create a wide range of diagrams and visuals with its intuitive drag-and-drop interface. It offers customizable templates, making it valuable for individuals and processes effectively.</p>
          </div>
          <div className="flex flex-wrap relative top-[35px] justify-between">
            <div className="space-x-2">
             <a href='https://creately.com/'> <button className='but1'>Vist Website</button></a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-48 mt-[5rem] mb-[-3rem] text-4xl font-semibold"><h2>Tools For : Organization and Productivity Tools .</h2></div>
      <div className="flex flex-row flex-wrap gap-x-[3rem] gap-y-[5rem] mx-48 my-20">
        <div className="flex flex-col h-[650px] max-w-[37rem] p-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
          <div className="flex space-x-4">
            <div className="flex flex-col space-y-1">
              <a rel="noopener noreferrer" href="#" className="text-4xl font-semibold ">Momentum</a>
            </div>
          </div>
          <div>
            <img src="images/ilovepdf.png" alt="" className=" mt-[25px]  mb-[1.8rem] object-inherit w-full h-60 sm:h-[13rem] dark:bg-gray-500" />
            <p className="text-[1.5rem] leading-10 dark:text-gray-600">Every tool you need to work with PDFs in one place
              Every tool you need to use PDFs, at your fingertips. All are 100% FREE and easy to use! Merge, split, compress, convert, rotate, unlock and watermark PDFs with just a few clicks.</p>
          </div>
          <div className="flex flex-wrap relative top-[35px] justify-between">
            <div className="space-x-2">
              <a href='https://www.ilovepdf.com/'><button  className='but1'>Vist Website</button></a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col h-[650px] max-w-[37rem] p-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
          <div className="flex space-x-4">
            <div className="flex flex-col space-y-1">
              <a rel="noopener noreferrer" href="#" className="text-4xl font-semibold">Chegg Study</a>
            </div>
          </div>
          <div>
            <img src="images/chegg.webp" alt="" className="mt-[25px] object-cover w-full mb-[1.8rem] h-60 sm:h-[13rem] dark:bg-gray-500" />
            <p className="text-[1.5rem] leading-10 dark:text-gray-600">Chegg Study offers 24/7 online study help and guided text book solutions with step-by-step explanations of tough to solve problems contained in specific text books. Stuck on a homework problem, Chegg Study can help.</p>
          </div>
          <div className="flex flex-wrap relative top-[35px] justify-between">
            <div className="space-x-2">
              <a href='https://www.chegg.com/study'><button className='but1'>Vist Website</button></a>
            </div>
          </div>
        </div>

        <div className="flex flex-col h-[650px] max-w-[37rem] p-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
          <div className="flex space-x-4">
            <div className="flex flex-col space-y-1">
              <a rel="noopener noreferrer" href="#" className="text-4xl font-semibold">Creately </a>
            </div>
          </div>
          <div>
            <img src="images/creately.png" alt="" className="object-cover w-full mt-[25px]  mb-[1.8rem] h-60 sm:h-[13rem] dark:bg-gray-500"/>
            <p className="text-[1.5rem] leading-10 dark:text-gray-600">Creately is an online diagramming tool that enables users to create a wide range of diagrams and visuals with its intuitive drag-and-drop interface. It offers customizable templates, making it valuable for individuals and processes effectively.</p>
          </div>
          <div className="flex flex-wrap relative top-[35px] justify-between">
            <div className="space-x-2">
             <a href='https://creately.com/'> <button className='but1'>Vist Website</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tools