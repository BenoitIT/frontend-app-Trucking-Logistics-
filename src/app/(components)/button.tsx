import style from "../(styles)/button.module.scss";
interface buttonProps {
  label: string;
  OnClick?: () => void;
}
export const Button = ({ label, OnClick }: buttonProps) => {
  return (
    <button className={style.btn} onClick={OnClick}>
      {label}
    </button>
  );
};
