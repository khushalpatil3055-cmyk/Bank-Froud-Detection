import React from 'react'
import StatCard from '../Components/StatCard';
import Filters from '../Components/Filters';
import FraudChart from '../Components/FraudChart';
import Piechart from '../Components/Piechart';
import Table from '../Components/Table';

const Dashboard = () => {
  return (
    <div>
      <>
  
      <h2 style={{marginLeft:"50px",color:"#0F3D3E",marginTop:"10px"}}>Dashboard</h2><br /><br />
        <Filters/><br /><br />
        <div className="d-flex justify-content-evenly">

        
      <StatCard
        title="Total Users"
        value="1250"
        percent={62}
        color="#2ce1b4"
      />
      <StatCard
        title="Total Accounts"
        value="2300"
        percent={62}
        color="#3523d7"
      />
       <StatCard
        title="Total Transactions"
        value="8750"
        percent={62}
        color="#3523d7"
      />
      <StatCard
        title="Flagged Transactions"
        value="150"
        percent={62}
        color="#8bd600"
      />
      <StatCard
        title="High-Risk Users"
        value="45"
        percent={62}
        color="#dc3545"
      />

      <StatCard
        title="Daily Fraud Count"
        value="20"
        percent={72}
        color="#f39c12"
      />

     

    </div><br />
 <div className="d-flex" style={{marginTop : "70px"}}>

  

    {/* Line Chart */}
    <div className="" style={{width:"60%",marginLeft:"50px", marginTop:"50px"}}>
      <FraudChart/>
    </div>

    {/* Pie Chart */}
    <div className="" style={{width:"25%",marginLeft:"140px", marginTop:"50px"}}>
      <Piechart/>
    </div>

  

</div> <br /><br />
    <div style={{margin:"3%"}}>
       <Table/>
    </div>
   
    </>
    </div>
  )
}

export default Dashboard
