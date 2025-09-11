import React from "react";
import styles from "./TransportInnerTabHeader.module.css";
import headerIcon from "../../assets/transport-overview-icons/overview_header_icon.svg";
import HistoryButton from "../../widgets/history-button/HistoryButton";
const AssignTransportHeader = ({ headerName, subText }) => {
  return (
    <header className={styles.header}>
      <div className={styles.header_left_part}>
        <figure>
          <img src={headerIcon} />
        </figure>
        <div className={styles.text_conntainer}>
          <h3 className={styles.header_name}>{headerName}</h3>
          <p className={styles.sub_text}> {subText}</p>
        </div>
      </div>
      <HistoryButton/>
    </header>
  );
};

export default AssignTransportHeader;

