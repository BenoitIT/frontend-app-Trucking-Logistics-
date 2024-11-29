"use client";
import style from "../(styles)/error.module.scss";
export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <div className={style.errorContainer}>
      <div className={style.errorBox}>
        <h2>{error.message}</h2>
        <button
          onClick={() => {
            window.location.reload();
          }}
        >
          Try again
        </button>
      </div>
    </div>
  );
}
