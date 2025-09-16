import React from 'react'
import TransportInnerTabHeader from "../../components/transport-innertab-header/TransportInnerTabHeader"
import TransportForm from '../../widgets/transport-form/TransportForm'
import styles from "./TransportDropoutContainer.module.css"
const TransportDropoutContainer = () => {
  return (
    <div className={styles.transport_dropout_container}>
        <TransportInnerTabHeader headerName="Transport Dropout" subText="Get all the analytics and growth rate of applications"/>
        <TransportForm buttonText="Dropout Transport"/>

    </div>
  )
}

export default TransportDropoutContainer
