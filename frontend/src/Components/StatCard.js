import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement } from "chart.js";

ChartJS.register(ArcElement);
 const StatCard = ({title,value,percent,color}) => {

    const data = {
       datasets : [
        {
          data : [percent,100 - percent],
          backgroundColor : [color,"#eaeaea"],
          borderWidth: 0
          }
       ]
    };
    const options = { 
      cutout : "75%",
      plugins : {
        legend : {display : false}
      }
    };
   return (
    <div >
     <div className='card shadow-sm p-3' style={{width:"260px",backgroundColor:"#0F3D3E"}}>
      <div className='d-flex justify-content-between align-items-center'>
          <div>
              <h6 style={{color:"#ffffff"}}>{title}</h6>
              <h4 style={{color:"#ffffff"}}>{value}</h4>
          </div>
          <div style={{width:"60px",color:"#ffffff"}}>
                  <Doughnut data={data} options={options} />

          </div>

      </div>
     </div>
     </div>
   )
 }
 
 export default StatCard
 