import InfoForm from "./InfoForm";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import { useState } from "react";

const Info = (props) => {
  const [error, setError] = useState("");
  const addNewDataHandler = (username, age) => {
    props.onAddInfo(username, age);
  };

  const setErrorHandler = (item) => {
    setError(item);
  };

  const resetErrorHandler = () => {
    setError("");
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onResetError={resetErrorHandler}
        />
      )}
      <Card>
        <InfoForm
          onAddNewData={addNewDataHandler}
          onSetError={setErrorHandler}
        />
      </Card>
    </div>
  );
};

export default Info;
