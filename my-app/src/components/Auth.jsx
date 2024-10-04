// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'

// const Auth1 = () => {
//     const navigate = useNavigate();
//     const [Auth, setAuth] = useState(false);
//     const [message, setMessage] = useState('')
//     axios.defaults.withCredentials = true;
//     useEffect(()=>{
//         axios.get('http://localhost:3000/auth/verify')
//         .then(res=>{
//             if(res.data.status){
//                 setAuth(true)
//             }else{
//                 setAuth(false)
//                 setMessage(res.data.message)
//             }
//         })
//     },[]);
//   return (
//     <div className='container mt-4'>
//         {
//             Auth ?
//             <div className="hello">
//                 <h3>YOu are Authorised</h3>
//                 <button onClick={handleLogout}>LogOut</button>
//             </div>
//             :
//             <div>
//                 <h3>login now</h3>
//                 <Link to='/login'>Login</Link>
                
//             </div>
//         }
//     </div>
//   )
// }

// export default Auth1