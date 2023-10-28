 
import React   from 'react' ; 
import { Outlet } from 'react-router-dom';
import AdminHeader from './ad-header';
import AdminFooter from './ad-footer';
const   AdminLayout = ()=>{
 
  
   return (
     <>  
     <AdminHeader />
       <Outlet />   
      <AdminFooter />
     </>
   )
    
} 
export default AdminLayout
