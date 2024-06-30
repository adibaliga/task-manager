import React, { useState } from "react";
import styles from "./index.module.css";
import Input from "../../components/input";
import Button from "../../components/button";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Logging in with:", { email });
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPassword(event.target.value);
  };

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <Input
          label="Email address"
          value={email}
          type="email"
          onChange={handleInputChange}
          required
          autofocus
        />
      </div>
      <div className={styles.inputContainer}>
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </div>
      <div className={styles.buttonContainer}>
        <Button label="Log in" onClick={handleSubmit} />
      </div>
    </form>
  );
};

export default LoginForm;
