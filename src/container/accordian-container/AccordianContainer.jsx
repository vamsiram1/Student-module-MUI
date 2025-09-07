// AccordianContainer.jsx
import { useState } from "react";
import BusDetailsCardAccordian from "../../components/accordian/bus-details-accordian/BusDetailsCardAccordian";
import DriverDetailsAccordian from "../../components/accordian/driver-details-accordian/DriverDetailsAccordian";
import StudentCardAccordian from "../../components/accordian/student-card-accordian/StudentCardAccordian";
import styles from "./AccordianContainer.module.css";
import headerIcon from "../../assets/transport-overview-icons/accordian_container_header_icon.svg";

const AccordianContainer = () => {
  const [expanded, setExpanded] = useState(null); 

  return (
    <div className={styles.accordian_container}>
      <figure>
        <img src={headerIcon} alt="Accordion header" />
        <p className={styles.header_text}>General Information</p>
      </figure>

      <div className={styles.accordians}>
        <BusDetailsCardAccordian
          expanded={expanded === "bus"}
          onChange={(e, isOpen) => setExpanded(isOpen ? "bus" : null)}
        />
        <DriverDetailsAccordian
          expanded={expanded === "driver"}
          onChange={(e, isOpen) => setExpanded(isOpen ? "driver" : null)}
        />
        <StudentCardAccordian
          expanded={expanded === "student"}
          onChange={(e, isOpen) => setExpanded(isOpen ? "student" : null)}
        />
      </div>
    </div>
  );
};

export default AccordianContainer;
