import React from 'react'
import Ufilter from './Components/Ufilter'
import Usertable from './Components/Usertable'

const Users = () => {
  return (
    <div>
      <h2 style={{marginLeft:"50px",color:"#0F3D3E",marginTop:"10px"}}>Users</h2><br /><br />
      <Ufilter/><br /><br />
      <Usertable/>
    </div>
  )
}

export default Users
