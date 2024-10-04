import React, { useEffect } from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faBriefcaseMedical, } from '@fortawesome/free-solid-svg-icons'
import { Carousel } from "flowbite-react";
import "./Home.css";    
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios'
import Navigation from '../components/navigation';
import Footer from '../components/Footer';
const Home = () => {
    // const [email, setemail] = useState("");
    const navigate = useNavigate();
    const [Auth, setAuth] = useState(false);
    axios.defaults.withCredentials = true;
    useEffect(()=>{
        axios.get('http://localhost:3000/auth/verify')
        .then(res=>{
            if(res.data.status){
                setAuth(true)
            }else{
                setAuth(false)
                navigate('/login')
            }
        })
    },[]);
    // const submitData = async(e)=>{
    //     e.preventDefault();
    //     try {
    //         alert("Submitted");
    //         await axios.post('http://localhost:4000/',{
    //             email
    //         })
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
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
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                <Carousel className='h-[180%] rounded-none' slideInterval={3000}>
                    <img className="top-[40%]" src=" /images/study.jpg " alt="..." />
                    <img className="top-[40%]" src="images/study1.jpg" alt="..." />
                    <img className="top-[40%]" src="images/study2.jpg" alt="..." />
                </Carousel>

            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <section class="mt-16 bg-white dark:bg-gray-900">
                <div class="container px-6 pt-14 mx-auto">
                    <div class="lg:flex lg:items-center">
                        <div class="w-full space-y-12 lg:w-1/2 ">
                            <div>
                                <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">explore our <br /> awesome Components</h1>

                                <div class="mt-2">
                                    <span class="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                                    <span class="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
                                    <span class="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
                                </div>
                            </div>

                            <div class="md:flex md:items-start md:-mx-4">
                                <span class="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                    </svg>
                                </span>

                                <div class="mt-4 md:mx-4 md:mt-0">
                                    <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Online Tools For Students</h1>

                                    <p class="mt-2.5 text-xl text-gray-700 dark:text-gray-300">
                                        Online Tools Such as I-Love-PDF,Google Scholar, Good Notes, Power Planner etc.These Tools Help Students And Save There Time.
                                    </p>
                                </div>
                            </div>

                            <div class="md:flex md:items-start md:-mx-4">
                                <span class="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                    </svg>
                                </span>

                                <div class="mt-4 md:mx-4 md:mt-0">
                                    <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Student Loan Calculator</h1>

                                    <p class="mt-2.5 text-xl text-gray-700 dark:text-gray-300">
                                        Education Loan EMI calculator is an online instrument that assists the loan-borrower with the calculation of the amount that they need to pay every month after borrowing an educational loan.
                                    </p>
                                </div>
                            </div>

                            <div class="md:flex md:items-start md:-mx-4">
                                <span class="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                                    </svg>
                                </span>

                                <div class="mt-4 md:mx-4 md:mt-0">
                                    <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">YouTube Video Tutorials</h1>

                                    <p class="mt-2.5 text-xl text-gray-700 dark:text-gray-300">
                                        Best Programming Related Subject YouTube video Tutorials For Students Those whos New to the Programming Subjects And Helping to Bulid the Logic.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
                            <img class="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] rounded-full" src="images/bx.jpg" alt="" />
                        </div>
                    </div>

                    <hr class="my-12 border-b-4 dark:border-gray-700" />

                </div>
            </section>
            <section class=" bg-indigo-50 border-y border-indigo-100">
                    <div class="container flex flex-col items-center px-4 pt-9 pb-7 mx-auto text-center">
                        <h2 class="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-4xl ">
                            Top 10 Most Usefull websites <span class="text-blue-500">For Students.</span>
                        </h2>
                        <p class="max-w-4xl mt-6 text-2xl text-center text-gray-500 ">
                            To Help In There Academic.
                        </p>
                    </div>
                </section>
            <div className="cont1">
                <section class="text-gray-600 body-font">
                    <div class="container  py-2 pt-10 mx-auto">
                        <div class="box1 flex items-center lg:w-5/6 mx-auto border-b-4 pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                            <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full text-indigo-500 flex-shrink-0">
                                <img src="images/go-conqr.jpeg" className='img1 ' alt="" />
                            </div>
                            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                <a href='https://www.goconqr.com/' target='_blank'><h2 class="h21 text-[#297195] hover:underline underline-offset-2 text-5xl title-font font-medium my-6">1. GoConqr</h2></a>
                                <p class="para leading-relaxed ">Visual learners, rejoice. What makes this site unique are the mind maps, a web of information that breaks down broad subjects into smaller topics. This helps with both memorization and understanding.<br />
                                    <br />
                                    The site also has numerous other helpful features like flashcards, a note-taking platform, self-created quizzes, study planner, a collaboration tool, and a way to track how much you’re learning.</p>
                                <a class="mt-3 text-indigo-500 inline-flex items-center text-xl">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div class="flex items-center lg:w-5/6 mx-auto border-b-4 pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                <a href='https://quizlet.com/' target='_blank'><h2 class=" h21 text-[#297195] hover:underline underline-offset-2 text-5xl title-font font-medium my-6">2. Quizlet</h2></a>
                                <p class="para2 leading-relaxed ">With this site, you provide the information and Quizlet provides the study tools. Users can create “sets” in any subject under the sun. Based on the set, the website will generate flashcards, quizzes, practice tests, matching games, and even auditory tools. Quizlet also has a free app for learning on the go and studying even offline.<br />
                                    <br />
                                    In Scatter, users drag definitions or information to their related counterparts as quickly as they can, clearing the screen.</p>
                                <a class="mt-3 text-indigo-500 inline-flex text-2xl items-center">Learn More
                                </a>
                            </div>
                            <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full text-indigo-500 flex-shrink-0">
                                <img src="images/Quiz.png" className='img2 ' alt="" />
                            </div>
                        </div>

                        <div class="flex items-center lg:w-5/6 mx-auto border-b-4 pb-10 mb-10 border-gray-200  sm:flex-row flex-col">
                            <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full  text-indigo-500 flex-shrink-0">
                                <img src="images/Evernote-512.webp" className='img1' alt="" />
                            </div>
                            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                <a href='https://evernote.com/' target='_blank'><h2 class=" text-[#297195] hover:underline underline-offset-2  text-5xl title-font font-medium my-6">3. Evernote</h2></a>
                                <p class="para leading-relaxed ">Studying can sometimes cover several different platforms, but with Evernote, all of your notes, information, and research can be together in one place. An invaluable organizational tool, this site can sync your info across computers and phones, share with other users, gather web-clips, and create all from one central platform.<br />
                                    Evernote can be used in a multitude of ways: keeping research paper information in order, organizing presentation notes, creating study guides off of in-class note-taking, not to mention everyday non-school related tasks, too.</p>
                                <a class="mt-3 text-indigo-500 inline-flex text-xl items-center">Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="text-gray-600 body-font">
                    <div class="container px-5  mx-auto">
                        <div class="flex items-center lg:w-5/6 mx-auto border-b-4 pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                <a href='https://www.shiksha.com/' target='_blank'> <h2 class="text-[#297195] hover:underline underline-offset-2 text-5xl title-font font-medium my-6">4. Shiksha</h2></a>
                                <p class="para2 leading-relaxed ">Shiksha enables students to make a well- informed decision before taking admission in a college with the help of products like 1.55 lakh+ authentic college reviews, expert videos, courses and placements information, alumni salary data, college comparison, rank & college predictors, 6.5 lakh+ questions & answers.</p>
                                <a class="mt-3 text-indigo-500 inline-flex text-xl items-center">Learn More
                                </a>
                            </div>
                            <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full  text-indigo-500 flex-shrink-0">
                                <img src="images/pngwing.com.png" className='img2' alt="" />
                            </div>
                        </div>
                        <div class="flex items-center lg:w-5/6 mx-auto border-b-4 pb-10 mb-10 border-gray-200  sm:flex-row flex-col">
                            <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full  text-indigo-500 flex-shrink-0">
                                <img src="images/ud.png" className='img3' alt="" />
                            </div>
                            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                <a href='https://www.udemy.com/' target='_blank'><h2 class=" text-[#297195] hover:underline underline-offset-2 text-5xl title-font font-medium my-6">5.Udemy</h2></a>
                                <p class="para leading-relaxed ">Udemy is an online learning platform that provides users with access to thousands of different courses. It is a great resource for those looking to expand their knowledge or learn new skills. Students take courses primarily to improve job-related skills. Some courses generate credit toward technical certification<br /></p>
                                <a class="mt-3 text-indigo-500 inline-flex text-xl items-center">Learn More
                                </a>
                            </div>
                        </div>

                        <div class="flex items-center lg:w-5/6 mx-auto border-b-4 pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                <a href='https://www.coursera.org/' target='_blank'><h2 class="text-[#297195] hover:underline underline-offset-2 text-5xl title-font font-medium my-6">6. Coursera</h2></a>
                                <p class="para2 leading-relaxed ">Coursera is the global online learning platform that offers anyone, anywhere access to online courses and degrees from world-class universities and companies. Coursera partners with prestigious universities, offering learners access to renowned educators and cutting-edge research.</p>
                                <a class="mt-3 text-indigo-500 inline-flex text-xl items-center">Learn More
                                </a>
                            </div>
                            <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full text-indigo-500 flex-shrink-0">
                                <img src="images/coursera.png" className='img2' alt="" />
                            </div>
                        </div>

                        <div class="flex items-center lg:w-5/6 mx-auto border-b-4 pb-10 mb-10 border-gray-200  sm:flex-row flex-col">
                            <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full  text-indigo-500 flex-shrink-0">
                                <img src="images/grammarly.png" className='img1' alt="" />
                            </div>
                            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                <a href='https://www.grammarly.com/' target='_blank'><h2 class=" text-[#297195] hover:underline underline-offset-2 text-5xl title-font font-medium my-6">7. Grammarly</h2></a>
                                <p class="para leading-relaxed ">Part of doing work in college is ensuring your grammar and spelling are correct. If your writing can do with a bit of assistance, Grammarly can help make sure that your studying and resulting work are correct.
                                    <br />
                                    Grammarly uses generative AI to help you write, rewrite, ideate, and reply with simple prompts or even at the click of a button.</p>
                                <a class="mt-3 text-indigo-500 inline-flex text-xl items-center">Learn More
                                </a>
                            </div>
                        </div>

                        <div class="flex items-center lg:w-5/6 mx-auto border-b-4 pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                <a href='https://www.khanacademy.org/' target='_blank'><h2 class="text-[#297195] hover:underline underline-offset-2 text-5xl title-font font-medium my-6">8. Khan Academy</h2></a>
                                <p class="para2 leading-relaxed ">Khan Academy is another amazing option for those who want to study and learn more outside the classroom. This free resource presents you with class options tailored to your education level and interests. You can find information on basic geometry, electrical engineering, organic chemistry, microeconomics, personal finance, and more.</p>
                                <a class="mt-3 text-indigo-500 inline-flex text-xl items-center">Learn More
                                </a>
                            </div>
                            <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full text-indigo-500 flex-shrink-0">
                                <img src="images/khan-acde.jpg" className='img4' alt="" />
                            </div>
                        </div>

                        <div class="flex items-center lg:w-5/6 mx-auto border-b-4 pb-10 mb-10 border-gray-200  sm:flex-row flex-col">
                            <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full  text-indigo-500 flex-shrink-0">
                                <img src="images/Schooltraq.png" className='img1' alt="" />
                            </div>
                            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                <a href='https://schooltraq.com/' target='_blank'> <h2 class=" text-[#297195] hover:underline underline-offset-2 text-5xl title-font font-medium my-6">9. Schooltraq</h2></a>
                                <p class="para leading-relaxed ">Schooltraq tracks your assignments and courses and lets you know which ones you should do first based on their importance and due date. If an assignment is overdue, Schooltraq will make it clear to you. It's built to be simple to understand and flexible for your own use.
                                </p>
                                <a class="mt-3 text-indigo-500 inline-flex text-xl items-center">Learn More
                                </a>
                            </div>
                        </div>

                        <div class="flex items-center lg:w-5/6 mx-auto  pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                <a href='https://www.duolingo.com/' target='_blank'> <h2 class="text-[#297195] hover:underline underline-offset-2 text-5xl title-font font-medium my-6">10. Duolingo</h2></a>
                                <p class="para2 leading-relaxed ">Duolingo is a great resource if you need a bit of extra help practicing a foreign language! There is a free version which is perfect for getting started with a new language and is plenty for most students. Available on a browser and as an app, the program tracks your progress as you learn new words, practice pronunciation, and study vocabulary.</p>
                                <a class="mt-3 text-indigo-500 inline-flex text-xl items-center">Learn More
                                </a>
                            </div>
                            <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full text-indigo-500 flex-shrink-0">
                                <img src="images/duolingo.png" className='img2' alt="" />
                            </div>
                        </div>
                        {/* <button class="flex mx-auto mt-20 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button> */}
                    </div>
                </section>
            </div>
            <hr className='w-full bg-[#f5f5f5] h-[5px]' />
            <section>
                <div class="max-w-full px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div class="grid justify-items-center align-items-center grid-cols-1 gap-y-8  lg:grid-cols-2 lg:items-center ">
                        <div class="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
                            <h2 class="text-3xl font-bold sm:text-4xl">Find your career path</h2>

                            <p class="mt-4 text-gray-600">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero aliquid sint distinctio
                                iure ipsum cupiditate? Quis, odit assumenda? Deleniti quasi inventore, libero reiciendis
                                minima aliquid tempora. Obcaecati, autem.
                            </p>

                            <Link
                                to='/Careerfinder' onClick={scrollToTop}
                                class="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                            >
                                Get Started 
                            </Link>
                        </div>

                        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
                            <a
                                class="block rounded-xl border border-gray-200 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                                href="#"
                            >
                                <span class="inline-block  rounded-lg bg-gray-50 p-3">
                                    <div className="font">
                                        {/* <img src="images/virtual-lab.png" alt="" /> */}
                                        <FontAwesomeIcon icon={faLaptopCode} />
                                    </div>
                                </span>

                                <h2 class="mt-2 font-bold">Accountant</h2>

                                <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur.
                                </p>
                            </a>

                            <a
                                class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                                href="#"
                            >
                                <span class="inline-block text-xl rounded-lg bg-gray-50 p-3">
                                    <div className="font">
                                        <FontAwesomeIcon icon={faBriefcaseMedical} />
                                    </div>
                                </span>

                                <h2 class="mt-2 font-bold">Accountant</h2>

                                <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur.
                                </p>
                            </a>

                            <a
                                class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                                href="#"
                            >
                                <span class="inline-block rounded-lg bg-gray-50 p-3">
                                    <svg
                                        class="h-6 w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                        <path
                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                        ></path>
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                        ></path>
                                    </svg>
                                </span>

                                <h2 class="mt-2 font-bold">Accountant</h2>

                                <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur.
                                </p>
                            </a>

                            <a
                                class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                                href="#"
                            >
                                <span class="inline-block rounded-lg bg-gray-50 p-3">
                                    <svg
                                        class="h-6 w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                        <path
                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                        ></path>
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                        ></path>
                                    </svg>
                                </span>

                                <h2 class="mt-2 font-bold">Accountant</h2>

                                <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur.
                                </p>
                            </a>

                            <a
                                class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                                href="#"
                            >
                                <span class="inline-block rounded-lg bg-gray-50 p-3">
                                    <svg
                                        class="h-6 w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                        <path
                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                        ></path>
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                        ></path>
                                    </svg>
                                </span>

                                <h2 class="mt-2 font-bold">Accountant</h2>

                                <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur.
                                </p>
                            </a>

                            <a
                                class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                                href="#"
                            >
                                <span class="inline-block rounded-lg bg-gray-50 p-3">
                                    <svg
                                        class="h-6 w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                        <path
                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                        ></path>
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                        ></path>
                                    </svg>
                                </span>

                                <h2 class="mt-2 font-bold">Accountant</h2>

                                <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur.
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <hr className='w-full bg-[#f5f5f5] h-[5px]' />
            {/* <section class="bg-white dark:bg-gray-900">
                <div class="container px-4 py-16 mx-auto lg:flex lg:items-center lg:justify-evenly">
                    <h2 class="text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
                        Get the update of latest uploaded quetion papers and notes  
                    </h2>
                    
                    <div class="mt-8 lg:mt-0">
                        <div class="flex flex-col w-[450px] space-y-3 sm:space-y-0 sm:flex-row sm:-mx-2">
                            <form action='POST' className='flex w-[100%]'>
                            <input id="email" type="text" class="px-4 py-2 w-[100%] h-[50px] text-gray-700 bg-white border border-gray-200 rounded-lg sm:mx-2 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email Address" value={email} onChange={(e)=> setemail(e.target.value)} />

                            <button class="px-6 py-2 w-[30%] text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg focus:ring focus:ring-blue-300 focus:ring-opacity-80 fo sm:mx-2 hover:bg-blue-500 focus:outline-none focus:bg-blue-500" onClick={submitData} >
                                Notify
                            </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* <Footer/> */}
        </div >
    )
}

export default Home