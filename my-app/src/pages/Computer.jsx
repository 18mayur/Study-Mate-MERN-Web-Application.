import React, { useState } from 'react'
import Axios from "axios";
//import FileDownload from "js-file-download";
import "./computer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-solid-svg-icons'
import Navigation from '../components/navigation';
const Computer = () => {
  // const downloadPdf = async()=>{
  //   try{
  //     const response = await Axios.get(
  //       "http://localhost:5173/images/Hyper-V.pdf",
  //       {
  //         responseType:"blob",
  //       }
  //     );
  //     const pdfBlob = new Blob([response.data],{type:"application/pdf"});

  //     const url = window.URL.createObjectURL(pdfBlob);

  //     const tempLink = document.createElement("a");
  //     tempLink.href=url;
  //     //tempLink.setAttribute("download",`bill_${User_Id}_${date}.pdf`);

  //     document.body.appendChild(tempLink);
  //     tempLink.click();

  //     document.body.removeChild(tempLink);
  //     window.URL.revokeObjectURL(url);

  //   }catch(error){
  //     console.error("Erroe downloading file ",error);
  //   }
  // };
  // const [loader,setLoader]=useState(false);
  // const [error, seterror] = useState('');

  // const downloadPDF=()=>{
  //   setLoader(true);
  //   seterror('');
  //   // Axios.get('http://localhost:1573/Hyper-V.pdf',{
  //   //   responseType: "blob",
  //   // })
  //   // .then((obj)=>{console.log(obj.data)})
  //   // .catch(err =>console.error(err))
  // //   }
  // const [pdfUrl, setPdfUrl] = useState('');

  // const handleDownload = async () => {
  //   try {
  //     const response = await fetch('http://localhost:4000/download', {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/pdf',
  //       },
  //     });

  //     if (!response.ok) {
  //       throw new Error('Failed to fetch PDF file');
  //     }

  //     const blob = await response.blob();
  //     const pdfBlobUrl = URL.createObjectURL(blob);
  //     setPdfUrl(pdfBlobUrl);

  //     // Uncomment this line if you want to automatically trigger the download
  //   // window.open(pdfBlobUrl, '_blank');
  //   } catch (error) {
  //     console.error('Error downloading PDF:', error);
  //   }
  //href='Hyper-V.pdf' download="Hyper-V.pdf"};
  return (
    <div>
      <div className="sticky top-0 z-10">
      <Navigation/>
      </div>
      {/* <section class="bg-white dark:bg-gray-900">
        <div class="container px-8 py-16 mx-80 lg:flex lg:items-center lg:justify-between">
          <h2 class="text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
           Quetion Papers
          </h2>
        </div>
      </section> */}
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
          <img class="object-cover w-full h-full" src="images/digital2.jpg" alt="" />
        </div>

        <div class="relative">
          <div class="px-6 ml-40 sm:px-8 lg:px-12 max-w-7xl">
            <div class="w-full lg:w-2/3 xl:w-4/5">
              <p class="mt-6 tracking-tighter text-white">
                <span class="font-sans font-normal text-5xl leading-loose">StudyMate </span><br />
                <span class="font-serif italic font-normal text-8xl">Digital Repository</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <section class="bg-white dark:bg-gray-900">
        <div class="container flex flex-col items-center px-4 pt-12 pb-8 mx-auto text-center">
          <h2 class="max-w-2xl mx-auto text-4xl font-semibold tracking-tight text-gray-800 xl:text-5xl dark:text-white">
            <span>_____</span>  Quetion Papers <span>_____</span>
          </h2>
        </div>
      </section>
      <section className=" pb-[15px] pt-[30px] dark:bg-dark">
        <div className="mx-80 px-8 w-full h-[150px] content-center shadow-[0 13px 13px 9px rgb(0 0 0 / 0.12), 0 4px 9px 4px rgb(0 0 0 / 0.1) ] md:shadow-lg sm:container ">
          <div className="items-center justify-between  border-stroke dark:border-dark-3 md:flex">
            <div className="pdflogo">
              <img src="images/pdf.png" alt="Thumbnail" className="  img-thumbnail" />
            </div>
            <div className="mb-2 w-full relative left-[-160px] ">
              <h2 className="mb-[0.3rem] text-3xl font-semibold text-dark dark:text-white">
                C Programming
              </h2>
              <p className='text-lg text-dark'>Size:104.4Kb<br /> Year: 2023-24</p>
            </div>
            <div className="mb-6 relative right-[7rem]">
              <div className='box3'>
                <a >
                  <button className="button full-rounded" href='Hyper-V.pdf' download="QuetionPapers/Hyper-V.pdf" tyle="vertical-align:middle"><span>Download</span></button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-[15px] pt-[30px] dark:bg-dark">
        <div className="mx-80 px-8 w-full h-[150px] content-center shadow-[0 15px 21px 12px rgb(0 0 0 / 0.12), 0 4px 6px -4px rgb(0 0 0 / 0.1) ] md:shadow-lg sm:container ">
          <div className="items-center justify-between  border-stroke dark:border-dark-3 md:flex">
            <div className="pdflogo">
              <img src="images/pdf.png" alt="Thumbnail" className="  img-thumbnail" />
            </div>
            <div className="mb-2 w-full relative left-[-160px] ">
              <h2 className="mb-[0.3rem] text-3xl  font-semibold text-dark dark:text-white">
                Object Oriented Programming Using C++
              </h2>
              <p className='text-lg text-dark'>Size:104.4Kb <br /> Year: 2023-24</p>
            </div>
            <div className="mb-6 relative right-[7rem]">
              <div className='box3'>
                <a >
                  <button className="button full-rounded" tyle="vertical-align:middle"><span>Download</span></button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-[15px] pt-[30px] dark:bg-dark">
        <div className="mx-80 px-8 w-full h-[150px] content-center shadow-[0 15px 21px 12px rgb(0 0 0 / 0.12), 0 4px 6px -4px rgb(0 0 0 / 0.1) ] md:shadow-lg sm:container ">
          <div className="items-center justify-between  border-stroke dark:border-dark-3 md:flex">
            <div className="pdflogo">
              <img src="images/pdf.png" alt="Thumbnail" className="  img-thumbnail" />
            </div>
            <div className="mb-2 w-full relative left-[-160px] ">
              <h2 className="mb-[0.3rem] text-3xl  font-semibold text-dark dark:text-white">
                Advanced Web Designing (AWD)
              </h2>
              <p className='text-lg text-dark'>Size:104.4Kb<br /> Year: 2023-24</p>
            </div>
            <div className="mb-6 relative right-[7rem]">
              <div className='box3'>
                <a >
                  <button className="button full-rounded" tyle="vertical-align:middle"><span>Download</span></button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-[15px] pt-[30px] dark:bg-dark">
        <div className="mx-80 px-8 w-full h-[150px] content-center shadow-[0 15px 21px 12px rgb(0 0 0 / 0.12), 0 4px 6px -4px rgb(0 0 0 / 0.1) ] md:shadow-lg sm:container ">
          <div className="items-center justify-between  border-stroke dark:border-dark-3 md:flex">
            <div className="pdflogo">
              <img src="images/pdf.png" alt="Thumbnail" className="  img-thumbnail" />
            </div>
            <div className="mb-2 w-full relative left-[-160px] ">
              <h2 className="mb-[0.3rem] text-3xl  font-semibold text-dark dark:text-white">
                Database Management System (DBMS)
              </h2>
              <p className='text-lg text-dark'>Size:104.4Kb<br /> Year: 2023-24</p>
            </div>
            <div className="mb-6 relative right-[7rem]">
              <div className='box3'>
                <a >
                  <button className="button full-rounded" tyle="vertical-align:middle"><span>Download</span></button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-[15px] pt-[30px] dark:bg-dark">
        <div className="mx-80 px-8 w-full h-[150px] content-center shadow-[0 15px 21px 12px rgb(0 0 0 / 0.12), 0 4px 6px -4px rgb(0 0 0 / 0.1) ] md:shadow-lg sm:container ">
          <div className="items-center justify-between  border-stroke dark:border-dark-3 md:flex">
            <div className="pdflogo">
              <img src="images/pdf.png" alt="Thumbnail" className="  img-thumbnail" />
            </div>
            <div className="mb-2 w-full relative left-[-160px] ">
              <h2 className="mb-[0.3rem] text-3xl  font-semibold text-dark dark:text-white">
                Java
              </h2>
              <p className='text-lg text-dark'>Size:104.4Kb<br /> Year: 2023-24</p>
            </div>
            <div className="mb-6 relative right-28">
              <div className='box3'>
                <a >
                  <button className="button full-rounded" tyle="vertical-align:middle"><span>Download</span></button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-[15px] pt-[30px] dark:bg-dark">
        <div className="mx-80 px-8 w-full h-[150px] content-center shadow-[0 15px 21px 12px rgb(0 0 0 / 0.12), 0 4px 6px -4px rgb(0 0 0 / 0.1) ] md:shadow-lg sm:container ">
          <div className="items-center justify-between  border-stroke dark:border-dark-3 md:flex">
            <div className="pdflogo">
              <img src="images/pdf.png" alt="Thumbnail" className="  img-thumbnail" />
            </div>
            <div className="mb-2 w-full relative left-[-160px] ">
              <h2 className="mb-[0.3rem] text-3xl  font-semibold text-dark dark:text-white">
                Python
              </h2>
              <p className='text-lg text-dark'>Size:104.4Kb<br /> Year: 2023-24</p>
            </div>
            <div className="mb-6 relative right-[7rem]">
              <div className='box3'>
                <a >
                  <button className="button full-rounded" tyle="vertical-align:middle"><span>Download</span></button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-[15px] pt-[30px] dark:bg-dark">
        <div className="mx-80 px-8 w-full h-[150px] content-center shadow-[0 15px 21px 12px rgb(0 0 0 / 0.12), 0 4px 6px -4px rgb(0 0 0 / 0.1) ] md:shadow-lg sm:container ">
          <div className="items-center justify-between  border-stroke dark:border-dark-3 md:flex">
            <div className="pdflogo">
              <img src="images/pdf.png" alt="Thumbnail" className="  img-thumbnail" />
            </div>
            <div className="mb-2 w-full relative left-[-160px] ">
              <h2 className="mb-[0.3rem] text-3xl  font-semibold text-dark dark:text-white">
                ASP.NET
              </h2>
              <p className='text-lg text-dark'>Size:104.4Kb<br /> Year: 2023-24</p>
            </div>
            <div className="mb-6 relative right-[7rem]">
              <div className='box3'>
                <a >
                  <button className="button full-rounded" tyle="vertical-align:middle"><span>Download</span></button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div>
      <h1>PDF Downloader</h1>
      <button onClick={handleDownload}>Download PDF</button>
      {pdfUrl && <a href={pdfUrl} download="http://localhost:4000/download">Click here if download doesn't start automatically</a>}
    </div> */}
      <section class="bg-white dark:bg-gray-900">
        <div class="container flex flex-col items-center px-4 pt-12 pb-8 mx-auto text-center">
          <h2 class="max-w-2xl mx-auto text-4xl font-semibold tracking-tight text-gray-800 xl:text-5xl dark:text-white">
            <span>_____</span>  Notes <span>_____</span>
          </h2>
        </div>
      </section>
      <br />
     
      <div className="body12">
        <div class="containerx">
          <div class="card">
            <div class="image">
              <img href="#" src="images/python.webp" />
              <h3 className='head12'>Python</h3>
            </div>
            <div class="content">
              
              <p className='para1'>Download Hande Written Notes And Cheatsheet Here </p>
              <div className="flex1">
              <button className='btn1'>Notes</button>
              <button className='btn1'>Cheatsheet</button>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="image">
              <img href="#" src="images/cpp.webp" />
              <h3 className='headcpp'>C++</h3>
            </div>
            <div class="content">
              
              <p className='para1'>Download Hande Written Notes And Cheatsheet Here </p>
              <div className="flex1">
              <button className='btn1'>Notes</button>
              <button className='btn1'>Cheatsheet</button>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="image">
              <img href="#" src="images/c.webp" />
              <h3 className='headc'>C</h3>
            </div>
            <div class="content">
              
              <p className='para1'>Download Hande Written Notes And Cheatsheet Here </p>
              <div className="flex1">
              <button className='btn1'>Notes</button>
              <button className='btn1'>Cheatsheet</button>
              </div>
            </div>
          </div>
          
          <div class="card">
            <div class="image">
              <img href="#" src="images/html.webp" />
              <h3 className='headhtml'>HTML</h3>
            </div>
            <div class="content">
              
              <p className='para1'>Download Hande Written Notes And Cheatsheet Here </p>
              <div className="flex1">
              <button className='btn1'>Notes</button>
              <button className='btn1'>Cheatsheet</button>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="image">
              <img href="#" src="images/css.webp" />
              <h3 className='headcss'>CSS</h3>
            </div>
            <div class="content">
              
              <p className='para1'>Download Hande Written Notes And Cheatsheet Here </p>
              <div className="flex1">
              <button className='btn1'>Notes</button>
              <button className='btn1'>Cheatsheet</button>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="image">
              <img href="#" src="images/js.webp" />
              <h3 className='headjs'>Java Script</h3>
            </div>
            <div class="content">
              
              <p className='para1'>Download Hande Written Notes And Cheatsheet Here </p>
              <div className="flex1">
              <button className='btn1'>Notes</button>
              <button className='btn1'>Cheatsheet</button>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="image">
              <img href="#" src="images/java.webp" />
              <h3 className='headjava'>JAVA</h3>
            </div>
            <div class="content">
              
              <p className='para1'>Download Hande Written Notes And Cheatsheet Here </p>
              <div className="flex1">
              <button className='btn1'>Notes</button>
              <button className='btn1'>Cheatsheet</button>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="image">
              <img href="#" src="images/mysql.webp" />
              <h3 className='headsql'>MySQL</h3>
            </div>
            <div class="content">
              
              <p className='para1'>Download Hande Written Notes And Cheatsheet Here </p>
              <div className="flex1">
              <button className='btn1'>Notes</button>
              <button className='btn1'>Cheatsheet</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Computer