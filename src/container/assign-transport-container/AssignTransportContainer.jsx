import AssignTransportForm from "../../components/assign-transport-form/assign-transport-forms/AssignTransportForm";
import AssignTransportTable from "../../components/assign-transport-form/assign-transport-table/AssignTransportTable";
import TransportInnerTabHeader from "../../components/transport-innertab-header/TransportInnerTabHeader";
import BlueButton from "../../widgets/blue-button/BlueButton";
import styles from "./AssignTransportContainer.module.css";

const AssignTransportContainer = () => {
  return (
    <div className={styles.assign_transport_container}>
      <TransportInnerTabHeader
        headerName="Un Assign Transport"
        subText="Get all the analytics and growth rate of applications"
      />
      <AssignTransportForm />

      


      <AssignTransportTable/>
    </div>
  );
};

export default AssignTransportContainer;
