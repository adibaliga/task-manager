import React, { useState } from "react";
import styles from "./index.module.css";
import Input from "../../components/input";
import Button from "../../components/button";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your signup logic here
    console.log("Signing up with:", { name, email, password, confirmPassword });
  };

  const handleNameChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setName(event.target.value);
  };

  const handleEmailChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setConfirmPassword(event.target.value);
  };

  return (
    <form className={styles.signupForm} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <Input
          label="Name"
          value={name}
          type="text"
          onChange={handleNameChange}
          required
          autofocus
        />
      </div>
      <div className={styles.inputContainer}>
        <Input
          label="Email address"
          value={email}
          type="email"
          onChange={handleEmailChange}
          required
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
      <div className={styles.inputContainer}>
        <Input
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          required
        />
      </div>
      <div className={styles.buttonContainer}>
        <Button label="Sign Up" onClick={handleSubmit} />
      </div>
    </form>
  );
};

export default SignupForm;
