import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  const resetErrorHandler = () => {
    props.onResetError();
  };

  return (
    <div className={styles.backdrop}>
      <Card className={styles.modal}>
        <header>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={resetErrorHandler}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
