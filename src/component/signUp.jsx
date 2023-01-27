import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
 const SignUp = () => {
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");  
    const navigate = useNavigate();

   
    useEffect(() => {
      const auth = localStorage.getItem('users')
      if(auth){
        navigate('/')
      }
    })

    const collectData = async ()=>{
        // console.log(name,email,password);
        let result = await fetch('https://twond-ngm0.onrender.com/register',{
          method:"post",
          body: JSON.stringify({name,email,password}),
          headers:{
            'Content-Type':'application/json'
          }
        })
        result = await result.json();
       console.log(result);
       localStorage.setItem("users",JSON.stringify(result.result))
       localStorage.setItem("token",JSON.stringify(result.auth))
       if(result){
        navigate('/')
       }
    }
  return (
    <div  className='signup-box'>
       <h1>Registration</h1>
     
       <input className='input' type="text" placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)} />
       <input className='input' type="email" placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
       <input className='input' type="password" placeholder='Enter password' value={password} onChange={(e)=>setPassword(e.target.value)} />

       <button onClick={collectData} className='btn' type='button'>Sign Up</button>
       
   
       
       
 
    </div>
  )
}
export default SignUp;