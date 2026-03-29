import React, { useState } from "react";
import Slidebar from './Slidebar'

const Nav = () => {
    const [open,openset] = useState(false);
  return (
    <>
    <Slidebar open={open} openset={openset} />
    <div>
      
    
           <div>
       
      <nav className="navbar navbar-expand-lg navbar-light border-top border-bottom" style={{backgroundColor : "white", color:"#0F3D3E"}}>
     <div className="container-fluid" style={{color:"white"}}>
      <button
            className="btn me-3"
            onClick={() => openset(true)}
            style={{fontSize:"22px", color:"#0F3D3E"}}
          >
            ☰
          </button>
     <a className="navbar-brand" href="/">

      <img src="LOGO.png" alt="" width="80" height="54"/>
         <a className="navbar-brand fw-bold" href="/" style={{color:"#0F3D3E"}}>FraudGuard</a>
    </a>
   <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search transaction ID / account number..." aria-label="Search" style={{width:"600px",marginLeft : "250px"}}/>
        <button type="button" className="btn btn-primary rounded-circle " style={{backgroundColor:"#0F3D3E"}}>🔍︎</button>
      </form>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
           {/* Bell Icon */}
  <button
    type="button"
    className="btn rounded-circle"
    style={{ backgroundColor: "#0F3D3E", color: "white" , marginLeft:"400px" }}
  >
    <i className="bi bi-bell-fill"></i>
  </button>
      
 

  <div className="dropdown" style={{marginLeft:"100px",backgroundColor: "#0F3D3E" }}>
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor: "#0F3D3E"}}>
    <i className="bi bi-person-fill"></i>
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="/">Admin</a></li>
    <li><a className="dropdown-item" href="/">Customer</a></li>
   
  </ul>
</div>
       
      </ul>
      
    </div>
  </div>
</nav>

    </div>
   

  
    </div>
    </>
  )
}

export default Nav
