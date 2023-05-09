import InfoForm from "./InfoForm";
import Card from "../UI/Card";

const Info = (props) => {
  const addNewDataHandler = (username, age) => {
    props.onAddInfo(username, age);
  };

  return (
    <Card>
      <InfoForm onAddNewData={addNewDataHandler} />
    </Card>
  );
};

export default Info;
