// NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <div style={styles.logoCircle}>
          <span style={styles.logoText}>BK</span>
        </div>

        <h1 style={styles.code}>404</h1>
        <h2 style={styles.title}>Oops... page not on the menu!</h2>
        <p style={styles.text}>
          The page you’re looking for couldn’t be found. Let’s get you back to{" "}
          <span style={styles.brand}>Bwari Kitchen Eatery</span> and something tasty.
        </p>

        <div style={styles.actions}>
          <Link to="/" style={styles.primaryBtn}>
            Back to Home
          </Link>
          <Link to="/menu" style={styles.secondaryBtn}>
            View Our Menu
          </Link>
        </div>

        <p style={styles.small}>
          Need help? Visit our Bwari branch or call our hotline.
        </p>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    padding: "40px 16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    color: "#1f2937",
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
  },
  card: {
    maxWidth: "480px",
    width: "100%",
    padding: "32px 24px",
    borderRadius: "24px",
    background: "#ffffff",
    boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
    border: "1px solid #f3f4f6",
    textAlign: "center",
  },
  logoCircle: {
    width: "70px",
    height: "70px",
    borderRadius: "999px",
    margin: "0 auto 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#FF3B30",
  },
  logoText: {
    fontSize: "26px",
    fontWeight: 800,
    color: "#fff",
    letterSpacing: "1px",
  },
  code: {
    fontSize: "70px",
    margin: "0",
    fontWeight: 800,
    color: "#FF3B30",
  },
  title: {
    fontSize: "22px",
    margin: "10px 0",
    fontWeight: 600,
  },
  text: {
    fontSize: "15px",
    lineHeight: 1.6,
    margin: "4px 0 24px",
    color: "#6b7280",
  },
  brand: {
    color: "#FF3B30",
    fontWeight: 600,
  },
  actions: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: "10px",
  },
  primaryBtn: {
    padding: "10px 20px",
    borderRadius: "999px",
    background: "#FF3B30",
    color: "#111827",
    fontWeight: 600,
    fontSize: "14px",
    textDecoration: "none",
    border: "1px solid #FF3B30",
    transition: "0.2s",
  },
  secondaryBtn: {
    padding: "10px 20px",
    borderRadius: "999px",
    border: "1px solid #d1d5db",
    color: "#374151",
    fontWeight: 500,
    fontSize: "14px",
    textDecoration: "none",
    transition: "0.2s",
  },
  small: {
    fontSize: "12px",
    color: "#9ca3af",
    marginTop: "12px",
  },
};
