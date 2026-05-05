import React, { useState, useEffect } from 'react';
import StatCard from '../Components/StatCard';
import Filters from '../Components/Filters';
import FraudChart from '../Components/FraudChart';
import Piechart from '../Components/Piechart';
import Table from '../Components/Table';
import { getStats } from '../api/admin';

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeFilter, setActiveFilter] = useState("today"); // ✅ filter state

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await getStats();
        setStats(res.data);
      } catch (err) {
        setError("Failed to load dashboard data");
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  // ✅ Get fraud count based on active filter
  const getFraudCount = () => {
    if (!stats) return 0;
    if (activeFilter === "today") return stats.todayFraud;
    if (activeFilter === "month") return stats.monthFraud;
    if (activeFilter === "year") return stats.yearFraud;
  };

  // ✅ Get transaction count based on active filter
  const getTransactionCount = () => {
    if (!stats) return 0;
    if (activeFilter === "today") return stats.todayTransactions;
    if (activeFilter === "month") return stats.monthTransactions;
    if (activeFilter === "year") return stats.yearTransactions;
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center"
        style={{ height: "80vh" }}>
        <div className="text-center">
          <div className="spinner-border" style={{ color: "#0F3D3E" }} role="status" />
          <p className="mt-3" style={{ color: "#0F3D3E" }}>Loading Dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="d-flex justify-content-center align-items-center"
        style={{ height: "80vh" }}>
        <div className="alert alert-danger">{error}</div>
      </div>
    );
  }

  // ✅ Button style helper
  const btnStyle = (filter) => ({
    padding: "8px 20px",
    marginRight: "10px",
    backgroundColor: activeFilter === filter ? "#0F3D3E" : "white",
    color: activeFilter === filter ? "white" : "#0F3D3E",
    border: "1px solid #0F3D3E",
    borderRadius: "20px",
    cursor: "pointer",
    fontWeight: activeFilter === filter ? "500" : "400",
    transition: "all 0.2s"
  });

  return (
    <div>
      <>
        <h2 style={{ marginLeft: "50px", color: "#0F3D3E", marginTop: "10px" }}>
          Dashboard
        </h2><br />

        {/* ✅ Filter Buttons */}
        <div style={{ marginLeft: "50px", marginBottom: "20px" }}>
          <button style={btnStyle("today")} onClick={() => setActiveFilter("today")}>
            Today
          </button>
          <button style={btnStyle("month")} onClick={() => setActiveFilter("month")}>
            This Month
          </button>
          <button style={btnStyle("year")} onClick={() => setActiveFilter("year")}>
            This Year
          </button>
        </div>

        {/* ✅ Active filter label */}
        <div style={{ marginLeft: "50px", marginBottom: "20px" }}>
          <span style={{
            backgroundColor: "#e8f5f5",
            color: "#0F3D3E",
            padding: "4px 12px",
            borderRadius: "10px",
            fontSize: "13px"
          }}>
            Showing data for: {
              activeFilter === "today" ? "Today" :
              activeFilter === "month" ? "This Month" : "This Year"
            }
          </span>
        </div>

        {/* ✅ Stat Cards — change based on filter */}
        <div className="d-flex justify-content-evenly">
          <StatCard
            title="Total Users"
            value={stats?.totalUsers || 0}
            percent={62}
            color="#2ce1b4"
          />
          <StatCard
            title="Total Transactions"
            value={getTransactionCount()}
            percent={62}
            color="#3523d7"
          />
          <StatCard
            title="Fraud Detected"
            value={getFraudCount()}
            percent={62}
            color="#dc3545"
          />
          <StatCard
            title="Flagged"
            value={stats?.totalFlagged || 0}
            percent={62}
            color="#8bd600"
          />
          <StatCard
            title="Suspicious"
            value={stats?.totalSuspicious || 0}
            percent={62}
            color="#f39c12"
          />
          <StatCard
            title="Pending Alerts"
            value={stats?.pendingAlerts || 0}
            percent={72}
            color="#e74c3c"
          />
        </div>

        {/* ✅ Fraud Summary Cards */}
        <div className="d-flex justify-content-evenly mt-4 mx-4">
          <div
            onClick={() => setActiveFilter("today")}
            style={{
              background: activeFilter === "today" ? "#0F3D3E" : "white",
              color: activeFilter === "today" ? "white" : "#0F3D3E",
              padding: "15px 25px",
              borderRadius: "10px",
              textAlign: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              cursor: "pointer",
              transition: "all 0.2s",
              minWidth: "150px"
            }}>
            <p style={{ margin: 0, fontSize: "13px", opacity: 0.8 }}>Today's Fraud</p>
            <h4 style={{ margin: 0 }}>{stats?.todayFraud || 0}</h4>
          </div>

          <div
            onClick={() => setActiveFilter("month")}
            style={{
              background: activeFilter === "month" ? "#0F3D3E" : "white",
              color: activeFilter === "month" ? "white" : "#0F3D3E",
              padding: "15px 25px",
              borderRadius: "10px",
              textAlign: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              cursor: "pointer",
              transition: "all 0.2s",
              minWidth: "150px"
            }}>
            <p style={{ margin: 0, fontSize: "13px", opacity: 0.8 }}>This Month</p>
            <h4 style={{ margin: 0 }}>{stats?.monthFraud || 0}</h4>
          </div>

          <div
            onClick={() => setActiveFilter("year")}
            style={{
              background: activeFilter === "year" ? "#0F3D3E" : "white",
              color: activeFilter === "year" ? "white" : "#0F3D3E",
              padding: "15px 25px",
              borderRadius: "10px",
              textAlign: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              cursor: "pointer",
              transition: "all 0.2s",
              minWidth: "150px"
            }}>
            <p style={{ margin: 0, fontSize: "13px", opacity: 0.8 }}>This Year</p>
            <h4 style={{ margin: 0 }}>{stats?.yearFraud || 0}</h4>
          </div>

          <div style={{
            background: "white",
            padding: "15px 25px",
            borderRadius: "10px",
            textAlign: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            minWidth: "150px"
          }}>
            <p style={{ color: "#888", margin: 0, fontSize: "13px" }}>Today Transactions</p>
            <h4 style={{ color: "#0F3D3E", margin: 0 }}>{stats?.todayTransactions || 0}</h4>
          </div>
        </div>

        <div className="d-flex" style={{ marginTop: "70px" }}>
          <div style={{ width: "60%", marginLeft: "50px", marginTop: "50px" }}>
            <FraudChart data={stats?.last7Days || []}   activeFilter={activeFilter}  />
          </div>
          <div style={{ width: "25%", marginLeft: "140px", marginTop: "50px" }}>
            <Piechart
              safe={stats?.totalTransactions - stats?.totalFlagged - stats?.totalSuspicious || 0}
              suspicious={stats?.totalSuspicious || 0}
              flagged={stats?.totalFlagged || 0}
            />
          </div>
        </div>

        <br /><br />
        <div style={{ margin: "3%" }}>
          <Table />
        </div>
      </>
    </div>
  );
};

export default Dashboard;