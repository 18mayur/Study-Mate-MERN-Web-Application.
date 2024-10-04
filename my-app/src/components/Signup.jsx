import './signup.css'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Signup = () => {
    // const [role, setRole] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/auth/signup', {
            username,
            email,
            password
        }).then(res => {
            console.log(res)
            if (res.data.status) {
                navigate('/login')
            }else{
                alert('User is already existed');
            }
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <div>
            <nav
                class="relative flex w-full items-center justify-between bg-[#DAD9FF] py-3.5 shadow-sm shadow-neutral-700/10 dark:bg-neutral-800 dark:shadow-black/30  lg:flex-wrap lg:justify-start"
                data-te-navbar-ref>

                <div class="flex w-full flex-wrap items-center justify-between px-6">
                    <div class="flex items-center">

                        <button
                            class="block border-0 bg-transparent py-2 pr-2.5 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
                            type="button" data-te-collapse-init data-te-target="#navbarSupportedContentY"
                            aria-controls="navbarSupportedContentY" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="[&>svg]:w-7">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-7 w-7">
                                    <path fill-rule="evenodd"
                                        d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                        clip-rule="evenodd" />
                                </svg>
                            </span>
                        </button>

                        <a class="text-primary dark:text-primary-400 relative left-[4.2rem]" href="#!">
                            <span class="[&>svg]:ml-2 [&>svg]:mr-3 [&>svg]:h-6 [&>svg]:w-6 [&>svg]:lg:ml-0">
                                <img src='images/logobg2.png' className='h-[2.5rem]' />
                            </span>
                        </a>
                    </div>


                    <div class="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
                        id="navbarSupportedContentY" data-te-collapse-item>

                        <ul class="mr-auto lg:flex lg:flex-row relative left-[6.2rem]" data-te-navbar-nav-ref>

                            <li data-te-nav-item-ref>
                                <a class="block py-2 pr-2 text-neutral-500 font-medium transition duration-150 ease-in-out hover:text-neutral-600 focus:text-neutral-600 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 dark:disabled:text-white/30 lg:px-2 [&.active]:text-black/80 dark:[&.active]:text-white/80"
                                    href="#!" data-te-nav-link-ref data-te-ripple-init data-te-ripple-color="light"></a>
                            </li>

                        </ul>

                    </div>

                    <div class="my-1 flex items-center lg:my-0 relative right-[5.2rem] lg:ml-auto">
                        <button type="button"
                            class="mr-2 inline-block rounded px-6 pt-2.5 pb-2 text-xl font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-primary-400 dark:hover:bg-neutral-700 dark:hover:bg-opacity-60 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                            data-te-ripple-init data-te-ripple-color="light">
                            
                        </button>
                        
                    </div>

                </div>

            </nav>
            <div class=" bg-gray-50 flex items-center">
                <section class="bg-cover bg-center py-32 w-full sec1" >
                    <div class="container mx-auto text-left text-white">
                        <div class="flex items-center">
                        <div class="w-1/2">
                                <h1 class="text-[4.2rem] font-medium mb-[0.5rem] relative right-[5rem] top-[-6.8rem]">Welcome to Study-Mate</h1>
                                <p class="text-[1.8rem] leading-10 text-gray-300 relative right-[5rem] top-[-6rem] mb-[0.7]">Login as Student and check out the different features we are providing for Students Or. </p>
                                <h3 className='text-[2.5rem] relative right-[5rem] top-[-6rem] '>Register As A Recuriter.</h3>
                                <p class="text-[1.8rem] leading-10 text-gray-300 relative right-[5rem] top-[-6rem] mb-[0.7]">Create a account as a recruiter and post the job requirements. </p>
                                <Link to='/log2' class="bg-indigo-500 relative top-[-3rem] right-[5rem] text-white py-4 px-12 rounded-full hover:bg-indigo-600">Get Started</Link>
                            </div>
                            <div class="w-1/2 pl-16">
                                <div class=" max-w-[30rem] mx-auto overflow-hidden bg-gray-50 rounded-lg shadow-md dark:bg-gray-800 h-[30rem]">
                                    <div class="px-6 py-4">
                                        <div class="flex justify-center mx-auto">
                                            <img class="w-auto h-[3.7rem] sm:h-[3.7rem]" src="images/logobg2.png" alt="" />
                                        </div>
                                        <p class="mt-1 relative top-[1rem] text-xl text-bold text-center text-gray-500 dark:text-gray-400">Create a student account</p>

                                        <form onSubmit={handleSubmit}>

                                        
                                            <div class="w-full mt-4 relative top-[1.5rem]">
                                                <input class="block h-[50px] w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="text" placeholder="username" aria-label="Email Address" onChange={(e) => setUsername(e.target.value)} />
                                            </div>
                                            <div class="w-full mt-4 relative top-[1.5rem]">
                                                <input class="block h-[50px] w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="email" placeholder="Email Address" aria-label="Email Address" onChange={(e) => setEmail(e.target.value)} />
                                            </div>

                                            <div class="w-full mt-4 relative top-[1.8rem]">
                                                <input class="block h-[50px] w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="password" placeholder="Password" aria-label="Password" onChange={(e) => setPassword(e.target.value)} />
                                            </div>

                                            <div class="flex items-center justify-center mt-[1.2rem] relative top-[2rem]">


                                                <button class="w-full h-[50px] px-6 py-2 text-xl font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                                    Register
                                                </button>
                                            </div>
                                        </form>
                                    </div>

                                    <div class="flex items-center relative top-[2.5rem] justify-center pb-4 text-center bg-gray-50 dark:bg-gray-700">
                                        <span class="text-xl text-gray-600 dark:text-gray-200">Have a account ? </span>

                                        <Link to='/login' className="mx-2 text-xl font-bold text-blue-500 dark:text-blue-400 hover:underline" >Login</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Signup