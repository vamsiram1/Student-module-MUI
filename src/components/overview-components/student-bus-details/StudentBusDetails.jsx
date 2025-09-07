import React from "react";
import styles from "./StudentBusDetails.module.css";
import busIcon from "../../../assets/transport-overview-icons/bus_icon.svg";
import acIcon from "../../../assets/transport-overview-icons/ac_icon.svg";

import smallBusIcon from "../../../assets/transport-overview-icons/bus_kmph_icon.svg"
const StudentBusDetails = () => {
  return (
    <div className={styles.bus_details_container}>
      <div className={styles.left_part}>
        <figure>
          <img src={busIcon} />
        </figure>

        <div className={styles.route_details}>
          <div className={styles.bus_route_header}>
            <p className={styles.route_text}>
              Route No <span className={styles.route_number}>7</span>
            </p>
            <div className={styles.ac_type}>
              <figure>
                <img src={acIcon} />
              </figure>
              <p className={styles.ac_text}>AC</p>
            </div>
          </div>
          <div>
            <p className={styles.route_sub_text}>
              Bus Starting Point:{" "}
              <span className={styles.starting_point}>BHEL</span>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.right_part}>

        <div className={styles.kmph_text_box}>
            <figure>
              <img src={smallBusIcon}/>
            </figure>
            <p className={styles.kmph_total_text}>
              14 Kms
            </p>
        </div>
        <p className={styles.assigned_box}>
          Assigned
        </p>
      </div>
    </div>
  );
};

export default StudentBusDetails;
