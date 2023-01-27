import React, { useState,useEffect } from 'react'
import '../App.css';
import { useNavigate } from 'react-router-dom';
 const Login = () => {
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('users')
        if(auth){
          navigate('/')
        }
      }, [])

    const loginHandel= async()=>{
        console.log(email,password);
        let result = await fetch('http://localhost:5000/login',{
            method:"post",
            body: JSON.stringify({email,password}),
            headers:{
              'Content-Type':'application/json'
            }
        });
        result = await result.json();
        console.warn(result);
        if(result.name){
          localStorage.setItem('users',JSON.stringify(result))
          navigate('/')
        }else{
            alert("Please enter correct detail")
        }
    }
  return (
    <>
      <div className='login-box'>
         <h1>Login</h1>
        <input type="text" onChange={(e)=>setEmail(e.target.value)} className='input' placeholder='Enter Email id' />
        <input onChange={(e)=>setPassword(e.target.value)}  className='input' type="password" placeholder='Enter password ' />
        <button onClick={loginHandel}  className='btn' type='button'>login</button>
      </div>
    </>
  )
}
export default Login;