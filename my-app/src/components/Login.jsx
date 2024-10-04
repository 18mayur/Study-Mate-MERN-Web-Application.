import React from 'react'
import axios, { Axios } from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './login.css'
const Login = () => {
    // const [role, setRole] = useState('')
    // const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    axios.defaults.withCredentials = true;
    const handleSubmit1 = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/auth/login', {
            email,
            password
        }).then(res => {
            console.log(res)
            if (res.data.status) {
                navigate('/')
            }else{
                alert('User Is Not Registered'); 
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
                            {/* <Link to='/Signup'>Register</Link> */}
                        </button>
                        {/* <button type="button"
                                class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                data-te-ripple-init data-te-ripple-color="light">
                                Sign up for free
                            </button> */}
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
                                <Link to='/rec' class="bg-indigo-500 relative top-[-3rem] right-[5rem] text-white py-4 px-12 rounded-full hover:bg-indigo-600">Get Started</Link>
                            </div>
                            <div class="w-1/2 pl-16">
                                <div class=" max-w-[27.5rem] mx-auto overflow-hidden bg-gray-50 rounded-lg shadow-md dark:bg-gray-800 h-[27.5rem]">
                                    <div class="px-6 py-4">
                                        <div class="flex justify-center mx-auto">
                                            <img class="w-auto h-[3.7rem] sm:h-[3.7rem]" src="images/logobg2.png" alt="" />
                                        </div>
                                        <p class="mt-1 relative top-[1rem] text-xl text-bold text-center text-gray-500 dark:text-gray-400">Login as a Student</p>

                                        <form onSubmit={handleSubmit1}>
                                            <div class="w-full mt-4 relative top-[2.5rem]">
                                                <input class="block h-[50px] w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="email" placeholder="Email Address" aria-label="Email Address" onChange={(e) => setEmail(e.target.value)} />
                                            </div>

                                            <div class="w-full mt-4 relative top-[2.8rem]">
                                                <input class="block h-[50px] w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="password" placeholder="Password" aria-label="Password" onChange={(e) => setPassword(e.target.value)} />
                                            </div>

                                            <div class="flex items-center justify-center mt-[1.2rem] relative top-[3rem]">


                                                <button class="w-full h-[50px] px-6 py-2 text-xl font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                                    Login
                                                </button>
                                            </div>
                                        </form>
                                    </div>

                                    <div class="flex items-center relative top-[3.2rem] justify-center pb-4 text-center bg-gray-50 dark:bg-gray-700">
                                        <span class="text-xl text-gray-600 dark:text-gray-200">Don't have an account ? </span>

                                        <Link to='/Signup' className="mx-2 text-xl font-bold text-blue-500 dark:text-blue-400 hover:underline" >Sign Up</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/* <div class="w-full mt-[10rem] max-w-sm mx-auto overflow-hidden bg-blue rounded-lg shadow-md dark:bg-gray-800">
                <div class="px-6 py-4">
                    <div class="flex justify-center mx-auto">
                        <img class="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt="" />
                    </div>

                    <h3 class="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Welcome Back</h3>

                    <p class="mt-1 text-center text-gray-500 dark:text-gray-400">Login or create account</p>

                    <form onSubmit={handleSubmit1}>
                        <div class="w-full mt-4">
                            <input class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="email" placeholder="Email Address" aria-label="Email Address" onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div class="w-full mt-4">
                            <input class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="password" placeholder="Password" aria-label="Password" onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <div class="flex items-center justify-center mt-6">


                            <button class="w-full px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                Login
                            </button>
                        </div>
                    </form>
                </div>

                <div class="flex items-center justify-center pb-4 text-center bg-gray-50 dark:bg-gray-700">
                    <span class="text-xl text-gray-600 dark:text-gray-200">Don't have an account? </span>

                    <Link to='/Signup' className="mx-2 text-xl font-bold text-blue-500 dark:text-blue-400 hover:underline" >Sign Up</Link>
                </div>
            </div> */}
            {/* <section class="bg-white dark:bg-gray-900">
                <div class="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row">
                    <div class="flex justify-center xl:w-1/2">
                        <img class="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover rounded-full" src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt=""/>
                    </div>

                    <div class="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
                        <h2 class="text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
                            Register As A Recruiter 
                        </h2>

                        <p class="block max-w-2xl mt-4 text-gray-500 dark:text-gray-300">Create a account as a recruiter and post the job requirements. </p>

                        <div class="mt-6 sm:-mx-2">
                            <a href="#" class="inline-flex items-center justify-center w-full px-4 text-sm py-2.5 overflow-hidden text-white transition-colors duration-300 bg-gray-900 rounded-lg shadow sm:w-auto sm:mx-2 hover:bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                                <svg class="w-5 h-5 mx-2 fill-current" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve">
                                    <g>
                                        <g>
                                            <path d="M407,0H105C47.103,0,0,47.103,0,105v302c0,57.897,47.103,105,105,105h302c57.897,0,105-47.103,105-105V105C512,47.103,464.897,0,407,0z M482,407c0,41.355-33.645,75-75,75H105c-41.355,0-75-33.645-75-75V105c0-41.355,33.645-75,75-75h302c41.355,0,75,33.645,75,75V407z"></path>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M305.646,123.531c-1.729-6.45-5.865-11.842-11.648-15.18c-11.936-6.892-27.256-2.789-34.15,9.151L256,124.166l-3.848-6.665c-6.893-11.937-22.212-16.042-34.15-9.151h-0.001c-11.938,6.893-16.042,22.212-9.15,34.151l18.281,31.664L159.678,291H110.5c-13.785,0-25,11.215-25,25c0,13.785,11.215,25,25,25h189.86l-28.868-50h-54.079l85.735-148.498C306.487,136.719,307.375,129.981,305.646,123.531z"></path>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M401.5,291h-49.178l-55.907-96.834l-28.867,50l86.804,150.348c3.339,5.784,8.729,9.921,15.181,11.65c2.154,0.577,4.339,0.863,6.511,0.863c4.332,0,8.608-1.136,12.461-3.361c11.938-6.893,16.042-22.213,9.149-34.15L381.189,341H401.5c13.785,0,25-11.215,25-25C426.5,302.215,415.285,291,401.5,291z"></path>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M119.264,361l-4.917,8.516c-6.892,11.938-2.787,27.258,9.151,34.15c3.927,2.267,8.219,3.345,12.458,3.344c8.646,0,17.067-4.484,21.693-12.495L176.999,361H119.264z"></path>
                                        </g>
                                    </g>
                                </svg>

                                <span class="mx-2">
                                    Get it on the App Store
                                </span>
                            </a>

                            <a href="#"
                                class="inline-flex items-center justify-center w-full px-4 text-sm py-2.5 mt-4 overflow-hidden text-white transition-colors duration-300 bg-blue-600 rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0 hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                                <svg class="w-5 h-5 mx-2 fill-current" viewBox="-28 0 512 512.00075" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m432.320312 215.121094-361.515624-208.722656c-14.777344-8.53125-32.421876-8.53125-47.203126 0-.121093.070312-.230468.148437-.351562.21875-.210938.125-.421875.253906-.628906.390624-14.175782 8.636719-22.621094 23.59375-22.621094 40.269532v417.445312c0 17.066406 8.824219 32.347656 23.601562 40.878906 7.390626 4.265626 15.496094 6.398438 23.601563 6.398438s16.214844-2.132812 23.601563-6.398438l361.519531-208.722656c14.777343-8.53125 23.601562-23.8125 23.601562-40.878906s-8.824219-32.347656-23.605469-40.878906zm-401.941406 253.152344c-.21875-1.097657-.351562-2.273438-.351562-3.550782v-417.445312c0-2.246094.378906-4.203125.984375-5.90625l204.324219 213.121094zm43.824219-425.242188 234.21875 135.226562-52.285156 54.539063zm-6.480469 429.679688 188.410156-196.527344 54.152344 56.484375zm349.585938-201.835938-80.25 46.332031-60.125-62.714843 58.261718-60.773438 82.113282 47.40625c7.75 4.476562 8.589844 11.894531 8.589844 14.875s-.839844 10.398438-8.589844 14.875zm0 0">
                                    </path>
                                </svg>

                                <span class="mx-2">
                                    Get it on Google Play
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* <section class="bg-gray-100 dark:bg-gray-800 lg:py-12 lg:flex lg:justify-center">
    <div
        class="overflow-hidden bg-white dark:bg-gray-900 lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl">
        <div class="lg:w-1/2">
            <div class="h-64 bg-cover lg:h-full">
                <img src='https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'/>
            </div>
        </div>

        <div class="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
            <h2 class="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            Register As A <span class="text-blue-500">Recruiter </span>
            </h2>

            <p class="mt-4 text-gray-500 dark:text-gray-300">
            Create a account as a recruiter and post the job requirements. 
            </p>

            <div class="inline-flex w-full mt-6 sm:w-auto">
                <a href="#" class="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                    Start Now
                </a>
            </div>
        </div>
    </div>
</section> */}
            {/* <section
                className="overflow-hidden bg-[url(https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80)] bg-cover bg-top bg-no-repeat"
            >
                <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
                    <div className="text-center ltr:sm:text-left rtl:sm:text-right">
                        <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">Register As A Recruiter </h2>

                        <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore officia corporis quasi
                            doloribus iure architecto quae voluptatum beatae excepturi dolores.
                        </p>

                        <div className="mt-4 sm:mt-8">
                            <a
                                href="#"
                                className="inline-block rounded-full bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                            >
                                Get Started
                            </a>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                        <div className="flex flex-col"><h1 class="flex-grow sm:pr-16 text-4xl font-medium title-font text-gray-900">Register As A Recuriter.</h1>
                        <p className='max-w-2xl mt-4 text-gray-500 dark:text-gray-300'>Create a account as a recruiter and post the job requirements</p>
                        </div>
                        <button class="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">Get Started</button>
                    </div>
                </div>
            </section> */}
        </div>
    )
}

export default Login
// import React from 'react'

// const Login = () => {
//   return (
//     <div>Login</div>
//   )
// }

// export default Login