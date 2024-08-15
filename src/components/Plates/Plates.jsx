import Plate from "../Plate/Plate";
import styles from "./plates.module.css";
import classnames from "classnames";
import data from "../../data";
import { useState } from "react";

function Plates() {
  const [allCounters, setAllCounters] = useState(0);
  
  const setAllCountersHandler = (number) => {
    setAllCounters(allCounters + number);
  }

  return (
    <div className={classnames(styles["plates"], styles["plates"])}>
      <span className={classnames(styles["plates__counter"])}>all counters: {allCounters}</span>
      <div className={classnames(styles["plates__items"])}>
        {data.map((el) => (
          <Plate count={el.counter} description={el.description} key={el.id} setAllCountersHandler={setAllCountersHandler} />
        ))}
      </div>
    </div>
  );
}
export default Plates;
