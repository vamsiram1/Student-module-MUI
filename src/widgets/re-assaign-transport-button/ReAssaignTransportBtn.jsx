import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ReAssaignTransportBtn.module.css";
import rightArrow from "../../assets/transport-overview-icons/re_assign_arrow.svg";

const ReAssaignTransportBtn = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/assign-transport");
  };

  return (
    <button className={styles.re_ass_trans_button} onClick={handleClick}>
      <p className={styles.btn_text}>Re-Assign Transport</p>
      <figure className={styles.arrow_icon}>
        <img src={rightArrow} alt="arrow" />
      </figure>
    </button>
  );
};

export default ReAssaignTransportBtn;
