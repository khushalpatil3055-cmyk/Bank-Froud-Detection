import React,{useState} from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [form , setForm] = useState({
    email : "",
    password : ""
  });
  const handleChange = (e) => {
    setForm({
      ...form,[e.target.name]:e.target.value
    });
  };
  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/login",
        form
      );
      localStorage.setItem("token",res.data.token);
      if(res.data.user.role === "admin"){
        navigate("/Dashboard");
      }
      else{
        navigate("/user-dashboard");
      }
    } catch (e) {
       alert(e.response?.data?.message || "Error");
    }
  }
  return (
   
    <div className="d-flex justify-content-center " >
        <div className='rounded-lg ' >
            
        </div>
        <div className='bg-white'> 
            <h3>Login</h3>
            <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" name="email" value={form.email} onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" name="password" value={form.password}  onChange={handleChange} className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <p style={{cursor: "pointer"}} onClick={()=> navigate("/Signup")}>Register A Account</p>
  </div>
 
  <button type="submit" className="btn btn-primary">Login</button>
</form>
        </div>
    </div>
  )
}

export default Login