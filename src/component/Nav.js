import React from 'react'
import { Link,useNavigate } from 'react-router-dom';
import '../App.css'
const Nav = () => {
   const navigate = useNavigate();
const auth = localStorage.getItem("users")
  const logout=()=>{
     localStorage.clear();
     navigate('/signup');
  }
  return (
     <>
     <img className='logo' alt='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHUjZin8DS4-dx6RDPuiOwgiZbxStpX5crEWQFMCTat4roXwR7aRGgTj2Vn4vZemBuLx8&usqp=CAU'/>
      { auth ? <ul className='nav-ul'>
        <li><Link to='/'>Product</Link> </li>
        <li><Link to='/add'>Add product</Link> </li>
        {/* <li><Link to='/update'>Update product</Link> </li> */}
        <li><Link to='/profile'>profile</Link> </li>
        <li><Link onClick={logout} to='/signUp'>Logout </Link></li> 
        </ul> 
        :
          <ul className='nav-ul nav-right' >
           <li><Link to='/login'>Login</Link> </li>
        <li><Link to='/signup'>Sign-Up</Link>  </li>
          </ul>
        
        }
    
     </>
  )
}
export default Nav;