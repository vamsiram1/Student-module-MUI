import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import TransportLinks from "../../components/transport-links/TransportLinks";
import AccordianContainer from "../accordian-container/AccordianContainer";
import AssignTransportContainer from "../assign-transport-container/AssignTransportContainer";
import OverviewContainer from "../overview-container/OverviewContainer"; // your actual overview page
import styles from "./TransportWholeContainer.module.css";
import UnAssignTransportContainer from "../un-assign-transport-container/UnAssignTransportContainer";
import AssignTransportTable from "../../components/assign-transport-form/transport-table/TransportTable";
import ChangeRouteContainer from "../change-route-container/ChangeRouteContainer";
import TransportDropoutContainer from "../transport-dropout-container/TransportDropoutContainer";

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
  // const location = useLocation();

  // const showAccordion = location.pathname === "/transport/overview";

  return (
    <div className={styles.transport_container}>
      <div className={styles.main_contet_wrapper}>
        <div className={styles.main_part}>
          <TransportLinks />

          <Routes>
            <Route index element={<Navigate to="/transport/overview" />} />
            <Route path="/transport/overview" element={<OverviewContainer />} />
            <Route
              path="/transport/assign-transport"
              element={<AssignTransportContainer />}
            />
            <Route
              path="/transport/un-assign-transport"
              element={<UnAssignTransportContainer />}
            />
            <Route path="/transport/change-route" element={<ChangeRouteContainer />} />
            <Route
              path="/transport/transport-dropout"
              element={<TransportDropoutContainer />}
            />
          </Routes>
        </div>

        <div
          className={styles.accordian_part}
          // className={`${styles.accordian_part} ${
          //   showAccordion ? "" : styles.hidden
          // }`}
        >
          <AccordianContainer />
        </div>
      </div>

      
      <AssignTransportTable title="Assigned Transport List"/>


    </div>
  );
};

export default TransportWholeContainer;
