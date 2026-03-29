import React from 'react'

const Alertcard = () => {
  return (
  <div className="card" style={{width:"400px", height:"400px", margin:"5% ", background:"white",}}>
  <div className="card-body d-flex flex-column justify-content-evenly" >
    <h5 className="card-title ">High risk</h5>
    <p className="card-text">User : </p>
     <p className="card-text">Amount : </p>
      <p className="card-text">Transaction ID :</p>
       <p className="card-text">Risk Score : </p>
       <p className="card-text">Time : </p>
    <div className='d-flex justify-content-evenly'>
      <button className='rounded' style={{color:"white",backgroundColor:"#0F3D3E",height:"30px",width:"90px"}}>View</button>
      <button className='rounded' style={{color:"white",backgroundColor:"#0F3D3E",height:"30px",width:"90px"}}>Block</button>
      <button className='rounded' style={{color:"white",backgroundColor:"#0F3D3E",height:"30px",width:"90px"}}>Mark Safe</button>
    </div>
    <p className='card-text'>Status :</p>
  </div>
</div>
  )
}

export default Alertcard

