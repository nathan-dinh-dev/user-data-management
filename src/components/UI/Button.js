import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      type={props.type}
      className={`${styles.button} ${props.className}`}
      id={props.id}
    >
      {props.children}
    </button>
  );
};

export default Button;
