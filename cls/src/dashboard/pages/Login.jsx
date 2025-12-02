import React, { useState } from "react";
import { useAuth } from "../auth/AuthProvider";
import "../styles/login.css";

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(null);

  function submit(e) {
    e.preventDefault();
    const res = login({ email, password });
    if (!res.ok) setErr(res.message || "Login failed");
  }

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={submit}>
        <h2>Sign in</h2>
        {err && <div className="error">{err}</div>}
        <label>
          Email
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required />
        </label>
        <label>
          Password
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required />
        </label>
        <button className="btn" type="submit">Login</button>
      </form>
    </div>
  );
}
