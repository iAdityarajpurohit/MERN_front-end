import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
 const Product = () => {
    const[product,setProduct]= useState([]);

    useEffect(() => {
        getProduct();
    }, [])
    const getProduct= async()=>{
        let result = await fetch('https://twond-ngm0.onrender.com/products');
        result = await result.json();
        setProduct(result);
    }

    const deleteHandler = async (id)=>{
         let result = fetch(`https://twond-ngm0.onrender.com/product/${id}`,{
           method:"Delete"
         })
         result = await result.json()

         if(result){
            getProduct();
         }
    }

    const searchHandler = async(event)=>{
       let key = event.target.value;
       if(key){

           let result = await fetch(`https://twond-ngm0.onrender.com/search/${key}`);
           result = await result.json();
           if(result){
               setProduct(result)
            }
        }else{
            getProduct();
        }
    }

  return (
   <div className='product-list'>
   <h1>product List</h1>
 
   <input className='serach-box' type="text"placeholder='serach product' onChange={searchHandler} />
    <ul>
        <li>S.No</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Company</li>
        <li>Operation</li>
       
    </ul>
    {
     product.length>0 ? product.map((curElm,index)=>
     <ul>
        <li>{index+1}</li>
        <li>{curElm.name}</li>
        <li>{curElm.price}</li>
        <li>{curElm.category}</li>
        <li>{curElm.company}</li>
        <li><button onClick={()=>deleteHandler(curElm._id)}>Delete</button>
        <Link to={'/update/'+curElm._id}>Edit</Link>
        </li>
        
     
     </ul>
    ): <h1>No Result found</h1>
}
   </div>
  )
}
export default Product;