import styles from "../(styles)/login.module.scss";

const LoginForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>Trucking Logistics Management System</h2>
        <p className={styles.loginTitle}>Login</p>
        <form>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
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
      <div className={styles.notification}>
        <span>✔ Email successfully verified</span>
      </div>
    </div>
  );
};

export default LoginForm;
