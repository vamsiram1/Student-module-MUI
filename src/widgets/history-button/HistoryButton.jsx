import React from "react";
import historyTimerIcon from "../../assets/transport-overview-icons/history_timer.svg";
import styles from "./HistoryButton.module.css"
const HistoryButton = () => {
  return (
    <div className={styles.history_button}>
      <p className={styles.history_text}>History</p>
      <figure>
        <img src={historyTimerIcon} />
      </figure>
    </div>
  );
};

export default HistoryButton;
