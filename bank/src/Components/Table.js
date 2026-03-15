import React from "react";
const transactions = [
  {
    id: "TX1001",
    sender: "ACC123",
    receiver: "ACC456",
    amount: 2000,
    date: "15 Mar 2026",
    risk: 10,
    flagged: false
  },
  {
    id: "TX1002",
    sender: "ACC789",
    receiver: "ACC222",
    amount: 45000,
    date: "15 Mar 2026",
    risk: 85,
    flagged: true
  },
  {
    id: "TX1003",
    sender: "ACC555",
    receiver: "ACC999",
    amount: 1200,
    date: "15 Mar 2026",
    risk: 15,
    flagged: false
  }, {
    id: "TX1003",
    sender: "ACC555",
    receiver: "ACC999",
    amount: 1200,
    date: "15 Mar 2026",
    risk: 15,
    flagged: false
  }, {
    id: "TX1003",
    sender: "ACC555",
    receiver: "ACC999",
    amount: 1200,
    date: "15 Mar 2026",
    risk: 15,
    flagged: false
  }, {
    id: "TX1003",
    sender: "ACC555",
    receiver: "ACC999",
    amount: 1200,
    date: "15 Mar 2026",
    risk: 15,
    flagged: false
  }, {
    id: "TX1003",
    sender: "ACC555",
    receiver: "ACC999",
    amount: 1200,
    date: "15 Mar 2026",
    risk: 15,
    flagged: false
  }, {
    id: "TX1003",
    sender: "ACC555",
    receiver: "ACC999",
    amount: 1200,
    date: "15 Mar 2026",
    risk: 15,
    flagged: false
  }, {
    id: "TX1003",
    sender: "ACC555",
    receiver: "ACC999",
    amount: 1200,
    date: "15 Mar 2026",
    risk: 15,
    flagged: false
  }, {
    id: "TX1003",
    sender: "ACC555",
    receiver: "ACC999",
    amount: 1200,
    date: "15 Mar 2026",
    risk: 15,
    flagged: false
  }, {
    id: "TX1003",
    sender: "ACC555",
    receiver: "ACC999",
    amount: 1200,
    date: "15 Mar 2026",
    risk: 15,
    flagged: false
  }, {
    id: "TX1003",
    sender: "ACC555",
    receiver: "ACC999",
    amount: 1200,
    date: "15 Mar 2026",
    risk: 15,
    flagged: false
  }, {
    id: "TX1003",
    sender: "ACC555",
    receiver: "ACC999",
    amount: 1200,
    date: "15 Mar 2026",
    risk: 15,
    flagged: false
  }, {
    id: "TX1003",
    sender: "ACC555",
    receiver: "ACC999",
    amount: 1200,
    date: "15 Mar 2026",
    risk: 15,
    flagged: false
  }, {
    id: "TX1003",
    sender: "ACC555",
    receiver: "ACC999",
    amount: 1200,
    date: "15 Mar 2026",
    risk: 15,
    flagged: false
  }, {
    id: "TX1003",
    sender: "ACC555",
    receiver: "ACC999",
    amount: 1200,
    date: "15 Mar 2026",
    risk: 15,
    flagged: false
  }, {
    id: "TX1003",
    sender: "ACC555",
    receiver: "ACC999",
    amount: 1200,
    date: "15 Mar 2026",
    risk: 15,
    flagged: false
  }, {
    id: "TX1003",
    sender: "ACC555",
    receiver: "ACC999",
    amount: 1200,
    date: "15 Mar 2026",
    risk: 15,
    flagged: false
  }, {
    id: "TX1003",
    sender: "ACC555",
    receiver: "ACC999",
    amount: 1200,
    date: "15 Mar 2026",
    risk: 15,
    flagged: false
  }, {
    id: "TX1003",
    sender: "ACC555",
    receiver: "ACC999",
    amount: 1200,
    date: "15 Mar 2026",
    risk: 15,
    flagged: false
  }, {
    id: "TX1003",
    sender: "ACC555",
    receiver: "ACC999",
    amount: 1200,
    date: "15 Mar 2026",
    risk: 15,
    flagged: false
  }, {
    id: "TX1003",
    sender: "ACC555",
    receiver: "ACC999",
    amount: 1200,
    date: "15 Mar 2026",
    risk: 15,
    flagged: false
  }, {
    id: "TX1003",
    sender: "ACC555",
    receiver: "ACC999",
    amount: 1200,
    date: "15 Mar 2026",
    risk: 15,
    flagged: false
  }, {
    id: "TX1003",
    sender: "ACC555",
    receiver: "ACC999",
    amount: 1200,
    date: "15 Mar 2026",
    risk: 15,
    flagged: false
  }, {
    id: "TX1003",
    sender: "ACC555",
    receiver: "ACC999",
    amount: 1200,
    date: "15 Mar 2026",
    risk: 15,
    flagged: false
  }, {
    id: "TX1003",
    sender: "ACC555",
    receiver: "ACC999",
    amount: 1200,
    date: "15 Mar 2026",
    risk: 15,
    flagged: false
  }, {
    id: "TX1003",
    sender: "ACC555",
    receiver: "ACC999",
    amount: 1200,
    date: "15 Mar 2026",
    risk: 15,
    flagged: false
  }, {
    id: "TX1003",
    sender: "ACC555",
    receiver: "ACC999",
    amount: 1200,
    date: "15 Mar 2026",
    risk: 15,
    flagged: false
  }, {
    id: "TX1003",
    sender: "ACC555",
    receiver: "ACC999",
    amount: 1200,
    date: "15 Mar 2026",
    risk: 15,
    flagged: false
  }, {
    id: "TX1003",
    sender: "ACC555",
    receiver: "ACC999",
    amount: 1200,
    date: "15 Mar 2026",
    risk: 15,
    flagged: false
  },
  {
    id: "TX1004",
    sender: "ACC888",
    receiver: "ACC101",
    amount: 70000,
    date: "15 Mar 2026",
    risk: 90,
    flagged: true
  }
];

const Table = () => {
   
  return (
    <div style={{background:"white",padding:"20px",borderRadius:"10px",marginTop:"20px", backgroundColor:" white"}}>
      <h2 >Recent Transactions / Alerts</h2><br /><br />
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "10px" }}>
        <thead>
            <tr style={{ background: "#f3f3f3" }}>
            <th>ID</th>
            <th>Sender</th>
            <th>Receiver</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Risk Score</th>
            <th>Status</th>
            </tr>
        </thead>
        <tbody>
            {transactions.map((txn)=>(
                <tr key={txn.id} style={{ background: txn.flagged ? "#ffd6d6" : "white",
                textAlign: "center"}}>
                    <td>{txn.id}</td>
              <td>{txn.sender}</td>
              <td>{txn.receiver}</td>
              <td>₹{txn.amount}</td>
              <td>{txn.date}</td>
              <td>{txn.risk}</td>
               <td style={{ fontWeight: "bold", color: txn.flagged ? "red" : "green" }}>
                {txn.flagged ? "⚠ Flagged" : "Safe"}
              </td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
