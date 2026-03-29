import React from 'react'

const Tfilter = () => {
  return (
    <div className='d-flex justify-content-evenly m-5'>
       <button className='rounded' style={{color:"white",backgroundColor:"#0F3D3E",height:"40px",width:"100px"}}>All</button>
       <button className='rounded' style={{color:"white",backgroundColor:"#0F3D3E",height:"40px",width:"100px"}}>Fraud</button>
       <button className='rounded' style={{color:"white",backgroundColor:"#0F3D3E",height:"40px",width:"100px"}}>Safe</button>
       <button className='rounded' style={{color:"white",backgroundColor:"#0F3D3E",height:"40px",width:"100px"}}>High Risk</button>
    </div>
  )
}

export default Tfilter
