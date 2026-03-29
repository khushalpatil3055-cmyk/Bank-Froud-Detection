import React from 'react'
import Afilter from './Components/Afilter'
import Alertcard from './Components/Alertcard'

const Alert = () => {
  return (
    <div>
       <h2 style={{marginLeft:"50px",color:"#0F3D3E",marginTop:"10px"}}>Fraud Alerts</h2><br /><br />
       <Afilter/><br />
               <div class="row row-cols-3 ">
            <Alertcard  />
           <Alertcard  />
           <Alertcard  />
           <Alertcard  />
  </div>
</div>
    
  )
}

export default Alert
