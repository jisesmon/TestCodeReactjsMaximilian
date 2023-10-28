import { Routes, Route, Navigate, NavLink,useRoutes } from "react-router-dom";
import "./App.css";
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
import NotFoundPage from "./Site/Pages/NotFoundPage";
import PageCh20_DetialBookPage from "./Components/testCh20/PageCh20_DetialBookPage"; 
import SiteHome from "./Site/Pages/SiteHome";
import AdminLayout from "./Admin/Pages/Layout/ad-layout";
import AdminDashboard from "./Admin/Pages/ad-dashboard";
import AdminProduct from "./Admin/Pages/ad-product";

export const AppRoutes=()=> {
    return useRoutes(
      [
         
        {index:'true', path:'',element:<SiteHome/> ,  },
        // { path:'/',element:<SiteHome/> ,  },
        {path:'/home',element:<SiteHome/>},
        {path:'/book',element:<Book />},
        {path:'/chapter8',element:<UserCC8 />},
        {path:'/chapter9',element:<UserCC9 />},
        {path:'/chapter10',element:<PageCh10 />},
        {path:'/chapter12',element:<PageCh12 />},
        {path:'/chapter13',element:<PageCh13 />},
        {path:'/chapter15',element:<PageCh15 />},
        {path:'/chapter16',element:<PageCh16 />},
        {path:'/chapter17',element:<PageCh17 />},
        {path:'/chapter18',element:<PageCh18 />},
        {path:'/chapter19',element:<PageCh19 />},
        {path:'/chapter20',element:<PageCh20 />,
          children:[ 
            { path:'detialbook/:id'  ,element:<PageCh20_DetialBookPage /> },
            {path:'*',element:<NotFoundPage />},
        ]},
        {path:'/admin',element:<AdminLayout />,
          children:[ 
             //error { path:'/'  ,element:<Navigate replace to={"dashboard"} /> },
          { path:'',   element:<AdminDashboard /> }, 
          { path:'dashboard'  ,element:<AdminDashboard /> },
          { path:'product'  ,element:<AdminProduct /> },
          {path:'*',element:<NotFoundPage />},
        ]},
        {path:'*',element:<NotFoundPage />},
      ]
    )
     
  } 