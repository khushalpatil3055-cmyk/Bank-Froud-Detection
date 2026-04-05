import React from 'react'

const Signup = () => {
  return (
   <div className="d-flex justify-content-center " >
        <div className='rounded-lg ' >
            
        </div>
        <div className='bg-white'> 
            <h3>Signup</h3>
            <form>
  <div className="mb-3">
    <label htmlFor="exampleInputName1" className="form-label">Name:-</label>
    <input type="email" className="form-control" id="exampleInputName1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
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

export default Signup
