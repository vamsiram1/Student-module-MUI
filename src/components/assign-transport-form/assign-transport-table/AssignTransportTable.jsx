import React from "react";
import styles from "./AssignTransportTable.module.css"
const AssignTransportTable = () => {
  return (
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
  );
};

export default AssignTransportTable;
