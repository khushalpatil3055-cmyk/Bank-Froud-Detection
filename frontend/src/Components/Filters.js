import React from 'react'

const Filters = () => {
  return (
    <div className='d-flex justify-content-evenly m-5'>
      <button className='rounded' style={{color:"white",backgroundColor:"#0F3D3E",height:"40px",width:"100px"}}>Today</button>
      <button className='rounded' style={{color:"white",backgroundColor:"#0F3D3E",height:"40px",width:"100px"}}>Last Week</button>
      <button className='rounded' style={{color:"white",backgroundColor:"#0F3D3E",height:"40px",width:"100px"}}>Last Month</button>
      <button className='rounded' style={{color:"white",backgroundColor:"#0F3D3E",height:"40px",width:"100px"}}>Last Year</button>
    </div>
  )
}

export default Filters
