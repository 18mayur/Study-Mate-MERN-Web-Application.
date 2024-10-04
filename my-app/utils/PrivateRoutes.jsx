// import axios from 'axios';
// import React, { useEffect ,useState } from 'react'
// import { Navigate, useNavigate } from 'react-router-dom'
// import { Outlet } from 'react-router-dom';
// const PrivateRoutes = () => {
//     const navigate = useNavigate();
//     const [Auth, setAuth] = useState(false);
//     const [message, setMessage] = useState('')
//     axios.defaults.withCredentials = true;
//     useEffect(()=>{
//         axios.get('http://localhost:3000/auth/verify')
//         .then(res=>{
//             if(res.data.status){
//                 setAuth(true);
//             }else{
//                 setAuth(false);
//                 setMessage(res.data.message);
//             }
//         })
//     },[]);
//     return(
//         Auth ? <Outlet/> : <Navigate to='/login'/>
//     )
  
// }

// export default PrivateRoutes