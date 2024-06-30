import { Outlet } from "react-router-dom";
import styles from "./index.module.css";
import { CiLogout } from "react-icons/ci";

import ButtonIcon from "../../components/button-icon";
import useIsAuthenticated from "../../hooks/useAuthenticated";

const Layout = () => {
  const { isAuthenticated, signOut } = useIsAuthenticated();
  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.headerItem}>
          <h1 className={styles.headerText}>Task Manager</h1>
        </div>
        <div className={styles.headerItem}>
          {isAuthenticated && (
            <ButtonIcon
              icon={<CiLogout style={{ fontWeight: "bold", color: "red" }} />}
              style={{
                background: "white",
                color: "white",
                fontWeight: "bold",
              }}
              onClick={handleSignOut}
            />
          )}
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
