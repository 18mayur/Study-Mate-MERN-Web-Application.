import React from 'react'
import './field.css'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import Navigation from '../components/navigation'
const Field = () => {
    const scrollToTop = () =>{
        window.scrollTo({
            top:0 ,
            behavior: 'smooth'
        });
    };
    return (
        <div>
           <div className="sticky top-0 z-10">
            <Navigation/>
            </div>
            <section class="overflow-hidden h-[38rem] bg-[url(images/career3.jpg)] bg-cover bg-top bg-no-repeat">
                <div class=" h-[38rem] bg-black/30 p-8 md:p-12 lg:px-16 lg:py-24">
                    <div class="relative top-[100px] left-[35px] text-left ltr:sm:text-left rtl:sm:text-right">
                        <h2 class="text-2xl font-bold text-white sm:text-3xl md:text-[7.3rem]">Field Resource</h2>

                        <p class="hidden max-w-[50%] text-white/90 md:mt-14 md:block md:text-[2.125rem] md:leading-tight">
                            Get The Different Fields And There Resource Files.
                        </p>

                        <div class="mt-4 sm:mt-8">

                        </div>
                    </div>
                </div>
            </section>
            <hr className='w-full bg-[#f5f5f5] h-[8px]' />

            {/* <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-wrap">
                    <div class="flex flex-wrap -m-4">
                        <div class="p-4 lg:w-1/2 md:w-full">
                            <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                                <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-8 h-8" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                    </svg>
                                </div>
                                <div class="flex-grow">
                                    <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Shooting Stars</h2>
                                    <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                                    <a class="mt-3 text-purple-500 inline-flex items-center">Learn More
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <div className="title mb-[50px]">
                <section class="bg-indigo-50 border-indigo-100">
                    <div class="container flex flex-col items-center px-4 pt-[2.35rem] pb-[2rem] mx-auto text-center">
                        <h2 class="max-w-5xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-[2.5rem] leading-10 dark:text-white">
                            Get Your Field Related Resources On <span class="text-[#845EC2]">One Click.</span>
                        </h2>

                        <p class="max-w-4xl mt-6 text-center text-xl dark:text-gray-300">
                           We are providing the Resources such as notes ,question papers ,online tools etc.
                        </p>
                    </div>
                </section>
            </div>
            <ol className='ol1'style={{ '--length': 5 }} role="list">
                <li className='li1' style={{ "--i": 1 }}>
                    <Link to='/Computer' onClick={scrollToTop} ><h3 className='h31'>Computer Science</h3></Link>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum id neque nobis maxime possimus tempora debitis repellat odit!.</p>
                </li>
                <li className='li1' style={{ "--i": 2 }}>
                <Link to='/home'><h3 className='h31'>Pharmacy & Doctory</h3></Link>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </li>
                <li className='li1' style={{ "--i": 3 }}>
                <Link to='/home'><h3 className='h31'>Engennering</h3></Link>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </li>
                <li className='li1' style={{ "--i": 4 }}>
                <Link to='/home'> <h3 className='h31'>Business And Finance</h3></Link>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </li>
                <li className='li1' style={{ "--i": 5 }}>
                <Link to='/home'>   <h3 className='h31'>Agriculture</h3></Link>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </li>
                <li className='li1' style={{ "--i": 5 }}>
                <Link to='/home'>  <h3 className='h31'>Human Services</h3></Link>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </li>
            </ol>

            
        </div>

    )
}

export default Field