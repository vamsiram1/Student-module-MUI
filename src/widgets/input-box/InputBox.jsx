import React from "react";
import styles from "./InputBox.module.css";
const InputBox = ({value}) => {
  return (
    <div className={styles.input_bo_wrapper}>
      <div className={styles.dropdown}>
        <input type="text" className={styles.input_box} value={value}/>
      </div>
    </div>
  );
};

export default InputBox;
