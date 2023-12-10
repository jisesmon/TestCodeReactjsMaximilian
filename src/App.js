import { Routes, Route, Navigate, NavLink,useRoutes } from "react-router-dom";
import "./App.css";
import React ,{Suspense}  from 'react' ; 
import Book from "./Components/Book/Book";
import UserCC8 from "./Components/Users_C8/User_c8";
import UserCC9 from "./Components/Users_C9/User_c9";
import PageCh10 from "./Components/testCh10/pageCh10";
import PageCh12 from "./Components/testCh12/pageCh12";
import PageCh13 from "./Components/testCh13/pageCh13";
import PageCh15 from "./Components/testCh15/pageCh15";
import PageCh16 from "./Components/testCh16/pageCh16";
import PageCh17 from "./Components/testCh17/pageCh17";
import PageCh18 from "./Components/testCh18/pageCh18";
import PageCh19 from "./Components/testCh19/pageCh19";
import PageCh20 from "./Components/testCh20/PageCh20";
import PageCh24 from "./Components/testCh24/PageCh24";
import NotFoundPage from "./Site/Pages/NotFoundPage";
import PageCh20_DetialBookPage from "./Components/testCh20/PageCh20_DetialBookPage"; 
import SiteHome from "./Site/Pages/SiteHome";
//import AdminDashboard from "./Admin/Pages/ad-dashboard";
//import AdminLayout from "./Admin/Pages/Layout/ad-layout";  
//import AdminProduct from "./Admin/Pages/ad-product"; 
import SiteHeader from "./Site/Pages/Layout/site-header";
import SiteFooter from "./Site/Pages/Layout/site-footer";
import { AppRoutes } from "./AppRoutes";
 import { useLocation } from "react-router-dom";

 const AdminLayout =React.lazy(()=>import('./Admin/Pages/Layout/ad-layout'));

function App() {
  const loction= useLocation();
  console.log(' use Location ',loction);
const isPageSiteOrAdmin=!loction.pathname.startsWith('/admin');
  return (
    <div className="row App">
    {isPageSiteOrAdmin && <SiteHeader/>}
      {/* Ok way 1 */}
      {/* <AppRoutes  /> */}
     <Suspense fallback={<div>laoding....</div>}>
      {/* Ok way 2 */}
      <Routes>
        {/* <Route  index="true" path="/" element={<Navigate replace to={"/home"} />} /> */}
        <Route index  path="" element={<SiteHome />} />
        {/* !! error <Route  path="/" element={<SiteHome />} /> */}
        <Route path="/home" element={<SiteHome />} />
        <Route path="/Book" element={<Book />} />
        <Route path="/chapter8" element={<UserCC8 />} />
        <Route path="/chapter9" element={<UserCC9 />} />
        <Route path="/chapter10" element={<PageCh10 />} />
        <Route path="/chapter12" element={<PageCh12 />} />
        <Route path="/chapter13" element={<PageCh13 />} />
        <Route path="/chapter15" element={<PageCh15 />} />
        <Route path="/chapter16" element={<PageCh16 />} />
        <Route path="/chapter17" element={<PageCh17 />} />
        <Route path="/chapter18" element={<PageCh18 />} />
        <Route path="/chapter19" element={<PageCh19 />} />
        <Route path="/chapter20/*" element={<PageCh20 />} >
            <Route path="detialbook/:id" element={<PageCh20_DetialBookPage  />} />
            <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path="/chapter24/*" element={<PageCh24 />} />
        <Route path="/admin/*" element={<AdminLayout />} >
            {/* error  <Route path="/" element={<Navigate replace to={"dashboard"}  />} /> */}  
            {/* <Route  path="" element={<AdminDashboard  />} />  
            <Route path="dashboard/" element={<AdminDashboard  />} />
            <Route path="product/" element={<AdminProduct  />} />
            <Route path="*" element={<NotFoundPage />} /> */}
        </Route>
         <Route path="*" element={<NotFoundPage />} />
      </Routes>  
      </Suspense>
       {isPageSiteOrAdmin && <SiteFooter/>}
      <div>
        
      </div>
    </div>
  );
}

export default App;
