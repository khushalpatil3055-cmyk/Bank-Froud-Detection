import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS, LineElement, CategoryScale,
  LinearScale, PointElement, Tooltip, Legend
} from "chart.js";
import { getTodayStats, getMonthStats, getYearlyStats } from '../api/admin';

ChartJS.register(LineElement, CategoryScale, LinearScale,
  PointElement, Tooltip, Legend);

const FraudChart = ({ data = [], activeFilter }) => {

  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(false);

  // ✅ Fetch chart data when filter changes
  useEffect(() => {
    const fetchChartData = async () => {
      setLoading(true);
      try {
        if (activeFilter === "today") {
          const res = await getTodayStats();
          setChartData(res.data.hours);

        } else if (activeFilter === "month") {
          const res = await getMonthStats();
          setChartData(res.data.days);

        } else if (activeFilter === "year") {
          const res = await getYearlyStats();
          setChartData(res.data.months);
        }
      } catch (err) {
        console.error("Chart fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchChartData();
  }, [activeFilter]); // ✅ runs every time filter changes

  // ✅ Extract labels
  const labels = chartData.length > 0
    ? chartData.map(d => d.label || d.date || d.month || "")
    : [];

  // ✅ Extract fraud counts
  const fraudCounts = chartData.length > 0
    ? chartData.map(d => d.fraud !== undefined ? d.fraud : d.count || 0)
    : [];

  // ✅ Chart title based on filter
  const chartTitle = () => {
    if (activeFilter === "today") return "Today's Fraud (Hourly)";
    if (activeFilter === "month") return "This Month's Fraud (Daily)";
    if (activeFilter === "year") return "This Year's Fraud (Monthly)";
    return "Fraud Transactions";
  };

  const lineData = {
    labels,
    datasets: [
      {
        label: "Fraud Transactions",
        data: fraudCounts,
        borderColor: "#dc3545",
        backgroundColor: "rgba(220,53,69,0.2)",
        tension: 0.4,
        fill: true
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      tooltip: {
        callbacks: {
          label: (context) => `Fraud: ${context.parsed.y}`
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 1 }
      }
    }
  };

  return (
    <div style={{
      backgroundColor: "white",
      padding: "5%",
      paddingRight: "6%",
      borderRadius: "10px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
    }}>
      <div className='p-4 mt-2'>

        {/* ✅ Dynamic title */}
        <h5 style={{ color: "#0F3D3E" }}>{chartTitle()}</h5>

        {/* ✅ Loading */}
        {loading ? (
          <div style={{ textAlign: "center", padding: "60px" }}>
            <div className="spinner-border" style={{ color: "#0F3D3E" }} />
            <p className="mt-2" style={{ color: "#0F3D3E" }}>Loading chart...</p>
          </div>

        // ✅ No fraud data
        ) : fraudCounts.length === 0 || fraudCounts.every(c => c === 0) ? (
          <div style={{
            textAlign: "center",
            padding: "60px",
            color: "#888"
          }}>
            <h1>✅</h1>
            <p>No fraud transactions for this period!</p>
          </div>

        // ✅ Show chart
        ) : (
          <Line data={lineData} options={options} />
        )}

      </div>
    </div>
  );
};

export default FraudChart;