import TransportInnerTabHeader from "../../components/transport-innertab-header/TransportInnerTabHeader";
import TransportForm from '../../widgets/transport-form/TransportForm';
import styles from "./ChangeRouteContainer.module.css"
const ChangeRouteContainer = () => {
  return (
    <div className={styles.change_route_container}>
      <TransportInnerTabHeader
        headerName="Change Route"
        subText="Get all the analytics and growth rate of applications"
      />
      <TransportForm buttonText="Change Route" />
    </div>
  );
};

export default ChangeRouteContainer;
