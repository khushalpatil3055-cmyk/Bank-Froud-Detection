import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);
const Piechart = () => {
   const data = {
        labels:["Fraud Transactions", "Safe Transactions"],
        datasets :[
            {
                data :[71,163],
                 backgroundColor: [ "#dc3545","#0F3D3E"],
                  borderWidth: 0
            }
        ]
    };
    const options = {
        cutout:"70%",
        plugins :{
            legend :{
            position: "bottom"
            }
        }
    }
  return (
    <div className=''>
            <h5 style={{color:"#0F3D3E", textAlign:"center", marginBottom:"50px"}}> Fraud vs Safe Transactions</h5>
            <Doughnut data={data} options={options}/>
    </div>
  )
}

export default Piechart
