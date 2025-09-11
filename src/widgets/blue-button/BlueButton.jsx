import React from "react";
import styles from "./BlueButton.module.css";
import rightArrow from "../../assets/transport-overview-icons/re_assign_arrow.svg";

const BlueButton = ({ onClick, buttonText, classname }) => {
  return (
    <button className={` ${classname}`} onClick={onClick}>
      <p className={styles.btn_text}>{buttonText}</p>
      <figure className={styles.arrow_icon}>
        <img src={rightArrow} alt="arrow" />
      </figure>
    </button>
  );
};

export default BlueButton;
