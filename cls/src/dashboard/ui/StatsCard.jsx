import React from "react";
import { motion } from "framer-motion";
import "./ui.css";

export default function StatsCard({ title, value, meta }) {
  return (
    <motion.div
      className="stats-card"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
    >
      <div className="stats-title">{title}</div>
      <div className="stats-value">{value}</div>
      {meta && <div className="stats-meta">{meta}</div>}
    </motion.div>
  );
}
