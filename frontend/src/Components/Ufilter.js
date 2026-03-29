import React from 'react'

const Ufilter = () => {
  return (
    <div className='d-flex justify-content-evenly'>
      <button className='rounded' style={{color:"white",backgroundColor:"#0F3D3E",height:"40px",width:"100px"}}>All</button>
      <button className='rounded' style={{color:"white",backgroundColor:"#0F3D3E",height:"40px",width:"100px"}}>Active</button>
      <button className='rounded' style={{color:"white",backgroundColor:"#0F3D3E",height:"40px",width:"100px"}}>Blocked</button>
    </div>
  )
}

export default Ufilter
