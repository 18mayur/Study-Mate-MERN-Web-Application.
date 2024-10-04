import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import './addjob.css'
const Addjob = () => {
  // document.getElementById('button').addEventListener('click', toggleError)
  // const errMessages = document.querySelectorAll('#error')

  // const toggleError =(e) => {
  //   // Show error message
  //   errMessages.forEach((el) => {
  //     el.classList.toggle('hidden')
  //   })

  //   // Highlight input and label with red
  //   const allBorders = document.querySelectorAll('.border-gray-200')
  //   const allTexts = document.querySelectorAll('.text-gray-500')
  //   allBorders.forEach((el) => {
  //     el.classList.toggle('border-red-600')
  //   })
  //   allTexts.forEach((el) => {
  //     el.classList.toggle('text-red-600')
  //   })
  // }
  const [title, setTitle] = useState()
  const [company, setCompany] = useState()
  const [type, setType] = useState()
  const [deadline, setDeadline] = useState()
  const [email, setEmail] = useState()
  const [salary, setSalary] = useState()
  const [skills, setSkills] = useState()
  const navigate = useNavigate();
  const Submit =(e) =>{
    e.preventDefault();
    axios.post("http://localhost:3000/addJob",{title,company,email,type,salary,skills,deadline})
    .then(result => {
      console.log(result)
      navigate('/jobs')
     })
    
    .catch(err => console.log(err))
  }
  return (
    <div>

      {/* <div class="min-h-screen bg-gray-100 p-0 sm:p-12">
        <div class="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
          <h1 class="text-2xl font-bold mb-8">Form With Floating Labels</h1>
          <form id="form" novalidate>
            <div class="relative z-0 w-full mb-5">
              <input
                type="text"
                name="name"
                placeholder=" "
                required
                class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Enter name</label>
              <span class="text-sm text-red-600 hidden" id="error">Name is required</span>
            </div>

            <div class="relative z-0 w-full mb-5">
              <input
                type="email"
                name="email"
                placeholder=" "
                class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <label for="email" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Enter email address</label>
              <span class="text-sm text-red-600 hidden" id="error">Email address is required</span>
            </div>

            <div class="relative z-0 w-full mb-5">
              <input
                type="password"
                name="password"
                placeholder=" "
                class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <label for="password" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Enter password</label>
              <span class="text-sm text-red-600 hidden" id="error">Password is required</span>
            </div>

            <fieldset class="relative z-0 w-full p-px mb-5">
              <legend class="absolute text-gray-500 transform scale-75 -top-3 origin-0">Choose an option</legend>
              <div class="block pt-3 pb-2 space-x-4">
                <label>
                  <input
                    type="radio"
                    name="radio"
                    value="1"
                    class="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                  />
                  Option 1
                </label>
                <label>
                  <input
                    type="radio"
                    name="radio"
                    value="2"
                    class="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                  />
                  Option 2
                </label>
              </div>
              <span class="text-sm text-red-600 hidden" id="error">Option has to be selected</span>
            </fieldset>

            <div class="relative z-0 w-full mb-5">
              <select
                name="select"
                value=""
                onclick="this.setAttribute('value', this.value);"
                class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              >
                <option value="" selected disabled hidden></option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
                <option value="4">Option 4</option>
                <option value="5">Option 5</option>
              </select>
              <label for="select" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Select an option</label>
              <span class="text-sm text-red-600 hidden" id="error">Option has to be selected</span>
            </div>

            <div class="flex flex-row space-x-4">
              <div class="relative z-0 w-full mb-5">
                <input
                  type="text"
                  name="date"
                  placeholder=" "
                  onclick="this.setAttribute('type', 'date');"
                  class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                />
                <label for="date" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Date</label>
                <span class="text-sm text-red-600 hidden" id="error">Date is required</span>
              </div>
              <div class="relative z-0 w-full">
                <input
                  type="text"
                  name="time"
                  placeholder=" "
                  onclick="this.setAttribute('type', 'time');"
                  class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                />
                <label for="time" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Time</label>
                <span class="text-sm text-red-600 hidden" id="error">Time is required</span>
              </div>
            </div>

            <div class="relative z-0 w-full mb-5">
              <input
                type="number"
                name="money"
                placeholder=" "
                class="pt-3 pb-2 pl-5 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <div class="absolute top-0 left-0 mt-3 ml-1 text-gray-400">$</div>
              <label for="money" class="absolute duration-300 top-3 left-5 -z-1 origin-0 text-gray-500">Amount</label>
              <span class="text-sm text-red-600 hidden" id="error">Amount is required</span>
            </div>

            <div class="relative z-0 w-full mb-5">
              <input
                type="text"
                name="duration"
                placeholder=" "
                class="pt-3 pb-2 pr-12 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <div class="absolute top-0 right-0 mt-3 mr-4 text-gray-400">min</div>
              <label for="duration" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Duration</label>
              <span class="text-sm text-red-600 hidden" id="error">Duration is required</span>
            </div>

            <button
              id="button"
              type="button"
              class="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none"
            >
              Toggle Error
            </button>
          </form>
        </div>
      </div> */}
      {/* <div class="w-full md:w-96 md:max-w-full mx-auto">
        <div class="p-6 border border-gray-300 sm:rounded-md">
          <form method="POST" action="https://herotofu.com/start">
            <label class="block mb-6">
              <span class="text-gray-700">Email address</span>
              <input
                name="email"
                type="email"
                class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="joe.bloggs@example.com"
                required
              />
            </label>
            <label class="block mb-6">
              <span class="text-gray-700">Phone number</span>
              <input
                name="phone"
                type="text"
                class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="1-(000)-000-0000"
                required
              />
            </label>
            <label class="block mb-6">
              <span class="text-gray-700">Product</span>
              <select
                name="product"
                required
                class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
              >
                <option value="cake">Chocolate cake</option>
                <option value="cat">Dancing cat</option>
                <option value="meme">Custom meme about me</option>
                <option value="zoom">Zoom background</option>
              </select>
            </label>
            <label class="block mb-6">
              <span class="text-gray-700">Amount</span>
              <input
                name="amount"
                type="text"
                class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="100"
                required
              />
            </label>
            <label class="block mb-6">
              <span class="text-gray-700">Details</span>
              <textarea
                name="message"
                class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                rows="3"
                placeholder="Details about your inquiry"
              ></textarea>
            </label>
            <div class="mb-6">
              <button
                type="submit"
                class="
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
              >
                Get Quote
              </button>
            </div>
            <div>
              <div class="mt-2 text-gray-700 text-right text-xs">
                by
                <a href="https://herotofu.com" class="hover:underline" target="_blank"
                >HeroTofu </a>
              </div>
            </div>
          </form>
        </div>
      </div> */}
      <div class="w-full mt-24 md:w-[50rem] md:max-w-full mx-auto">
        <div class="p-6 border border-gray-300 sm:rounded-md">
          <h2 className='my-4 text-xl bold'>Add Jobs</h2>
          <form method="POST" onSubmit={Submit} action="https://herotofu.com/start">
            <label class="block mb-6">
              <span class="text-gray-700">Job Title</span>
              <input
                type="text"
                name="name"
                class="
                    block
                    w-full
                    mt-1
                    border-gray-300
                    rounded-md
                    shadow-sm
                    focus:border-indigo-300
                    focus:ring
                    focus:ring-indigo-200
                    focus:ring-opacity-50
                  "
                  onChange={(e)=>setTitle(e.target.value)}
                placeholder="Joe Bloggs"
              />
            </label>
            <label class="block mb-6">
              <span class="text-gray-700">Company Name</span>
              <input
                type="text"
                name="name"
                class="
                    block
                    w-full
                    mt-1
                    border-gray-300
                    rounded-md
                    shadow-sm
                    focus:border-indigo-300
                    focus:ring
                    focus:ring-indigo-200
                    focus:ring-opacity-50
                  "
                  onChange={(e)=>setCompany(e.target.value)}
                placeholder="abc pvt"
              />
            </label>
            <label class="block mb-6">
              <span class="text-gray-700">Email address</span>
              <input
                name="email"
                type="email"
                class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          onChange={(e)=>setEmail(e.target.value)}
                placeholder="joe.bloggs@example.com"
                required
              />
            </label>
            <label className='block mb-6'>
        <span class="text-gray-700">Job Type</span>
        <select
          name="department"
          class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
             "
             onChange={(e)=>setType(e.target.value)}
            >
          <option >Select Time</option>
          <option value="Full Time">Full Time</option>
          <option value="Part Time">Part Time</option>
        </select>
      </label>
            <label class="block mb-6">
              <span class="text-gray-700">Salary</span>
              <input
                name="amount"
                type="text"
                class="
                block
                w-full
                mt-1
                border-gray-300
                rounded-md
                shadow-sm
                focus:border-indigo-300
                focus:ring
                focus:ring-indigo-200
                focus:ring-opacity-50
              "     
                  onChange={(e)=>setSalary(e.target.value)}
                    placeholder="100"
                    required
                  />
            </label>
            <label class="block mb-6">
              <span class="text-gray-700">Skills</span>
              <textarea
                name="message"
                class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "     
          onChange={(e)=>setSkills(e.target.value)}
                rows="3"
                placeholder="Tell us what you're thinking about..."
              ></textarea>
            </label>
            <label class="block mb-6">
              <span class="text-gray-700">Deadline of joining</span>
              <input
                name="text"
                type="text"
                class="
                block
                w-full
                mt-1
                border-gray-300
                rounded-md
                shadow-sm
                focus:border-indigo-300
                focus:ring
                focus:ring-indigo-200
                focus:ring-opacity-50
                 "
                 onChange={(e)=>setDeadline(e.target.value)}
                placeholder="joe.bloggs@example.com"
                required
              />
            </label>
            <div class="mb-6">
              <button
                type="submit"
                class="
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>


    </div>
  )
}

export default Addjob