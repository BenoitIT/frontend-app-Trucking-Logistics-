import styles from "../(styles)/card.module.scss";
interface CardProps {
  title: string;
  value: number | string;
}
export default function Card({ title, value }: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3>{title}</h3>
      </div>
      <h3>{value}</h3>
    </div>
  );
}
