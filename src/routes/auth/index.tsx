import { useAuthContext } from "@asgardeo/auth-react";
import Button from "../../components/button";

import styles from "./index.module.css";

const Auth = () => {
  const { state, signIn, signOut } = useAuthContext();

  const handleLogin = () => {
    try {
      signIn();
    } catch (error) {}
  };
  return (
    <div className={styles.auth}>
      <h1 className={styles.authHeader}>Welcome to Task Manager</h1>
      <h2 className={styles.authHeader2}>
        Task Manager is a simple and effective way to keep track of your work.
        It's the perfect tool for managing all your tasks and projects.
      </h2>
      <Button label="Login" onClick={handleLogin} />
    </div>
  );
};

export default Auth;
