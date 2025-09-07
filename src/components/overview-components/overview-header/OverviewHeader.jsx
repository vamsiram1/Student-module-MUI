import React from 'react'
import styles from "./OverviewHeader.module.css"

import headerIcon from "../../../assets/transport-overview-icons/overview_header_icon.svg"
const OverviewHeader = () => {
  return (
    <div className={styles.overview_header}>
        <figure>
            <img src={headerIcon}/>
        </figure>

        <div className={styles.header_textpart}>
                <h2 className={styles.header_text}>Transport Overview</h2>
                <p className={styles.subtext}>Get all the analytics and growth rate of applications</p>
        </div>
    </div>
  )
}

export default OverviewHeader
