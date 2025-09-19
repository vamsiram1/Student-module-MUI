import styles from "./UnAssignTransportContainer.module.css"

import TransportInnerTabHeader from "../../components/transport-innertab-header/TransportInnerTabHeader"
import TransportFormWithoutDropdowns from '../../widgets/transport-form-without-dropdowns/TransportFormWithoutDropdowns'
const UnAssignTransportContainer = () => {
  return (
    <div className={styles.unassign_transport_container}>
        <TransportInnerTabHeader headerName="Un Assign Transport" subText="Get all the analytics and growth rate of applications"/>
        <TransportFormWithoutDropdowns buttonText="Un-Assigned Transport"/>

    </div>
  )
}

export default UnAssignTransportContainer
