import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

// Accept real props from Dashboard
const Piechart = ({ safe = 0, suspicious = 0, flagged = 0 }) => {

  const total = safe + suspicious + flagged;

  const data = {
    labels: ["Safe", "Suspicious", "Flagged"],
    datasets: [
      {
        data: [safe, suspicious, flagged],
        backgroundColor: [
          "#0F3D3E",   // safe → da rk green
          "#f39c12",   // suspicious → orange
          "#dc3545"    // flagged → red
        ],
        borderWidth: 0
      }
    ]
  };

  const options = {
    cutout: "70%",
    plugins: {
      legend: {
        position: "bottom"
      },
      tooltip: {
        callbacks: {
          // ✅ Show percentage in tooltip
          label: (context) => {
            const value = context.parsed;
            const percent = total > 0
              ? ((value / total) * 100).toFixed(1)
              : 0;
            return ` ${context.label}: ${value} (${percent}%)`;
          }
        }
      }
    }
  };

  return (
    <div style={{
      backgroundColor: "white",
      padding: "5%",
      paddingTop: "10%",
      paddingBottom: "10%",
      borderRadius: "10px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
    }}>
      <h5 style={{ color: "#0F3D3E", textAlign: "center" }}>
        Fraud vs Safe Transactions
      </h5>

      {/* ✅ Show message if no transactions */}
      {total === 0 ? (
        <div style={{ textAlign: "center", padding: "40px", color: "#888" }}>
          <h1>📊</h1>
          <p>No transaction data yet</p>
        </div>
      ) : (
        <>
          <Doughnut data={data} options={options} />

          {/* ✅ Summary below chart */}
          <div style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "20px"
          }}>
            <div style={{ textAlign: "center" }}>
              <p style={{ margin: 0, fontSize: "12px", color: "#888" }}>Safe</p>
              <p style={{ margin: 0, fontWeight: "500", color: "#0F3D3E" }}>{safe}</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <p style={{ margin: 0, fontSize: "12px", color: "#888" }}>Suspicious</p>
              <p style={{ margin: 0, fontWeight: "500", color: "#f39c12" }}>{suspicious}</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <p style={{ margin: 0, fontSize: "12px", color: "#888" }}>Flagged</p>
              <p style={{ margin: 0, fontWeight: "500", color: "#dc3545" }}>{flagged}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Piechart;