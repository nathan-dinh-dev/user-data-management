import Card from "../UI/Card";
import DisplayInfoItem from "./DisplayInfoItem";
import styles from "./DisplayInfo.module.css";

const DisplayInfo = (props) => {
  const deleteHandler = (itemID) => {
    props.onRemove(itemID);
  };

  return (
    <Card>
      <ul className={styles["display-info"]}>
        {props.items.map((item) => (
          <DisplayInfoItem
            key={item.id}
            id={item.id}
            username={item.username}
            age={item.age}
            onDelete={deleteHandler}
          />
        ))}
      </ul>
    </Card>
  );
};

export default DisplayInfo;
