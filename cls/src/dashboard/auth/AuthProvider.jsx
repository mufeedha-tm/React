import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
export function useAuth() { return useContext(AuthContext); }

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const raw = localStorage.getItem("dashboard_user");
    if (raw) setUser(JSON.parse(raw));
  }, []);

  function login({ email, password }) {
    // Placeholder auth: accept any non-empty credentials
    if (!email || !password) return { ok: false, message: "Missing credentials" };
    const u = { email, name: email.split("@")[0] };
    localStorage.setItem("dashboard_user", JSON.stringify(u));
    setUser(u);
    // navigate to dashboard landing
    navigate("/dashboard", { replace: true });
    return { ok: true };
  }

  function logout() {
    localStorage.removeItem("dashboard_user");
    setUser(null);
    navigate("/login", { replace: true });
  }

  const value = { user, login, logout, isAuthenticated: !!user };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
