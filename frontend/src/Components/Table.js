import React from "react";

const transactions = [
  { id: "TX1001", sender: "ACC123", receiver: "ACC456", amount: 2000, date: "15 Mar 2026", risk: 10, flagged: false },
  { id: "TX1002", sender: "ACC789", receiver: "ACC222", amount: 45000, date: "15 Mar 2026", risk: 85, flagged: true },
  { id: "TX1003", sender: "ACC555", receiver: "ACC999", amount: 1200, date: "15 Mar 2026", risk: 15, flagged: false },
  { id: "TX1004", sender: "ACC888", receiver: "ACC101", amount: 70000, date: "15 Mar 2026", risk: 90, flagged: true }
];

const Table = () => {
  return (
    <div style={{ background: "white", padding: "20px", borderRadius: "10px", marginTop: "20px" }}>
      <h2>Recent Transactions / Alerts</h2><br /><br />
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "10px" }}>
        
        <thead>
          <tr style={{ background: "#f3f3f3" }}>
            {/* ✅ textAlign added to all headers */}
            <th style={{ textAlign: "center", padding: "10px" }}>ID</th>
            <th style={{ textAlign: "center", padding: "10px" }}>Sender</th>
            <th style={{ textAlign: "center", padding: "10px" }}>Receiver</th>
            <th style={{ textAlign: "center", padding: "10px" }}>Amount</th>
            <th style={{ textAlign: "center", padding: "10px" }}>Date</th>
            <th style={{ textAlign: "center", padding: "10px" }}>Risk Score</th>
            <th style={{ textAlign: "center", padding: "10px" }}>Status</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((txn, index) => (
            // ✅ index added to key to avoid duplicate key warning
            <tr key={`${txn.id}-${index}`}
              style={{ background: txn.flagged ? "#ffd6d6" : "white", textAlign: "center" }}>
              <td style={{ padding: "10px" }}>{txn.id}</td>
              <td style={{ padding: "10px" }}>{txn.sender}</td>
              <td style={{ padding: "10px" }}>{txn.receiver}</td>
              <td style={{ padding: "10px" }}>₹{txn.amount}</td>
              <td style={{ padding: "10px" }}>{txn.date}</td>
              <td style={{ padding: "10px" }}>{txn.risk}</td>
              <td style={{ padding: "10px", fontWeight: "bold", color: txn.flagged ? "red" : "green" }}>
                {txn.flagged ? "⚠ Flagged" : "Safe"}
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default Table;