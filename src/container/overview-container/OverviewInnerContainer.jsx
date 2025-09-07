import React from "react";
import styles from "./OverviewInnerContainer.module.css";
import StudentBusDetails from "../../components/overview-components/student-bus-details/StudentBusDetails";
import lineIcon from "../../assets/transport-overview-icons/line_divider_icon.svg";
import TransportDetails from "../../components/overview-components/transport-details/TransportDetails";
import LiveTrack from "../../components/overview-components/live-transport/LiveTrack";
import ReAssaignTransportBtn from "../../widgets/re-assaign-transport-button/ReAssaignTransportBtn";
const OverviewInnerContainer = () => {
  return (
    <div className={styles.overview_inner_container}>
      <StudentBusDetails />
      <figure className={styles.line_divider}>
        <img src={lineIcon} />
      </figure>

      <div id="transport_and_live" className={styles.transport_and_live}>
        {/* transport details */}

        <TransportDetails />

        {/* live tracking */}
        <LiveTrack />
      </div>
      <ReAssaignTransportBtn/>
    </div>
  );
};

export default OverviewInnerContainer;
