import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Updatejob = () => {
  const {id}= useParams()
  const [title, setTitle] = useState()
  const [email, setEmail] = useState()
  const [salary, setSalary] = useState()
  const [skills, setSkills] = useState()
  const navigate = useNavigate();

  useEffect(()=>{
    axios.get("http://localhost:3000/getData2/"+id)
    .then(res => {
      setTitle(res.data.title)
      setEmail(res.data.email)
      setSalary(res .data.salary)
      setSkills(res.data.skills)
      console.log(res)
    })
    .catch(err => console.log(err))
  },[])

  const Update =(e) =>{
    e.preventDefault();
    axios.put("http://localhost:3000/updateData/"+id,{title,email,salary,skills})
    .then(result => {
      console.log(result)
      navigate('/jobs')
     })
    
    .catch(err => console.log(err))
  }
  return (
    <div>
      <div class="w-full mt-24 md:w-[50rem] md:max-w-full mx-auto">
        <div class="p-6 border border-gray-300 sm:rounded-md">
          <h2 className='my-4 text-xl bold'>Update Job</h2>
          <form method="POST" onSubmit={Update} action="https://herotofu.com/start">
            <label class="block mb-6">
              <span class="text-gray-700">Title</span>
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
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                placeholder="Joe Bloggs"
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
                focus:ring-opacity-50"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="joe.bloggs@example.com"
                required
              />
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
                focus:ring-opacity-50"
                value={salary}
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
                focus:ring-opacity-50"
                value={skills}
                onChange={(e)=>setSkills(e.target.value)}
                rows="3"
                placeholder="Tell us what you're thinking about..."
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
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Updatejob