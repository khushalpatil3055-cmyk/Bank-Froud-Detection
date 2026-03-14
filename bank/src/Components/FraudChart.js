import React from 'react';
import { Line } from 'react-chartjs-2';

import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);


const FraudChart = () => {
    const data = {
           labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            datasets : [
                {
                    label : "Fraud Transactions",
                    data :[6,7,8,5,8,9,3],
                    borderColor :"#dc3545",
                     backgroundColor: "rgba(220,53,69,0.2)",
                     tension: 0.4
                },
                {
                     label: "Safe Transactions",
                      data: [30, 40, 35, 50, 45, 60, 55],
                     borderColor: "#0F3D3E",
                      backgroundColor: "rgba(15,61,62,0.2)",
                     tension: 0.4
                }
            ]
    };
    const options = {
        responsive:true,
        plugins : {
            legend : {
                position : "top"
            }
        }
    }
  return (
   <><div className='d-inline shadow-sm p-4 mt-4'>
        <h5 style={{color:"#0F3D3E"}}>Fraud Transactions This Week</h5>
        <Line data={data} options={options}></Line>
    </div>
   
   </>
    
  )
}

export default FraudChart
