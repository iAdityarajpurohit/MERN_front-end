import React, { useState } from 'react'
import '../App.css'

 const AddProduct = () => {
    const[name,setName] = useState('');
    const[price,setPrice] = useState('');
    const[category,setCategory] = useState('');
    const[company,setCompany] = useState('');
    const[error,setError] = useState(false)

    const addproductHandler = async ()=>{
        if(!name || !price || !category || !company){
            setError(true);
            return false;
        }

          console.log(name,price,category,company);
          const userId =JSON.parse (localStorage.getItem('users'))._id;
         let result = await fetch('http://localhost:5000/add-product',{
            method:'post',
            body: JSON.stringify({name,price,category,company,userId}),
            headers:{
                "Content-Type":"application/json"
            }
         })
         result = await result.json();
         console.log(result);
    }
  return (
    < div className='product-box'>
     <h1>Add Product</h1>
     <input value={name} onChange={(e)=>setName(e.target.value)} className='input-product-box' type="text" placeholder='Enter your product'/>
    { error && !name && <span className='validErr'>Enter valid Name</span>}

     <input value={price} onChange={(e)=>setPrice(e.target.value)}  className='input-product-box'  type="text" placeholder='Enter your price ' />
     { error && !price && <span className='validErr'>Enter valid price</span>}

     <input value={category} onChange={(e)=>setCategory(e.target.value)}  className='input-product-box'  type="text" placeholder='Enter your Category' />
     { error && !category && <span className='validErr'>Enter valid category</span>}

     <input value={company} onChange={(e)=>setCompany(e.target.value)}  className='input-product-box'  type="text" placeholder='Enter your Company' />
     { error && !company && <span className='validErr'>Enter valid company</span>}

     <button onClick={addproductHandler} className='btn'>Add Product</button>
    </div>
  )
}
export default AddProduct;