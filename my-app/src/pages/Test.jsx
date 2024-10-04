import React, { useEffect } from 'react'
import { useState } from 'react'
import Navi2 from '../components/Navi2'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Test = () => {
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
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
                <h2 className="mb-4 text-2xl font-semibold leading-tight">Contacts</h2>
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
                            <tr className="dark:bg-gray-300">
                                <th className="p-3">Job Title</th>
                                <th className="p-3">Company Name</th>
                                <th className="p-3">Email</th>
                                <th className="p-3">Salary</th>
                                <th className="p-3">Job Type</th>
                                <th className="p-3">Skills</th>
                                <th className="p-3">Deadline of Application</th>
                                <th className="p-3">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
                            {  jobs.map((job) =>{
                               return <tr>
                                <td className="px-3 text-2xl font-medium dark:text-gray-600">{job.title}</td>
                                <td className="px-3 py-2">{job.company}</td>
                                <td className="px-3 py-2">{job.email}</td>
                                <td className="px-3 py-2">{job.salary}</td>
                                <td className="px-3 py-2">{job.type}</td>
                                <td className="px-3 py-2">{job.skills}</td>
                                <td className="px-3 py-2">{job.deadline}</td>
                                <td className="px-3 py-2">
                                <button><Link to={`/update/${job._id}`} > Edit</Link></button>
                                <button onClick={(e)=> handleDelete(job._id)}>delete</button>
                                </td>
                            </tr>
                            {/* <tr>
                                <td className="px-3 text-2xl font-medium dark:text-gray-600"></td>
                                <td className="px-3 py-2">
                                    <p>Richie Allen</p>
                                </td>
                                <td className="px-3 py-2">
                                    <span>Geothermal Technician</span>
                                    <p className="dark:text-gray-600">Icecorps</p>
                                </td>
                                <td className="px-3 py-2">
                                    <p>555-129-0761</p>
                                </td>
                                <td className="px-3 py-2">
                                    <p>richie@allen.com</p>
                                </td>
                                <td className="px-3 py-2">
                                    <p>Knesebeckstrasse 32, Obersteinebach</p>
                                    <p className="dark:text-gray-600">Germany</p>
                                </td>
                                <td className="px-3 py-2">
                                    <button type="button" title="Open details" className="p-1 rounded-full dark:text-gray-400 hover:dark:bg-gray-300 focus:dark:bg-gray-300">
                                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                                            <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
                                        </svg>
                                    </button>
                                </td>
                            </tr> */}
                        })
                         }
                        </tbody>
                        {/* <tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
                            <tr>
                                <td className="px-3 text-2xl font-medium dark:text-gray-600">B</td>
                                <td className="px-3 py-2">
                                    <p>Alex Bridges</p>
                                </td>
                                <td className="px-3 py-2">
                                    <span>Administrative Services Manager</span>
                                    <p className="dark:text-gray-600">Smilectronics</p>
                                </td>
                                <td className="px-3 py-2">
                                    <p>555-238-9890</p>
                                </td>
                                <td className="px-3 py-2">
                                    <p>alex@bridges.com</p>
                                </td>
                                <td className="px-3 py-2">
                                    <p>Hooivelden 117, Kortrijk</p>
                                    <p className="dark:text-gray-600">Belgium</p>
                                </td>
                                <td className="px-3 py-2">
                                    <button type="button" title="Open details" className="p-1 rounded-full dark:text-gray-400 hover:dark:bg-gray-300 focus:dark:bg-gray-300">
                                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                                            <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-3 text-2xl font-medium dark:text-gray-600"></td>
                                <td className="px-3 py-2">
                                    <p>Lynette Brown</p>
                                </td>
                                <td className="px-3 py-2">
                                    <span>Camera Operator</span>
                                    <p className="dark:text-gray-600">Surge Enterprises</p>
                                </td>
                                <td className="px-3 py-2">
                                    <p>555-521-5712</p>
                                </td>
                                <td className="px-3 py-2">
                                    <p>lynette@brown.com</p>
                                </td>
                                <td className="px-3 py-2">
                                    <p>22 rue de la Boétie, Poitiers</p>
                                    <p className="dark:text-gray-600">France</p>
                                </td>
                                <td className="px-3 py-2">
                                    <button type="button" title="Open details" className="p-1 rounded-full dark:text-gray-400 hover:dark:bg-gray-300 focus:dark:bg-gray-300">
                                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                                            <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        </tbody> */}
                        {/* <tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
                            <tr>
                                <td className="px-3 text-2xl font-medium dark:text-gray-600">C</td>
                                <td className="px-3 py-2">
                                    <p>Mariah Claxton</p>
                                </td>
                                <td className="px-3 py-2">
                                    <span>Nuclear Technician</span>
                                    <p className="dark:text-gray-600">White Wolf Brews</p>
                                </td>
                                <td className="px-3 py-2">
                                    <p>555-654-9810</p>
                                </td>
                                <td className="px-3 py-2">
                                    <p>mariah@claxton.com</p>
                                </td>
                                <td className="px-3 py-2">
                                    <p>R Oliveirinhas 71, Maia</p>
                                    <p className="dark:text-gray-600">Portugal</p>
                                </td>
                                <td className="px-3 py-2">
                                    <button type="button" title="Open details" className="p-1 rounded-full dark:text-gray-400 hover:dark:bg-gray-300 focus:dark:bg-gray-300">
                                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                                            <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-3 text-2xl font-medium dark:text-gray-600"></td>
                                <td className="px-3 py-2">
                                    <p>Hermila Craig</p>
                                </td>
                                <td className="px-3 py-2">
                                    <span>Production Engineer</span>
                                    <p className="dark:text-gray-600">Cavernetworks Co.</p>
                                </td>
                                <td className="px-3 py-2">
                                    <p>555-091-8401</p>
                                </td>
                                <td className="px-3 py-2">
                                    <p>hermila@craig.com</p>
                                </td>
                                <td className="px-3 py-2">
                                    <p>Rua da Rapina 89, Espeja</p>
                                    <p className="dark:text-gray-600">Spain</p>
                                </td>
                                <td className="px-3 py-2">
                                    <button type="button" title="Open details" className="p-1 rounded-full dark:text-gray-400 hover:dark:bg-gray-300 focus:dark:bg-gray-300">
                                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                                            <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        </tbody> */}
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Test