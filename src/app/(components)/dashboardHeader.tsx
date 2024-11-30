import { useSession } from "next-auth/react";
import { AdminPanelHeaderContext } from "../(context)/dashboardTitleheaders";
import styles from "../(styles)/header.module.scss";
import { useContext } from "react";
import Image from "next/image";
export interface headerContext {
  title?: string;
  setTitle?: (value: string) => void;
}
export default function Header() {
  const session = useSession();
  const { title, setShowSideBar } = useContext<any>(AdminPanelHeaderContext);
  return (
    <div className={styles.header}>
      <h1>{title}</h1>
      <div className={styles.userSection}>
        <span className={styles.icons}>
          <button>🔔</button>
          <p>
            <span>{session.data?.user?.name}</span>
            <span className={styles.email}>{session.data?.user?.email}</span>
          </p>
        </span>
        <div className={styles.profile}>
          {session.data?.user?.image ? (
            <Image
              src={session.data?.user?.image}
              height={50}
              width={50}
              alt="img"
            />
          ) : (
            "👤"
          )}
        </div>
        <div className={styles.menu} onClick={() => setShowSideBar(true)}>
          🗒️
        </div>
      </div>
    </div>
  );
}
