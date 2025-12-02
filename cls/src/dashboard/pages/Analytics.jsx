import React from "react";
import ChartLine from "../ui/ChartLine";

export default function Analytics() {
  return (
    <div>
      <h2 style={{ color:"#e6eef9" }}>Analytics</h2>
      <div style={{ maxWidth: 800 }}>
        <ChartLine />
      </div>
    </div>
  );
}
