import Button from "../UI/Button";
import styles from "./InfoForm.module.css";
import { useState } from "react";

const InfoForm = (props) => {
  const [currentUsername, setCurrentUsername] = useState("");
  const [currentAge, setCurrentAge] = useState("");

  const usernameHandler = (event) => {
    setCurrentUsername(event.target.value);
  };

  const ageHandler = (event) => {
    setCurrentAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (currentUsername.trim().length === 0 || currentAge.trim().length === 0) {
      props.onSetError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    props.onAddNewData(currentUsername, currentAge);

    setCurrentAge("");
    setCurrentUsername("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles["info-form"]}>
        <div className={styles["info-container"]}>
          <label>Username</label>
          <input
            type="text"
            onChange={usernameHandler}
            value={currentUsername}
          />
        </div>
        <div className={styles["info-container"]}>
          <label>Age (Years)</label>
          <input
            type="number"
            min={1}
            onChange={ageHandler}
            value={currentAge}
          />
        </div>
      </div>
      <div className={styles["info-form__actions"]}>
        <Button>Add User</Button>
      </div>
    </form>
  );
};

export default InfoForm;
