 
import React   from 'react' ;  
import { NavLink } from 'react-router-dom';
const   AdminHeader = ()=>{
 
  
   return (
     <>  
     <div className="row App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
           <NavLink className="navbar-brand " to={""}> admin home   </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link " index > current route </NavLink>
              <NavLink className="nav-link " to={""} > ad-home </NavLink>  
              <NavLink className="nav-link " to={"dashboard/"}>Dashboard</NavLink>
              <NavLink className="nav-link " to={"product/"}>product</NavLink>

              <NavLink className="nav-link " to={"/"} > site hme </NavLink>  
               
            </div>
          </div>
        </div>
      </nav>
      </div>
     </>
   )
    
} 
export default AdminHeader
