import React from "react";
import { NavLink } from "react-router-dom";
import "./ui.css";

export default function Sidebar({ isOpen, onClose }) {
  return (
    <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-header">
        <div className="brand">
          <div className="brand-logo">CRM</div>
          <div className="brand-title">CRM Analytics</div>
        </div>
        <button className="close-btn" onClick={onClose} aria-label="Close sidebar">×</button>
      </div>

      <nav className="nav">
        <NavLink to="/dashboard" end className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>Dashboard</NavLink>
        <NavLink to="/dashboard/reports" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>Reports</NavLink>
        <NavLink to="/dashboard/analytics" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>Analytics</NavLink>
        <NavLink to="/dashboard/tickets" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>Tickets</NavLink>
        <NavLink to="/dashboard/settings" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>Settings</NavLink>
      </nav>
    </aside>
  );
}
