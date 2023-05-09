import styles from "./DisplayInfoItem.module.css";

const DisplayInfoItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li onClick={deleteHandler} className={styles["display-item"]}>
      {`${props.username} (${props.age} years old)`}
    </li>
  );
};

export default DisplayInfoItem;
