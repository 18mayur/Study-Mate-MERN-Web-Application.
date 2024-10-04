import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Axios from "axios";
import FileDownload from "js-file-download";
import Navigation from './components/navigation';
import Footer from './components/Footer';
import Form from './components/Form';
import Home from './pages/Home';


import About from './pages/About';
import Field from './pages/Field';
import Computer from './pages/Computer';
import Tools from './pages/Tools';
import Careerfinder from './pages/Careerfinder';
import Blogs from './pages/Blogs';
import Signup from './components/Signup';
import Login from './components/Login';
import Login2 from './components/Login2';
import Authorise from './components/Authorise';
import Jobs from './pages/Jobs';
import Recruiter from './components/Recruiter';
import About2 from './pages/about2';
import Addjob from './pages/Addjob';
import Updatejob from './pages/Updatejob';
import Test from './pages/Test';
import Studjob from './pages/Studjob';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Authorise />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/Tools' element={<Tools />}></Route>
          <Route path='/Field' element={<Field />}></Route>
          <Route path='/stud' element={<Studjob />}></Route>
          <Route path='/computer' element={<Computer />}></Route>
          <Route path='/Blogs' element={<Blogs />}></Route>
          <Route path='/Careerfinder' element={<Careerfinder />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/login' element={<Login />}></Route>

            // Recruiter Routes

          <Route path='/log2' element={<Login2 />}></Route>
          <Route path='/add' element={<Addjob/>}></Route>
          <Route path='/test' element={<Test/>}></Route>
          <Route path='/update/:id' element={<Updatejob/>}></Route>
          <Route path='/rec' element={<Recruiter />}></Route>
          <Route path='/jobs' element={<Jobs />}></Route>
          <Route path='/about2' element={<About2 />}></Route>
        </Routes>
      </Router>

      {/* 
     <Form/>
      
     <Routes>
                    <Route path='/home' element={<Home/>} />
                    <Route path='/Field' element={<Field/>} />
                    <Route path='/Computer' element={<Computer/>} />
                    <Route path='/Tools' element={<Tools/>} />
                    <Route path='/Careerfinder' element={<Careerfinder/>} />
                    <Route path='/About' element={<About/>} />
                  
                    
                </Routes>
   */}

    </>
  )
}

export default App
