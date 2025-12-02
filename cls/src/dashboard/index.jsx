import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AuthProvider from "./auth/AuthProvider";
import ProtectedRoute from "./auth/ProtectedRoute";
import DashboardLayout from "./layout/DashboardLayout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Reports from "./pages/Reports";
import Analytics from "./pages/Analytics";
import Tickets from "./pages/Tickets";
import Settings from "./pages/Settings";

export default function DashboardApp() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard/*"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <Routes>
                    <Route index element={<Home />} />
                    <Route path="reports" element={<Reports />} />
                    <Route path="analytics" element={<Analytics />} />
                    <Route path="tickets" element={<Tickets />} />
                    <Route path="settings" element={<Settings />} />
                  </Routes>
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}
