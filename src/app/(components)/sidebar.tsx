"use client";
import styles from "../(styles)/Sidebar.module.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Sidebar() {
  const currentPath = usePathname();
  const menuItems = [
    { icon: "🛄", label: "Home", uri: "/dashboard" },
    { icon: "📥", label: "Orders", uri: "/dashboard/orders" },
    { icon: "🚚", label: "Trucks", uri: "/dashboard/trucks" },
    { icon: "🧑‍🧑‍🧒", label: "Drivers", uri: "/dashboard/drivers" },
  ];

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>Dashboard</div>
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
    </div>
  );
}
