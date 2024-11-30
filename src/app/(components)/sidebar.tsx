"use client";
import styles from "../(styles)/Sidebar.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { AdminPanelHeaderContext } from "../(context)/dashboardTitleheaders";
import { signOut } from "next-auth/react";
import { menuItems } from "./paths";
export default function Sidebar() {
  const currentPath = usePathname();
  const { showSidebar, setShowSideBar } = useContext<any>(
    AdminPanelHeaderContext
  );
  const handleLogout = async () => {
    await signOut({ redirect: false });
  };
  return (
    <div className={!showSidebar ? styles.sidebar : styles.showsidebar}>
      <div className={styles.logo}>
        <span>Dashboard</span>
        <span className={styles.close} onClick={() => setShowSideBar(false)}>
          ❌
        </span>
      </div>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              href={item.uri}
              className={currentPath == item.uri ? styles.active : ""}
            >
              <span className={styles.icon}>{item.icon}</span>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <ul className={styles.logout}>
        <li onClick={handleLogout}>
          <span>⬅️</span>
          <span>Logout</span>
        </li>
      </ul>
    </div>
  );
}
