import stageIcon from "../../../assets/transport-overview-icons//stage_icon.svg";
import academicYearIcon from "../../../assets/transport-overview-icons/academic_year_icon.svg";
import blueLineIcon from "../../../assets/transport-overview-icons/blue_line_icon.svg";
import coinsIcon from "../../../assets/transport-overview-icons/coins_icon.svg";
import busDetailsHeardeIcon from "../../../assets/transport-overview-icons/transport_header_icon.svg";
import travelIcon from "../../../assets/transport-overview-icons/travelIcon.svg"
import styles from "./TransportDetails.module.css";
const TransportDetails = () => {
  return (
    <section className={styles.transpor_details_box}>
      <div className={styles.transport_header}>
        <figure className={styles.icon}>
          <img src={busDetailsHeardeIcon} />
        </figure>
        <h3 className={styles.header_text}>Transport Details</h3>
      </div>
      <ul className={styles.transport_inside_wrapper}>
        <li className={styles.cost_details_box}>
          <figure className={styles.icon}>
            <img src={coinsIcon} />
          </figure>
          <div className={styles.text_boxes}>
            <label className={styles.label_text}>Fare</label>
            <strong className={styles.strong_text}>2500 </strong>
          </div>
        </li>
        <figure className={styles.blue_line}>
          <img src={blueLineIcon} />
        </figure>
        {/* AcademicYear */}
        <li className={styles.academic_year_box}>
          <figure className={styles.icon}>
            <img src={academicYearIcon} />
          </figure>
          <div className={styles.text_boxes}>
            <label className={styles.label_text}>Fare</label>
            <strong className={styles.strong_text}>2500 </strong>
          </div>
        </li>
        <figure className={styles.blue_line}>
          <img src={blueLineIcon} />
        </figure>

        {/* transport route */}

        <li className={styles.route_box}>
          <h3 className={styles.inner_header_text}>Transport Route</h3>
          <div className={styles.transport_content}>
            <figure className={styles.icon}>
              <img src={travelIcon}  className={styles.travelIcon} />
              
            </figure>
            <div className={styles.route_text_box_wrapper}>
              <div className={styles.text_boxes}>
                <label className={styles.label_text}>Pickup point</label>
                <strong className={styles.strong_text}>BHEL</strong>
              </div>
              <div className={styles.text_boxes}>
                <label className={styles.label_text}>Droping Point</label>
                <strong className={styles.strong_text}>MIYAPUR</strong>
              </div>
            </div>
          </div>
        </li>

        <figure className={styles.blue_line}>
          <img src={blueLineIcon} />
        </figure>
        <li className={styles.stage_box}>
          <h3 className={styles.inner_header_text}>Stage</h3>
          <div className={styles.stage_box_content}>
            <figure>
              <img src={stageIcon} className={styles.stage_icon} />
            </figure>
            <div className={styles.text_boxes}>
              <label className={styles.label_text}>Stage</label>
              <strong className={styles.strong_text}>BHEL</strong>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default TransportDetails;
