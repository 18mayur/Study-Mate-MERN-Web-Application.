import React from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

import './Navigation.css'

import axios from 'axios'
import { useNavigate } from 'react-router-dom'
// import Pharmacy from '../pages/Pharmacy'
const products = [
    { name: 'Tools', href: '#', icon: ChartPieIcon },
    { name: 'Engagement', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Security', href: '#', icon: FingerPrintIcon },

]
const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


// const [message, setMessage] = useState('')
const Navigation = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const scrollToTop = () =>{
        window.scrollTo({
            top:0 ,
            behavior: 'smooth'
        });
    };
    const navigate = useNavigate();
    const handleLogout = ()=>{
        axios.get('http://localhost:3000/auth/logout')
        .then(res => {
            // location.reload(true);
            if(res.data.status){
                navigate('/')
            }
        }).catch(err => console.log(err));
    }
    return (
        <div>
            {/* <Router> */}
                <header className=" relative bg-[#D9DAFF] shadow-2xl backdrop-blur z-10 backdrop-opacity-20 backdrop-invert ">
                    <nav className=" h-[5.5rem] mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 text-xs" aria-label="Global">
                        <div className="flex lg:flex-1 relative left-[-75px]">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img className=" img12 h-[80px]" src="images/logo3.jpg" alt="" />
                            </a>
                        </div>
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <span className="sr-only">DFE0DFOpen main menu</span>
                                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <Popover.Group className="hidden lg:flex lg:gap-x-20">
                           
                            <Link to="/home" onClick={scrollToTop} className="relative top-[10px] text-xl font-bold leading-6 text-gray-900">
                                Home
                            </Link>
                            <div class="mx-auto flex w-full items-center justify-center">
                                <div class="group relative cursor-pointer ">

                                    <div class="flex items-center justify-between space-x-5  px-4">
                                        <a class="menu-hover  text-base  text-xl font-bold text-black "  onClick={scrollToTop}>
                                            For Students
                                        </a>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                                stroke="currentColor" class="h-6 w-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                            </svg>
                                        </span>
                                    </div>

                                    <div
                                        class="invisible absolute rounded-3xl z-50 flex w-screen max-w-xs flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">

                                        <Link to='/Tools'  onClick={scrollToTop} class="my-2 block border-b border-gray-100 py-1 text-xl  font-semibold text-gray-600 hover:text-black md:mx-2">
                                            Online Tools
                                        </Link>

                                        <Link to='/Careerfinder'  onClick={scrollToTop} class="my-2 block border-b border-gray-100 py-1 font-semibold text-xl text-gray-600 hover:text-black md:mx-2">
                                            Career Finder
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div class="mx-auto flex items-center justify-center">
                                <div class="group relative cursor-pointer ">

                                    <div class="flex items-center justify-between space-x-5  px-4">
                                        <a class="menu-hover  text-base  text-xl font-bold text-black "  onClick={scrollToTop}>
                                            Resources
                                        </a>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                                stroke="currentColor" class="h-6 w-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                            </svg>
                                        </span>
                                    </div>

                                    <div
                                        class="invisible absolute rounded-3xl z-50 flex w-screen max-w-xs flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">

                                        <Link to="/Field" onClick={scrollToTop}  class="my-2 block border-b border-gray-100 py-1 text-xl  font-semibold text-gray-600 hover:text-black md:mx-2">
                                            Fields
                                        </Link>
                                        <Link to="/Blogs"  onClick={scrollToTop} class="my-2 block border-b border-gray-100 py-1 text-xl  font-semibold text-gray-600 hover:text-black md:mx-2">
                                            Blogs
                                        </Link>
                                    
                                    </div>
                                </div>
                            </div>

                            <Link to="/stud" onClick={scrollToTop} className=" relative top-[10px] text-xl font-bold leading-6 text-gray-900">
                                Job
                            </Link>
                            <Link to="/About" onClick={scrollToTop} className=" relative top-[10px] text-xl font-bold leading-6 text-gray-900">
                                About
                            </Link>
                            
                            <button className='button18 ' onClick={handleLogout}>Logout</button>
                        </Popover.Group>
                        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                            <a href="#" className="text-xl font-bold leading-6 text-gray-900">
                               <span aria-hidden="true"></span>
                            </a>
                        </div>
                    </nav>
                    <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                        <div className="fixed inset-0 z-10" />
                        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                            <div className="flex items-center justify-between">
                                <a href="#" className="-m-1.5 p-1.5">
                                    <span className="sr-only">Your Company</span>
                                    <img
                                        className="h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                        alt=""
                                    />
                                </a>
                                <button
                                    type="button"
                                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    <div className="space-y-2 py-6">
                                    <Link to="/About" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                    About
                                                </Link>
                                        <Disclosure as="div" className="-mx-3">
                                            {({ open }) => (
                                                <>
                                                    <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                        Product
                                                        <ChevronDownIcon
                                                            className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                            aria-hidden="true"
                                                        />
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel className="mt-2 space-y-2">
                                                        {[...products, ...callsToAction].map((item) => (
                                                            <Disclosure.Button
                                                                key={item.name}
                                                                as="a"
                                                                href={item.href}
                                                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                            >
                                                                {item.name}
                                                            </Disclosure.Button>
                                                        ))}
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                        <a
                                            href="#"
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            Features
                                        </a>
                                        <a
                                            href="#"
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            Marketplace
                                        </a>
                                        <Link to="/About" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                            About
                                        </Link>
                                    </div>
                                    <div className="py-6 ">
                                        <a
                                            href="#"
                                            className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            Log in
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Dialog.Panel>
                    </Dialog>
                </header>
        </div>
    )
}

export default Navigation