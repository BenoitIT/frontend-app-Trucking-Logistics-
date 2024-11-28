import { AdminPanelHeaderContext } from "../(context)/dashboardTitleheaders";
import styles from "../(styles)/header.module.scss";
import { useContext } from "react";
export interface headerContext {
  title?: string;
  setTitle?: (value: string) => void;
}
export default function Header() {
  const { title, setShowSideBar } = useContext<any>(AdminPanelHeaderContext);
  return (
    <div className={styles.header}>
      <h1>{title}</h1>
      <div className={styles.userSection}>
        <span className={styles.icons}>
          <button>🔔</button>
          <p>
            <span>John doe</span>
            <span className={styles.email}>John@gmail.com</span>
          </p>
        </span>
        <div className={styles.profile}>👤</div>
        <div className={styles.menu} onClick={() => setShowSideBar(true)}>
          🗒️
        </div>
      </div>
    </div>
  );
}
