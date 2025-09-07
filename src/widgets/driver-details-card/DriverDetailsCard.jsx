import React from "react";
import styles from "./DriverDetailsCard.module.css";
import busIcon from "../../assets/transport-overview-icons/bus_icon.svg";
import callIcon from "../../assets/transport-overview-icons/call_icon.svg";
import mailIcon from "../../assets/transport-overview-icons/mail_icon.svg";

import rightDividerIcon from "../../assets/transport-overview-icons/right_divider_icon.svg";
import leftDividerIcon from "../../assets/transport-overview-icons/left_divider_icon.svg";
const DriverDetailsCard = ({name,emp_id}) => {
  return (
    <div className={styles.card_wrapper}>
      <div className={styles.driver_box}>
        <div className={styles.left_section}>
          <figure className={styles.bus_icon}>
            <img src={busIcon} />
          </figure>
          <div>
            <p className={styles.driver_details}>Approved By</p>
            <p className={styles.driver_name}>{name}</p>
            <p className={styles.driver_details}>{emp_id}</p>
          </div>
        </div>
        <div className={styles.right_section}>
          <figure>
            <img src={callIcon} />
          </figure>
          <figure>
            <img src={mailIcon} />
          </figure>
        </div>
      </div>
      <div className={styles.blue_divider}>
        <figure>
          <img src={leftDividerIcon} />
        </figure>
        <p className={styles.divider_text}>Driver</p>
        <figure>
          <img src={rightDividerIcon} />
        </figure>
      </div>
    </div>
  );
};

export default DriverDetailsCard;
