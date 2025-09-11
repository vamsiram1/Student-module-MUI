import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import TransportLinks from "../../components/transport-links/TransportLinks";
import AccordianContainer from "../accordian-container/AccordianContainer";
import OverviewContainer from "../overview-container/OverviewContainer"; // your actual overview page
import styles from "./TransportWholeContainer.module.css";
import AssignTransportContainer from "../assign-transport-container/AssignTransportContainer";


const UnAssignTransport = () => (
  <div>
    <h1>Un Assign Transport Page</h1>
    <p>Content for Un Assign Transport</p>
  </div>
);
const ChangeRoute = () => (
  <div>
    <h1>Change Route Page</h1>
    <p>Content for Change Route</p>
  </div>
);
const TransportDropout = () => (
  <div>
    <h1>Transport Dropout Page</h1>
    <p>Content for Transport Dropout</p>
  </div>
);

const TransportWholeContainer = () => {
  const location = useLocation();

  const showAccordion = location.pathname === "/transport/overview";

  return (
    <div className={styles.transport_container}>
      <div className={styles.main_part}>
       
        <TransportLinks />

        <Routes>
          <Route index element={<Navigate to="/transport/overview" />} />
          <Route path="/transport/overview" element={<OverviewContainer />} />
          <Route path="/transport/assign-transport" element={<AssignTransportContainer />} />
          <Route path="/transport/un-assign-transport" element={<UnAssignTransport />} />
          <Route path="/transport/change-route" element={<ChangeRoute />} />
          <Route path="/transport/transport-dropout" element={<TransportDropout />} />
        </Routes>
      </div>

      <div className={`${styles.accordian_part} ${showAccordion ? "" : styles.hidden}`}>
        <AccordianContainer />
      </div>
    </div>
  );
};

export default TransportWholeContainer;
