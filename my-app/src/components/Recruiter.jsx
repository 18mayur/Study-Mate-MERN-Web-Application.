import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Recruiter = () => {
    // const [role, setRole] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/auth/signup1', {
            username,
            email,
            password
        }).then(res => {
            console.log(res)
            if (res.data.status) {
                navigate('/log2')
            }else{
                alert('User is already existed');
            }
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <div>
            
            <section class="mb-40 overflow-hidden">
                <div
                    class="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] h-[890px] bg-[url('https://tecdn.b-cdn.net/img/new/standard/city/078.jpg')]">
                    <div
                        class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.75)]">
                        <div class="flex h-full items-center justify-center">
                            <div class="w-1/2 pl-16">
                                <div class=" max-w-[30rem] mx-auto overflow-hidden bg-gray-50 rounded-lg shadow-md dark:bg-gray-800 h-[30rem]">
                                    <div class="px-6 py-4">
                                        <div class="flex justify-center mx-auto">
                                            <img class="w-auto h-[3.7rem] sm:h-[3.7rem]" src="images/logobg2.png" alt="" />
                                        </div>
                                        <p class="mt-1 relative top-[1rem] text-xl text-bold text-center text-gray-500 dark:text-gray-400">Create a Recruiter account</p>

                                        <form onSubmit={handleSubmit}>

                                        <div class="w-full mt-4 relative top-[1.5rem]">
                                                <input class="block h-[50px] w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="text" placeholder="Username" aria-label="Email Address" onChange={(e) => setUsername(e.target.value)} />
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

                                        <Link to='/log2' className="mx-2 text-xl font-bold text-blue-500 dark:text-blue-400 hover:underline" >Login</Link>
                                    </div>
                                </div>
                                <h1 className='text-3xl text-white relative top-[3rem] left-[20rem]'>Back to Student Login 
                                </h1>
                                <Link to='/login' class="bg-indigo-500 relative top-[1.5rem] left-[39rem] text-white py-4 px-8 rounded-full hover:bg-indigo-600">Student</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="-mt-2.5 text-white dark:text-neutral-800 md:-mt-4 lg:-mt-6 xl:-mt-10 h-[50px] scale-[2] origin-[top_center]">
                    <svg viewBox="0 0 2880 48" xmlns="http://www.w3.org/2000/svg">
                        <path d="M 0 48 L 1437.5 48 L 2880 48 L 2880 0 L 2160 0 C 1453.324 60.118 726.013 4.51 720 0 L 0 0 L 0 48 Z"
                            fill="currentColor"></path>
                    </svg>
                </div>
                
            </section>
        </div>
    )
}

export default Recruiter