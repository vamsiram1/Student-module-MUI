import React from "react";
import styles from "./LiveTrack.module.css";

import liveTrackIcon from "../../../assets/transport-overview-icons/live_track_button_icon.svg";
const LiveTrack = () => {
  return (
    <div className={styles.live_track_box}>
      <div className={styles.box_wrapper}>
        <p className={styles.live_tracker_header}>View Live Transport</p>
        <p className={styles.live_tracker_subtext}>
          Watch live student transport
        </p>
        <button className={styles.live_button}>
          <figure>
            <img src={liveTrackIcon} />
          </figure>
          <p className={styles.button_text}>View Live</p>
        </button>
      </div>
    </div>
  );
};

export default LiveTrack;
