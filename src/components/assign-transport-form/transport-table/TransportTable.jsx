import React from "react";
import styles from "./TransportTable.module.css";
const AssignTransportTable = ({ title }) => {
  return (
    <div className={styles.table_container}>
      <header>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.sub_title}> List of Current Year Transport </p>
      </header>
      <table>
        <tr>
          <th>ADMISSION YEAR</th>
          <th>BRANCH</th>
          <th>CLASS</th>
          <th>ROUTE NO</th>
          <th>TRANSPORT ROUTE</th>
          <th>BUS DRIVER NAME</th>
          <th>FAIR</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
          <td>Maria Anders</td>
          <td>Germany</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
      </table>
    </div>
  );
};

export default AssignTransportTable;
