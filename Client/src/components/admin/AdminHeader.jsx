import React from "react";
import { FaBell } from "react-icons/fa";

const AdminHeader = () => {
  const user = JSON.parse(localStorage.getItem("userData"));

  return (
    <div
      style={{
        background: "var(--white)",
        height: "75px",
        borderRadius: "12px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 30px",
        boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
        marginBottom: "30px",
      }}
    >
      <h4
        style={{
          margin: 0,
          fontWeight: "600",
          color: "var(--text-dark)",
        }}
      >
        Dashboard
      </h4>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <FaBell
          size={22}
          color="var(--primary)"
        />

        <span
          style={{
            fontSize: "17px",
            fontWeight: "600",
          }}
        >
          Hi, {user?.fullName || "Admin"}
        </span>
      </div>
    </div>
  );
};

export default AdminHeader;