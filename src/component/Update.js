import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import '../App.css'

 const Update = () => {
    const[name,setName] = useState('');
    const[price,setPrice] = useState('');
    const[category,setCategory] = useState('');
    const[company,setCompany] = useState('');
 const params = useParams();
 const navigate = useNavigate();
    
 useEffect(() => {
    getProductDetail();
  }, []);
  const getProductDetail =async()=>{
     let result =  await fetch(`https://twond-ngm0.onrender.com/product/${params.id}`);
     result =  await result.json();
     console.log(result);
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);
  };
    const updateHandler = async()=>{
          console.log(name,price,category,company);
      let result = await fetch(`https://twond-ngm0.onrender.com/product/${params.id}`,{
        method:'put',
        body:JSON.stringify({name,price,category,company}),
        headers:{
            'Content-Type':"application/json"
        }
      });
       result = await result.json()
       console.log(result);
       navigate('/');

    }

  return (
    < div className='product-box'>
     <h1>Edit Product</h1>
     <input value={name} onChange={(e)=>setName(e.target.value)} className='input-product-box' type="text" placeholder='Enter your product'/>


     <input value={price} onChange={(e)=>setPrice(e.target.value)}  className='input-product-box'  type="text" placeholder='Enter your price ' />
    

     <input value={category} onChange={(e)=>setCategory(e.target.value)}  className='input-product-box'  type="text" placeholder='Enter your Category' />
   

     <input value={company} onChange={(e)=>setCompany(e.target.value)}  className='input-product-box'  type="text" placeholder='Enter your Company' />
    

     <button onClick={updateHandler} className='btn'>Update</button>
    </div>
  )
}
export default Update;