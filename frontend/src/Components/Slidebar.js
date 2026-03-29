import React from "react";
import { Link } from "react-router-dom";
const Slidebar = ({ open, openset }) => { 
  
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: open ? "0" : "-250px",
        width: "250px",
        height: "100%",
        background: "#0F3D3E",
        color: "white",
        transition: "0.3s",
        padding: "20px",
        zIndex: 1000
      }}
    >
      <button
        onClick={() => openset(false)}
        style={{background:"none", border:"none", color:"white"}}
      >
        ✕
      </button>

      <h4 className="mt-4">Menu</h4><br />

      <ul style={{listStyle:"none", padding:"0"}}>
        <Link to="/" style={{textDecoration:"none", color:"white"}}>Dashboard</Link><br /><br />
        <Link to="/Transaction" style={{textDecoration:"none", color : " white"}}>Transactions</Link><br /><br />
         <Link to="/Alert" style={{textDecoration:"none", color : " white"}}>Fraud Alert</Link><br /><br />
        <Link to="/Users" style={{textDecoration:"none", color : " white"}}>Users</Link>
      </ul>
    </div>
  );
};

export default Slidebar;