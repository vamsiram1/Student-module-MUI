import React from "react";
import styles from "./BusDetailsCard.module.css";
import busCardDivider from "../../../assets/transport-overview-icons/card_devider.svg";
import seatBlueIcon from "../../../assets/transport-overview-icons/blue_seat_icon.svg";
import redSeatIcon from "../../../assets/transport-overview-icons/red_seat_icon.svg"
const BusDetailsCard = () => {
  return (
    <div className={styles.bus_details_card_wrapper}>
      <div className={styles.card}>
        <div className={styles.left_section}>
          <p className={styles.text_style}>bus no</p>
          <p className={styles.text_style}>service number</p>
        </div>

        <div className={styles.right_section}>
          <p className={styles.right_sec_text}>Seating Capacity</p>
          <figure className={styles.seat_capacity_count}>
            <img src={seatBlueIcon} />
            <p className={styles.count}>152</p>
          </figure>
        </div>
      </div>

      <figure className={styles.divider}>
        <img src={busCardDivider} />
      </figure>


      <div className={styles.lower_section}>
        <div className={styles.bus_number_box}>
          <p className={styles.bus_number}>AP 07 DY 5566</p>
        </div>
        <div className={styles.seats_available_box}>
          <figure className={styles.red_seat_icon}>
              <img src={redSeatIcon}/>
          </figure>
          <p className={styles.red_seats_text}>15 Available Seats</p> 
        </div>
      </div>
    </div>
  );
};

export default BusDetailsCard;
