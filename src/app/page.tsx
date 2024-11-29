import LoginForm from "./(components)/loginForm";
import SignInWithGoogle from "./(components)/loginWithGoogle";
import styles from "./(styles)/login.module.scss";
export default function Home() {
  return (
    <div className={styles.container}>
      <LoginForm />
      <SignInWithGoogle />
    </div>
  );
}
