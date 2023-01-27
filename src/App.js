import React from 'react'
import Nav from './component/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './component/footer';
import SignUp from './component/signUp';
import PrivateComponent from './component/privateComponent';
import Login from './component/login';
import AddProduct from './component/AddProduct';
import Product from './component/product';
import Update from './component/Update';
 const App = () => {
  return (
    <>
    <BrowserRouter>
    <Nav/>
     <Routes>

      <Route element={<PrivateComponent/>}>
      <Route path='/' element={<Product/>}  /> 
      <Route path='/add' element={<AddProduct />}  /> 
      <Route path='/update/:id' element={<Update/>}  /> 
      <Route path='/profile' element={<h1> Profile somthing </h1>}  /> 
    </Route>

      <Route path='/signUp' element={ <SignUp/>}  /> 
      <Route path='/login' element={ <Login/>}  /> 
     </Routes>
    </BrowserRouter> 
    <Footer/>
    </>
  )
}
export default App;