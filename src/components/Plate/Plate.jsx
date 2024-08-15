import { useState } from "react";
import Button from "../Button/Button";
import styles from "./plate.module.css";

function Plate({ count, description, setAllCountersHandler }) {
  const [showAllDescription, setShowAllDescription] = useState(false);

  const setShowAllDescriptionHandler = () => {
    setShowAllDescription(!showAllDescription);
  };

  // const setAllCountersModifyHandler = () => {
  //   setAllCountersHandler(count)
  // }

  return (
    <div className={`${styles["plate"]}`}>
      <span className={`${styles["plate__counter"]}`}>{count}</span>
      <span className={`${styles["plate__description"]}`}>{showAllDescription === true ? description : description.slice(0, 12) + "..."}</span>
      <div className={`${styles["plate__btns"]}`}>
        <Button type="more" text="show more" handler={setShowAllDescriptionHandler} />
        <Button type="add" text="add" handler={() => setAllCountersHandler(count)} />
      </div>
    </div>
  );
}
export default Plate;
