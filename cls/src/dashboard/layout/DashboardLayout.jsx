import React, { useState } from "react";
import Sidebar from "../ui/Sidebar";
import "../layout/layout.css";
import "../ui/ui.css";
import { useAuth } from "../auth/AuthProvider";
import { motion } from "framer-motion";

export default function DashboardLayout({ children }) {
  const [open, setOpen] = useState(true);
  const { logout, user } = useAuth();

  return (
    <div className="layout-root">
      <Sidebar isOpen={open} onClose={() => setOpen(false)} />
      <div className={`layout-content ${open ? "sidebar-open" : "sidebar-closed"}`}>
        <header className="topbar">
          <button
            className="hamburger"
            aria-label="Toggle sidebar"
            onClick={() => setOpen((s) => !s)}
          >
            ☰
          </button>
          <div className="top-actions">
            <span className="user-name">Hello, {user?.name ?? "User"}</span>
            <button className="btn-ghost" onClick={logout}>Logout</button>
          </div>
        </header>

        <motion.main
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="main-area"
        >
          {children}
        </motion.main>
      </div>
    </div>
  );
}
