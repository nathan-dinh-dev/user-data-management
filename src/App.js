import Info from "./components/InfoForm/Info";
import DisplayInfo from "./components/DisplayInfo/DisplayInfo";
import { useState } from "react";

const Dummy_Info = [
  { id: "ex1", username: "Max", age: 23 },
  { id: "ex2", username: "Nathan", age: 25 },
  { id: "ex3", username: "Joseph", age: 19 },
];

function App() {
  const [infoArr, setInfoArr] = useState(Dummy_Info);

  const addInfoHandler = (newUsername, newAge) => {
    setInfoArr((prevState) => [
      ...prevState,
      { id: Math.random().toString, username: newUsername, age: newAge },
    ]);
  };

  const removeHandler = (itemID) => {
    setInfoArr((prevState) => prevState.filter((item) => item.id !== itemID));
  };

  return (
    <div>
      <Info onAddInfo={addInfoHandler} />
      {infoArr.length !== 0 && (
        <DisplayInfo items={infoArr} onRemove={removeHandler} />
      )}
    </div>
  );
}

export default App;
