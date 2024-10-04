import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom'
import Navigation from './navigation';
const Authorise = () => {
    const navigate = useNavigate();
    const [Auth, setAuth] = useState(false);
    const [message, setMessage] = useState('')
    axios.defaults.withCredentials = true;
    useEffect(()=>{
        axios.get('http://localhost:3000/auth/verify')
        .then(res=>{
            if(res.data.status){
                setAuth(true)
            }else{
                setAuth(false)
                navigate('/login')
                setMessage(res.data.message)
            }
        })
    },[]);
  return (
    
    <div className='container mt-4'>
    {
        Auth ?
         

        <div className="hello">
            <Navigate to="/home"/>
            <h3>YOu are Authorised</h3>
            <button >LogOut</button>
        </div>
        :
        <div>
            <h3>login now</h3>
            
        </div>
    }

</div>
  )
}

export default Authorise