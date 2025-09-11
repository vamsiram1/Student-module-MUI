import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./OverviewInnerContainer.module.css";
import StudentBusDetails from "../../components/overview-components/student-bus-details/StudentBusDetails";
import lineIcon from "../../assets/transport-overview-icons/line_divider_icon.svg";
import TransportDetails from "../../components/overview-components/transport-details/TransportDetails";
import LiveTrack from "../../components/overview-components/live-transport/LiveTrack";
import BlueButton from "../../widgets/blue-button/BlueButton";

const OverviewInnerContainer = () => {
  const navigate = useNavigate();

  // Define the handleClick function to pass to the BlueButton
  const handleClick = () => {
    navigate("/transport/assign-transport");
  };

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

      <BlueButton onClick={handleClick} buttonText="Re-Assign Transport" classname={styles.button_class} />
    </div>
  );
};

export default OverviewInnerContainer;
