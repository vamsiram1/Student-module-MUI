import TransportInnerTabHeader from "../../components/transport-innertab-header/TransportInnerTabHeader";
import TransportFormWithoutDropdowns from '../../widgets/transport-form-without-dropdowns/TransportFormWithoutDropdowns';
import styles from "./ChangeRouteContainer.module.css"
const ChangeRouteContainer = () => {
  return (
    <div className={styles.change_route_container}>
      <TransportInnerTabHeader
        headerName="Change Route"
        subText="Get all the analytics and growth rate of applications"
      />
      <TransportFormWithoutDropdowns  />
    </div>
  );
};

export default ChangeRouteContainer;
