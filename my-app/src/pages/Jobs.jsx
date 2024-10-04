import React, { useEffect } from 'react'
import { useState } from 'react'
import Navi2 from '../components/Navi2'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './jobs.css'
const Jobs = () => {
  const [jobs, setJobs] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3000/getJob")
      .then(res => setJobs(res.data))
      .catch(err => console.log(err))
  }, [])

  const handleDelete = (id) => {
    axios.delete('http://localhost:3000/deleteData/' + id)
      .then(res => {
        console.log(res)
        window.location.reload()
      })
      .catch(err => console.log(err))
  }
  return (
    <div>
      <Navi2 />
      {/* <div className="flex item-center">
        <div className="w-50">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>contact</th>
                <th>Skills</th>
                <th>Salary</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                jobs.map((job) => {
                  return <tr>
                    <td>{job.title}</td>
                    <td>{job.email}</td>
                    <td>{job.skills}</td>
                    <td>{job.salary}</td>
                    <td>
                      <Link to={`/update/${job._id}`}> Edit</Link>
                      <button onClick={(e)=> handleDelete(job._id)}>delete</button>
                    </td>
                  </tr>
                })
              }
            </tbody>
          </table>
        </div>
      </div> */}
      <section class=" bg-indigo-50 border-y border-indigo-100">
        <div class="container top-[1rem] flex flex-col items-center px-4 pt-9 pb-7 mx-auto text-center">
          <h2 class="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-4xl ">
            Listed Jobs <span class="text-blue-500"></span>
          </h2>
          <p class="max-w-4xl mt-6 text-2xl text-center text-gray-500 ">

          </p>
        </div>
      </section>
      <div className="container mt-12 max p-2 mx-auto sm:p-4 dark:text-gray-800">
        <h2 className="mb-4 text-2xl justify-center item-center font-semibold leading-tight"></h2>
        <div className="overflow-x-auto">
          <table className="w-full p-6 text-xs text-left whitespace-nowrap">
            <colgroup>
              <col className="w-5" />
              <col />
              <col />
              <col />
              <col />
              <col />
              <col className="w-5" />
            </colgroup>
            <thead>
              <tr className="dark:bg-gray-300 text-[1.5rem]  bg-[#A881AE]">
                <th className="p-6 font-medium">Job Title</th>
                <th className="p-6 font-medium">Company Name</th>
                <th className="p-6 font-medium">Email</th>
                <th className="p-6 font-medium">Salary</th>
                <th className="p-6 font-medium">Job Type</th>
                <th className="p-6 font-medium">Skills</th>
                <th className="p-6 font-medium">Deadline</th>
                <th className="p-6">
                  <span className="sr-only"></span>
                </th>
                <th className="p-6">
                  <span className="sr-only"></span>
                </th>
              </tr>
            </thead>
            <tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
              {jobs.map((job) => {
                return <tr className='text-[1.3rem]'>
                  <td className="px-3 font-medium dark:text-gray-600">{job.title}</td>
                  <td className="pr-3 pl-7 py-8">{job.company}</td>
                  <td className="pr-3 pl-7 py-8">{job.email}</td>
                  <td className="pr-3 pl-7 py-8">{job.salary}</td>
                  <td className="pr-3 pl-7 py-8">{job.type}</td>
                  <td className="pr-3 pl-7 py-8">{job.skills}</td>
                  <td className="pr-3 pl-7 py-8">{job.deadline}</td>
                  <td className="pr-3 pl-7 py-8">
                    {/* <button><Link to={`/update/${job._id}`} > Edit</Link></button> */}
                    <button class="edit"><Link to={`/update/${job._id}`} >
                      {/* <svg class="svg-icon" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g stroke="#a649da" stroke-linecap="round" stroke-width="2"><path d="m20 20h-16"></path><path clip-rule="evenodd" d="m14.5858 4.41422c.781-.78105 2.0474-.78105 2.8284 0 .7811.78105.7811 2.04738 0 2.82843l-8.28322 8.28325-3.03046.202.20203-3.0304z" fill-rule="evenodd"></path></g></svg> */}
                      <span class="lable">Edit</span>
                      </Link>
                    </button>

                  </td>
                  <td className='pr-3 pl-7 py-8'>
                    <button className='edit2' onClick={(e) => handleDelete(job._id)}> <span class="lable1">Delete</span></button>
                  </td>
                </tr>

              })
              }
            </tbody>

          </table>
        </div>
      </div>
    </div>
  )
}

export default Jobs