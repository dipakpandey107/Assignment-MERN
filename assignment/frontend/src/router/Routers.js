import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import About from '../Pages/About';
import HeadTail from '../Pages/HeadTail';

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to ='/home'/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/headtail' element={<HeadTail/>}/>
    </Routes>
  )
}
export default Routers
