import React from 'react'
import DataTable from 'react-data-table-component'
import { useEffect, useState } from 'react'
// import "./career_finder.css"
import Navigation from '../components/navigation'
const Studjob = () => {
  const [data, setdata] = useState([]);
//   const [search, setsearch] = useState('');
//   const [filter, setfilter] = useState([]);

  const getdata = async () => {
    try {
      const req = await fetch('http://localhost:3000/getData3');
      const res = await req.json();
      setdata(res);
    //   setfilter(res);
    } catch (error) {
      console.log(error);
    }

  }
  useEffect(() => {
    getdata();
  }, []);
//   useEffect(() => {
//     const result = data.filter((item) => {
//       return item.field.toLowerCase().match(search.toLocaleLowerCase());
//     });
//     setfilter(result);
//   }, [search]);
  const columns = [
    {
      name: 'Job Title',
      selector: row => row.title
    },
    {
      name: 'Company Name',
      selector: row => row.company
    },
    {
      name: 'Email',
      selector: row => row.email
    },
    {
      name: 'Salary',
      selector: row => row.salary
    },
    {
      name: 'Job Type',
      selector: row => row.type
    },
    {
        name: 'Deadline ',
        selector: row => row.deadline
    },
    {
        name: 'Skills',
        selector: row => row.skills
    }
  ];

  const style1 = {
    rows: {
      style: {
        textalign: "center",
        minHeight: '72px',
         // override the row height
      },
    },
    headCells: {

      style: {
        fontSize: "1.5rem",
        fontweight: 500,
        padding: "0.75rem",
        background:"#A881AE"
      },
    },
    cells: {
      style: {
        
        fontSize: "1.2rem",
        paddingtop: "0.5rem",
        paddingbottom: "0.5rem",
        paddingleft: ".75rem",
        paddingright: " .75rem"
      }
    },
  }
  return (
    <div>
      <div className="sticky top-0 z-10">

      <Navigation/>
      </div>
      <div class="relative pt-48 pb-12 bg-black xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56">
        <header class="absolute inset-x-0 top-0 z-10 ">
          <div class="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
            <div class="flex items-center justify-between">
              <div class="md:hidden">
                <button type="button" class="p-2 -m-2 transition-all duration-200 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary">
                  <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>

        <div class="absolute inset-0">
          <img class="object-cover w-full h-[46.3rem]" src="images/j1.jpg" alt="" />
        </div>

        <div class="relative">
          <div class="px-6 ml-40 sm:px-8 lg:px-12 max-w-7xl">
            <div class="w-full relative right-[-30rem] bottom-[12rem]  lg:w-2/3 xl:w-4/5">
              <p class="mt-6 flex flex-col items-center tracking-tighter text-white">
                <span class="font-sans font-normal text-5xl leading-loose">StudyMate </span><br />
                <span class="font-serif italic font-normal text-8xl">Job List </span>
                <p className='font-serif  italic font-normal text-3xl leading-loose'></p>
              </p>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <div className="container p-2 top-[6rem] mx-auto sm:p-4 dark:text-gray-800">
        <div className="overflow-x-auto">

          <DataTable
            columns={columns}
            data={data}
            fixedHeader
            pagination
            // subHeader
            // subHeaderComponent={
            //   <div class="group1">
            //     <svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
            //     <input placeholder="Search" type="search" class="input" value={search} onChange={(e) => setsearch(e.target.value)} />
            //   </div>
            //   // <input type='text' placeholder='search' value={search} onChange={(e) => setsearch(e.target.value)} />
            // }
            subHeaderAlign='left'
            // style={st}
            customStyles={style1}
          >
          </DataTable>
        </div>
      </div>
    </div>
  )
}

export default Studjob