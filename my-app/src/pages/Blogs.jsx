import React from 'react'
import './blog.css'
import Navigation from '../components/navigation'
//import career from '../../../server/model/career'
const Blogs = () => {

  return (
    <div>
      <div className="sticky top-0 z-10">
      <Navigation/>
      </div>
      <section class="overflow-hidden h-[43rem] bg-[url(images/blog1.webp)] bg-cover bg-top bg-no-repeat">
        <div class=" h-[43rem] bg-black/30 p-8 md:p-12 lg:px-16 lg:py-24">
          <div class="relative top-[220px] left-[35px] text-left ltr:sm:text-left rtl:sm:text-right">
            <h2 class="text-2xl font-bold text-white sm:text-3xl md:text-[7.3rem]">Blogs</h2>
            <p class="hidden max-w-[50%] text-white/90 md:mt-14 md:block md:text-[2.125rem] md:leading-tight">
            </p>
            <div class="mt-4 sm:mt-8">
            </div>
          </div>
        </div>
      </section>
      {/* <br /> */}
      <section class=" bg-indigo-50 border-y border-indigo-100">
        <div class="container flex flex-col items-center px-4 pt-9 pb-7 mx-auto text-center">
          <h2 class="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-4xl ">
            Read Education Related <span class="text-blue-500">Blogs</span> Here .
          </h2>
          {/* <p class="max-w-4xl mt-6 text-2xl text-center text-gray-500 ">
            To Help In There Academic.
          </p> */}
        </div>
      </section>

      {/* <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog"/>
                  <div class="p-6">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
                    <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    <div class="flex items-center flex-wrap ">
                      <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                      <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>1.2K
                      </span>
                      <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>6
                      </span>
                    </div>
                  </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/721x401" alt="blog"/>
                  <div class="p-6">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
                    <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    <div class="flex items-center flex-wrap">
                      <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                      <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>1.2K
                      </span>
                      <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>6
                      </span>
                    </div>
                  </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/722x402" alt="blog"/>
                  <div class="p-6">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                    <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    <div class="flex items-center flex-wrap ">
                      <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                      <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>1.2K
                      </span>
                      <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>6
                      </span>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-10 mx-auto">
          <div class="flex items-center justify-center">
            <h1 class="text-5xl font-semibold text-gray-800 capitalize lg:text-5xl dark:text-white">recent posts </h1>
          </div>

          <hr class="my-8 border-gray-200 dark:border-gray-700" />

          <div class="grid grid-cols-1 gap-[3rem] md:grid-cols-2 xl:grid-cols-3">
            <div>
              <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="images/edu1.png" alt="" />

              <div class="mt-8">
                <span class="text-blue-500 text-[20px] tracking-[1.6px] uppercase">INTERNATIONAL</span>

                <h1 class="mt-[0.8rem] leading-[1.85rem] text-[1.67rem] font-semibold text-gray-800 dark:text-white">
                HKU Mechanical Engineering Researchers Develop Miniaturised Electric Generators…
                </h1>

                <p class="mt-[0.5rem] text-[18px] text-gray-500 dark:text-gray-400">
                The development of engineered devices capable of harvesting the body’s mechanical motion and converting it into…
                </p>
                <div class="flex items-center mt-4">
                  <div>
                    <a href="https://indiaeducationdiary.in/author/indiaeduadmin/" target='_blank' class="text-[1.54rem] leading-[1.75rem] tracking-[1px] font-medium text-gray-700 dark:text-gray-300 ">
                    Indian Education
                    </a>
                  </div>
                  <p class="text-[1.25rem] leading-[1.25rem] relative left-[25px] text-gray-500 dark:text-gray-400"> •  Apr 26, 2024</p>
                </div>

              </div>
            </div>
            <div>
              <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="images/edu2.jpeg" alt="" />

              <div class="mt-8">
                <span class="text-blue-500 text-[20px] tracking-[1.6px] uppercase">IITS</span>
                <a className=" " href='https://indiaeducationdiary.in/iit-jodhpurs-ihub-drishti-foundation-partners-with-indira-gandhi-national-centre-for-arts-to-preserve-indias-rich-cultural-heritage/ '>
                <h1 class="mt-[0.8rem] leading-[1.85rem]  hover:text-[#0693e3] text-[1.67rem] font-semibold text-gray-800 dark:text-white">
                IIT Jodhpur’s IHUB Drishti Foundation Partners With Indira Gandhi National Centre…
                </h1>
                </a>
                <p class="mt-[0.5rem] text-[18px] text-gray-500 dark:text-gray-400">
                  The collaboration aims to digitize manuscripts, books, and historical documents held by IGNCA,…
                  </p>
                <div class="flex items-center mt-4">
                  <div>
                  <a href="https://indiaeducationdiary.in/author/indiaeduadmin/" target='_blank' class="text-[1.54rem] leading-[1.75rem] tracking-[1px] font-medium text-gray-700 dark:text-gray-300 ">
                    Indian Education
                    </a>
                  </div>
                  <p class="text-[1.25rem] leading-[1.25rem] relative left-[25px] text-gray-500 dark:text-gray-400"> •  Apr 17, 2024</p>
                </div>

              </div>
            </div>
            <div>
              <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

              <div class="mt-8">
                <span class="text-blue-500 text-[20px] tracking-[1.6px] uppercase">category</span>

                <h1 class="mt-[0.8rem] leading-[1.85rem] text-[1.67rem] font-semibold text-gray-800 dark:text-white">
                  What do you want to know about UI
                </h1>

                <p class="mt-[0.5rem] text-[18px] text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi
                  recusandae nulla veritatis id tempore sapiente
                </p>
                <div class="flex items-center mt-4">
                  <div>
                    <a href="#" class="text-[1.54rem] leading-[1.75rem] tracking-[1px] font-medium text-gray-700 dark:text-gray-300">
                      John snow
                    </a>
                  </div>
                  <p class="text-[1.25rem] leading-[1.25rem] relative left-[25px] text-gray-500 dark:text-gray-400"> •  February 1, 2022</p>
                </div>

              </div>
            </div>
          </div>
          <hr className='w-full bg-[#f5f5f5] h-[5px] relative top-[50px]' />
          <div class="mt-[5rem] mb-[5rem]">
            <div className="dark:bg-gray-100 dark:text-gray-900">
              <div className="container grid grid-cols-12 mx-auto dark:bg-gray-50">
                <div className="bg-no-repeat bg-cover dark:bg-gray-300 col-span-full lg:col-span-4 bc1"></div>
                <div className="flex flex-col col-span-full row-span-full lg:col-span-8 lg:pt-10 pb-10 pr-10">
                  <div className="flex justify-start">
                    <span className=" py-1 text-4xl rounded-full dark:bg-violet-600 dark:text-gray-50">Label</span>
                  </div>
                  <h1 className="text-4xl mt-2 font-semibold">Lorem ipsum dolor sit.</h1>
                  <p className="flex-1 text-[1.52rem] leading-[2.2rem] text-gray-500 pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, reprehenderit adipisci tempore voluptas laborum quod.</p>
                  <a rel="noopener noreferrer" href="#" className="inline-flex items-center mt-[0.7rem] pt-2 pb-[0.9rem] space-x-2 text-[1.3rem] leading-[0.5rem] dark:text-violet-600">
                    <span>Read more</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex space-x-2">
                      
                      <span className="self-center text-[1.57rem] font-medium leading-[1.5rem]">by Leroy Jenkins</span>
                    </div>
                    <span className="text-[1.25rem] leading-[1rem] text-gray-500">3 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className='w-full bg-[#f5f5f5] h-[5px] relative top-[-40px]' />
          <div class="grid grid-cols-1 gap-[3rem] mb-[4rem] md:grid-cols-2 xl:grid-cols-3">
            <div>
              <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

              <div class="mt-8">
                <span class="text-blue-500 text-[20px] tracking-[1.6px] uppercase">category</span>

                <h1 class="mt-[0.8rem] leading-[1.85rem] text-[1.67rem] font-semibold text-gray-800 dark:text-white">
                  What do you want to know about UI
                </h1>

                <p class="mt-[0.5rem] text-[18px] text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi
                  recusandae nulla veritatis id tempore sapiente
                </p>
                <div class="flex items-center mt-4">
                  <div>
                    <a href="#" class="text-[1.54rem] leading-[1.75rem] tracking-[1px] font-medium text-gray-700 dark:text-gray-300 ">
                      John snow
                    </a>
                  </div>
                  <p class="text-[1.25rem] leading-[1.25rem] relative left-[25px] text-gray-500 dark:text-gray-400"> •  February 1, 2022</p>
                </div>

              </div>
            </div>
            <div>
              <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

              <div class="mt-8">
                <span class="text-blue-500 text-[20px] tracking-[1.6px] uppercase">category</span>

                <h1 class="mt-[0.8rem] leading-[1.85rem] text-[1.67rem] font-semibold text-gray-800 dark:text-white">
                  What do you want to know about UI
                </h1>

                <p class="mt-[0.5rem] text-[18px] text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi
                  recusandae nulla veritatis id tempore sapiente
                </p>
                <div class="flex items-center mt-4">
                  <div>
                    <a href="#" class="text-[1.54rem] leading-[1.75rem] tracking-[1px] font-medium text-gray-700 dark:text-gray-300">
                      John snow
                    </a>
                  </div>
                  <p class="text-[1.25rem] leading-[1.25rem] relative left-[25px] text-gray-500 dark:text-gray-400"> •  February 1, 2022</p>
                </div>

              </div>
            </div>
            <div>
              <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

              <div class="mt-8">
                <span class="text-blue-500 text-[20px] tracking-[1.6px] uppercase">category</span>

                <h1 class="mt-[0.8rem] leading-[1.85rem] text-[1.67rem] font-semibold text-gray-800 dark:text-white">
                  What do you want to know about UI
                </h1>

                <p class="mt-[0.5rem] text-[18px] text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi
                  recusandae nulla veritatis id tempore sapiente
                </p>
                <div class="flex items-center mt-4">
                  <div>
                    <a href="#" class="text-[1.54rem] leading-[1.75rem] tracking-[1px] font-medium text-gray-700 dark:text-gray-300">
                      John snow
                    </a>
                  </div>
                  <p class="text-[1.25rem] leading-[1.25rem] relative left-[25px] text-gray-500 dark:text-gray-400"> •  February 1, 2022</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blogs