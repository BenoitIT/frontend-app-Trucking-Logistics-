import style from "../(styles)/datafechingError.module.scss";
const ErrorSection = () => {
  return (
    <div className={style.errorSection}>
      <div className={style.errorContainer}>
        <span className={style.errorIcon}>‼️</span>
        <span className={style.errorMessage}>Failed to load records</span>
      </div>
    </div>
  );
};

export default ErrorSection;
