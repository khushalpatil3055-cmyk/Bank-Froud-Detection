import React from 'react'

export default function Login() {
    let boxstyle={
        padding: '19%' ,
        
        
        backgroundColor:"#e64100",
         
    }
  return (
   
    <div className="d-flex justify-content-center " style={{backgroundColor : "#FF8C00",padding : "50px"  , height: '100vh',    overflow: 'hidden',  margin: 0,}}>
        <div className='rounded-lg ' style={boxstyle}>
            
        </div>
        <div className='bg-white' style={{padding: '15%' ,}}> 
            <h3>Login</h3>
            <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </div>
    </div>
  )
}
