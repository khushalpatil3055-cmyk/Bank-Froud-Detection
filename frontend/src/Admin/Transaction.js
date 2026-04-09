import React from 'react'

import Tfilter from '../Components/Tfilter'
import Table from '../Components/Table'

const Transaction = () => {
  return (
    <div>
      <h2 style={{marginLeft:"50px",color:"#0F3D3E",marginTop:"10px"}}>Transaction</h2><br /><br />
     
      <Tfilter></Tfilter><br /><br />
      <div style={{margin:"1%"}}><Table></Table></div>
    </div>
  )
}

export default Transaction
