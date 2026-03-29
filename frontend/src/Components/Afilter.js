import React from 'react'

const Afilter = () => {
  return (
    <div className='d-flex justify-content-evenly'>
      <button className='rounded' style={{color:"#0F3D3E",backgroundColor:"#c81c1c",height:"40px",width:"200px"}}>High Risk</button>
       <button className='rounded' style={{color:"#0F3D3E",backgroundColor:"#f0e90f",height:"40px",width:"200px"}}>Suspicious Activity</button>     
      <button className='rounded' style={{color:"#0F3D3E",backgroundColor:"#d97415",height:"40px",width:"200px"}}>Multiple Transactions</button>
    </div>
  )
}

export default Afilter
