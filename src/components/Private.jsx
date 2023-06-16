import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';

const id = localStorage.getItem('token');

const Private = () => {
  if(id){
    return(
      <div>
        <Outlet/>
      </div>
    )

  }else{
    return(
      <div>
        <Navigate to = '/login'/>
      </div>
    )
  }
  
}

export default Private