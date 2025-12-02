import React from "react";
import StatsCard from "../ui/StatsCard";
import ChartLine from "../ui/ChartLine";
import ChartBar from "../ui/ChartBar";
import ChartPie from "../ui/ChartPie";
import "./home.css"; // optional, you can include page-specific styles

export default function Home() {
  return (
    <>
      <h1 style={{ color: "#e6eef9" }}>Dashboard Overview</h1>
      <p style={{ color: "#9bb6d6", marginBottom: 10 }}>Welcome back! Here's what's happening with your tickets today.</p>

      <div className="stats-row">
        <StatsCard title="Total Tickets" value="2,543" meta="+12.5%" />
        <StatsCard title="Active Users" value="1,234" meta="+8.2%" />
        <StatsCard title="Revenue" value="$45,231" meta="+15.3%" />
      </div>

      <div className="charts-grid">
        <div className="chart-card">
          <h3 style={{ color: "#cfe9ff" }}>Monthly Tickets</h3>
          <ChartLine />
        </div>

        <div className="chart-card">
          <h3 style={{ color: "#cfe9ff" }}>Weekly Tickets</h3>
          <ChartBar />
        </div>

        <div className="chart-card" style={{ gridColumn: "1 / span 1" }}>
          <h3 style={{ color: "#cfe9ff" }}>Ticket Type Split</h3>
          <ChartPie />
        </div>

        <div className="chart-card">
          <h3 style={{ color: "#cfe9ff" }}>Recent Activity</h3>
          <div className="activity-list">
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ padding: "8px 0", color: "#9bb6d6" }}>New ticket #1231 created <div style={{fontSize:12, color:"#6aa0bf"}}>2 minutes ago</div></li>
              <li style={{ padding: "8px 0", color: "#9bb6d6" }}>New ticket #1232 created <div style={{fontSize:12, color:"#6aa0bf"}}>5 minutes ago</div></li>
              <li style={{ padding: "8px 0", color: "#9bb6d6" }}>New ticket #1233 created <div style={{fontSize:12, color:"#6aa0bf"}}>10 minutes ago</div></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
