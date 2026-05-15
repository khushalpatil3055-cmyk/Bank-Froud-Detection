import React from "react";

const Table = ({ transactions = [] }) => {

  //  Get row background color based on status
  const getRowColor = (status) => {
    if (status === "flagged") return "#ffd6d6";
    if (status === "suspicious") return "#fff3cd";
    return "white";
  };

  //  Get status badge
  const getStatus = (status) => {
    if (status === "flagged") return (
      <span style={{ color: "red", fontWeight: "bold" }}>⚠ Flagged</span>
    );
    if (status === "suspicious") return (
      <span style={{ color: "#f39c12", fontWeight: "bold" }}>⚡ Suspicious</span>
    );
    return (
      <span style={{ color: "green", fontWeight: "bold" }}>✅ Safe</span>
    );
  };

  //  Get risk score color
  const getRiskColor = (score) => {
    if (score >= 71) return "#dc3545";
    if (score >= 31) return "#f39c12";
    return "#28a745";
  };

  //  Format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div style={{
      background: "white",
      padding: "20px",
      borderRadius: "10px",
      marginTop: "20px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
    }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "20px"
      }}>
        <h5 style={{ color: "#0F3D3E", margin: 0 }}>
          Recent Transactions
        </h5>
        <span style={{
          backgroundColor: "#e8f5f5",
          color: "#0F3D3E",
          padding: "4px 12px",
          borderRadius: "10px",
          fontSize: "13px"
        }}>
          Last {transactions.length} transactions
        </span>
      </div>

      {/* ✅ Empty state */}
      {transactions.length === 0 ? (
        <div style={{ textAlign: "center", padding: "40px", color: "#888" }}>
          <h3>📋</h3>
          <p>No transactions yet</p>
        </div>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#f3f3f3" }}>
              <th style={{ textAlign: "center", padding: "12px" }}>ID</th>
              <th style={{ textAlign: "center", padding: "12px" }}>Sender</th>
              <th style={{ textAlign: "center", padding: "12px" }}>Receiver</th>
              <th style={{ textAlign: "center", padding: "12px" }}>Amount</th>
              <th style={{ textAlign: "center", padding: "12px" }}>Date</th>
              <th style={{ textAlign: "center", padding: "12px" }}>Risk Score</th>
              <th style={{ textAlign: "center", padding: "12px" }}>Status</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((txn, index) => (
              <tr
                key={`${txn._id}-${index}`}
                style={{
                  background: getRowColor(txn.status),
                  textAlign: "center",
                  borderBottom: "1px solid #f0f0f0"
                }}
              >
                {/*  Transaction code */}
                <td style={{ padding: "12px", fontSize: "13px", fontWeight: "500" }}>
                  {txn.txn_code || txn._id?.slice(-6)}
                </td>

                {/* Sender name + account */}
                <td style={{ padding: "12px" }}>
                  <div style={{ fontWeight: "500" }}>
                    {txn.sender_id?.name || "Unknown"}
                  </div>
                  <div style={{ fontSize: "12px", color: "#888" }}>
                    {txn.sender_account}
                  </div>
                </td>

                {/*  Receiver name + account */}
                <td style={{ padding: "12px" }}>
                  <div style={{ fontWeight: "500" }}>
                    {txn.receiver_id?.name || "Unknown"}
                  </div>
                  <div style={{ fontSize: "12px", color: "#888" }}>
                    {txn.receiver_account}
                  </div>
                </td>

                {/*  Amount */}
                <td style={{ padding: "12px", fontWeight: "500" }}>
                  ₹{txn.amount?.toLocaleString('en-IN')}
                </td>

                {/* Date formatted */}
                <td style={{ padding: "12px", fontSize: "13px" }}>
                  {formatDate(txn.createdAt)}
                </td>

                {/* ✅ Risk score with color */}
                <td style={{ padding: "12px" }}>
                  <span style={{
                    backgroundColor: getRiskColor(txn.risk_score) + "22",
                    color: getRiskColor(txn.risk_score),
                    padding: "4px 10px",
                    borderRadius: "10px",
                    fontWeight: "500",
                    fontSize: "13px"
                  }}>
                    {txn.risk_score}/100
                  </span>
                </td>

                {/* Status badge */}
                <td style={{ padding: "12px" }}>
                  {getStatus(txn.status)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;