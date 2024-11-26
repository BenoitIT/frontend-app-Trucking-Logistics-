import styles from "../(styles)/card.module.scss";
interface CardProps {
  title: string;
  value: number | string;
  growth: string;
  details: string[];
}
export default function Card({ title, value, growth, details }: CardProps) {
  const isPositive = growth[0] !== "-";
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3>{title}</h3>
        <span className={isPositive ? styles.positive : styles.negative}>
          {growth}
        </span>
      </div>
      <h3>{value}</h3>
      <ul>
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  );
}
