import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';  
import FormClientes from './components/FormClientes';
import Menu from './components/navbar';
import Admin from './components/Admin'
import Homepage from './components/homepage'

export default function App() {
  return (

    <BrowserRouter>
    <Menu/> 
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/FormClientes' element={<FormClientes/>}/>
      <Route path='/Admin' element={<Admin/>}/> 
      <Route  path='/clientes/:id/edit' element={<FormClientes/>}/>
    </Routes>
   </BrowserRouter>
  
  )
}

