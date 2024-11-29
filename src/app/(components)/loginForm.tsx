"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import styles from "../(styles)/login.module.scss";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const [credentials, setCredentials] = useState<{
    email?: string;
    password?: string;
  }>({});
  const [success, setSuccess] = useState<boolean>(false);
  const [fail, setFail] = useState<boolean>(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setCredentials((prevState: { email?: string; password?: string }) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await signIn("credentials", {
      email: credentials?.email,
      password: credentials?.password,
      redirect: false,
    });
    if (response && !response.error) {
      setSuccess(true);
      setFail(false);
      router.push("/dashboard");
    } else {
      setFail(true);
      setSuccess(false);
    }
  };
  return (
     <>
      <div className={styles.card}>
        <h2>Trucking Logistics Management System</h2>
        <p className={styles.loginTitle}>Login</p>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              onChange={handleChange}
              className={styles.input}
              required
            />
            <a href="#" className={styles.resetLink}>
              Reset password
            </a>
          </div>
          <button type="submit" className={styles.loginButton}>
            Log in
          </button>
        </form>
      </div>
      {success && (
        <div className={styles.notification}>
          <span>✔ Credentials successfully verified</span>
        </div>
      )}
      {fail && (
        <div className={styles.notificationfail}>
          <span>Your email or password is wrong</span>
        </div>
      )}
    </>
  );
};

export default LoginForm;
