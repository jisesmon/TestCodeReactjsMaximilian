 
import React   from 'react' ;  
import { NavLink } from 'react-router-dom';
const   SiteHeader = ()=>{
 
  
   return (
     <>  
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
           <NavLink className="navbar-brand " to={"/"}> ReactTest  </NavLink>
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
              <NavLink className="nav-link " to={"/"}> home  </NavLink>
              <NavLink className="nav-link " to={"/book"}>book</NavLink>
              <NavLink className="nav-link " to={"/chapter8"}>chap8</NavLink>
              <NavLink className="nav-link " to={"/chapter9"}>chap9</NavLink>
              <NavLink className="nav-link " to={"/chapter10"}>chap10</NavLink>
              <NavLink className="nav-link " to={"/chapter12"}>chap12</NavLink>
              <NavLink className="nav-link " to={"/chapter13"}>chap13</NavLink>
              <NavLink className="nav-link " to={"/chapter15"}>chap15</NavLink>
              <NavLink className="nav-link " to={"/chapter16"}>chap16</NavLink>
              <NavLink className="nav-link " to={"/chapter17"}>chap17</NavLink>
              <NavLink className="nav-link " to={"/chapter18"}>chap18</NavLink>
              <NavLink className="nav-link " to={"/chapter19"}>chap19</NavLink>
              <NavLink className="nav-link " to={"/chapter20"}>chap20</NavLink>
              <NavLink className="nav-link " to={"/chapter24"}>chap24</NavLink>
              <NavLink className="nav-link " to={"/admin"}>admin</NavLink>
            </div>
          </div>
        </div>
      </nav>
     </>
   )
    
} 
export default SiteHeader
