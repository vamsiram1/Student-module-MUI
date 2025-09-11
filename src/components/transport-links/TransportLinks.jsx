import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./TransportLinks.module.css";

const TransportLinks = () => {
  const tabs = [
    { label: "Overview", path: "/transport/overview" },
    { label: "Assign Transport", path: "/transport/assign-transport" },
    { label: "Un-Assign Transport", path: "/transport/un-assign-transport" },
    { label: "Change Route", path: "/transport/change-route" },
    { label: "Transport Dropout", path: "/transport/transport-dropout" },
  ];

  return (
    <ul className={styles.tab_all_links}>
      {tabs.map((tab) => (
        <NavLink
          key={tab.label}
          to={tab.path}
          className={({ isActive }) =>
            `${styles.tab_links} ${isActive ? styles.active_tab : ""}`
          }
        >
          <span className={`${styles.tab} `}>
            {tab.label}
          </span>
        </NavLink>
      ))}
    </ul>
  );
};

export default TransportLinks;
