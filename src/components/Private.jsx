import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';

const isLogin = localStorage.getItem('token');
const Private = () => {
  return isLogin.length>3 ? ( <Outlet/>) : <Navigate to={'/login'}/>
  
}

export default Private