import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import axios from "axios";
import Login from "./Login";

const Signup = () => {
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    name : "",
    email : "",
    password:""
  });
  const handeleChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,

    });
  };
  const handelsubmit = async (e) => {
      e.preventDafault();
      try {
        const response = await axios.post("http://localhost:3000/api/auth/signup",formData);
        alert(response.data.message);
         setFormData({ name: "", email: "", password: "" });
      } catch  (error) {
        console.error(error);
      alert(error.response?.data?.message || "Something went wrong");
      }
  };
  const style = {
    container : {
      display : "flex",
      justifyContent : "center",
      alignItems : "center",
      height: "100vh",
      backgroundColor: "#f4f4f4",

    },
    form : {
      display : "flex",
      flexDirection : "column",
      width : "300px",
      padding : "20px",
      backgroundColor: "#fff",
      borderRadius: "10px",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    },
    input : {
      marginBottom : "15px",
      padding : "10px",
      frontSize : "16px",
      border : "1px solid #ccc",
      borderRadius : "5px",
    },
    button : { 
      padding : "10px",
      frontSize : "16px",
      backgroundColor :"#007bff",
      color : "#fff",
      boreder : "none",
      borderRadius : "5px",
      cursor : "pointer"
    }
  }
  return (
   <div style={style.container}>
      <form style={style.form}>
        <h2>Signup Form</h2>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          style={style.input}
          value={formData.name}
          onChange={handeleChange}
          
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
         style={style.input}
          value={formData.email}
          onChange={handeleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
         style={style.input}
          value={formData.password}
          onChange={handeleChange}
        />
        <p   style={{ cursor: "pointer", color: "blue" }}
              onClick={() => navigate("/")}>Go To Login</p>
        <button type="submit" style={style.button}>
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default Signup
