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
     <a class="navbar-brand" href="/">

      <img src="LOGO.png" alt="" width="80" height="54"/>
         <a className="navbar-brand fw-bold" href="/" style={{color:"#0F3D3E"}}>FraudGuard</a>
    </a>
   <form className="d-flex">
        <input className="form-control me-2 " type="search" placeholder="Search transaction ID / account number..." aria-label="Search" style={{width:"400px"}}/>
        <button type="button" class="btn btn-primary rounded-circle " style={{backgroundColor:"#0F3D3E"}}>🔍︎</button>
      </form>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Link</a>
        </li>
       
       
        <li className="nav-item">
          <a className="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
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
