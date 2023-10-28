import { Routes, Route, Navigate, NavLink,useRoutes } from "react-router-dom";
import React   from 'react' ; 
import { Outlet } from 'react-router-dom';
import AdminHeader from './ad-header';
import AdminFooter from './ad-footer';
import NotFoundPage from "../../../Site/Pages/NotFoundPage";
import AdminDashboard from "../ad-dashboard";  
import AdminProduct from "../ad-product"; 

const   AdminLayout = ()=>{
 
  
   return (
     <>  
     <AdminHeader />
       {/* <Outlet />    */}
       <Routes>
           <Route  path="" element={<AdminDashboard  />} />  
            <Route path="dashboard/" element={<AdminDashboard  />} />
            <Route path="product/" element={<AdminProduct  />} />
            <Route path="*" element={<NotFoundPage />} />
            </Routes>
      <AdminFooter />
     </>
   )
    
} 
export default AdminLayout
