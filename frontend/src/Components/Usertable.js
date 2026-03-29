import React from 'react'
const Userdata = [

]
const Usertable = () => {
  return (
    <div style={{background:"white",padding:"20px",borderRadius:"10px",marginTop:"20px",}}>
      
      <table style={{width:"100%",borderCollapse:"collapse",marginTop:"10px"}}>
            <thead>
           <th>Name</th>
            <th>Email</th>
            <th>Account No</th>
            <th>Risk Score</th>
            <th>Status</th>
            <th>Action</th>
            </thead>
             <tbody>
            {Usertable.map((txn)=>(
              <tr key={txn.id} style={{ background: txn.flagged ? "#ffd6d6" : "white",
                textAlign: "center"}}>
                  <td></td>
                </tr>
                
            ))}
        
        </tbody>

      </table>
    </div>
  )
}

export default Usertable
