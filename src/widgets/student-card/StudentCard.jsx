import React from "react";
import styles from "./StudentCard.module.css";
import studenIcon from "../../assets/transport-overview-icons/student_icon.svg";
const StudentCard = ({name,admissionNo}) => {
  return (
    <div className={styles.student_card}>
      <figure>
        <img src={studenIcon} />
      </figure>
      <section>
        <p className={styles.student_name}>{name}</p>
        <p className={styles.admission_number}>
          Admin no : <span className={styles.number}>{admissionNo}</span>
        </p>
      </section>
    </div>
  );
};

export default StudentCard;
