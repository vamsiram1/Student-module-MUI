import React from "react";
import { useFormik } from "formik";
import BlueButton from "../blue-button/BlueButton";
import FormDropDown from "../form-dropdown/FormDropDown";
import styles from "./TransportForm.module.css";
const TransportForm = ({buttonText}) => {
  const distanceOptions = [
    { label: "0 KM to 5 KM", value: "0-5" },
    { label: "5 KM to 10 KM", value: "5-10" },
    { label: "10 KM to 13 KM", value: "10-13" },
  ];
  const routeOptions = [
    { label: "Route A", value: 1 },
    { label: "Route B", value: 2 },
  ];
  const stopOptions = [
    { label: "Stop Alpha", value: 101 },
    { label: "Stop Beta", value: 102 },
  ];
  const pickupOptions = [
    { label: "Pickup-1", value: 201 },
    { label: "Pickup-2", value: 202 },
  ];
  const dropOptions = [
    { label: "Drop-1", value: 301 },
    { label: "Drop-2", value: 302 },
  ];
  const assignTypeOptions = [
    { label: "One Way", value: "ONE_WAY" },
    { label: "Two Way", value: "TWO_WAY" },
  ];

  const formik = useFormik({
    initialValues: {
      transportDistance: null,
      routes: null,
      stopName: null,
      pickupPoint: null,
      droppingPoint: null,
      assignType: null,
      remarks: null,
      busType: "NON-AC",
    },
    onSubmit: (values) => {
      console.log("Form values:", values);
    },
  });

  // Handle the bus type selection (AC or NON-AC)
  const handleBusTypeClick = (type) => {
    formik.setFieldValue("busType", type); // Update busType in Formik state
  };

  return (
    <div className={styles.forms_wrapper}>
      <form className={styles.form_box} onSubmit={formik.handleSubmit}>
        {/* Other form elements like dropdowns */}
        <div className={styles.forms_row}>
          <div className={styles.transport_form_container}>
            <label className={styles.label_text}>Transport Distance</label>
            <FormDropDown
              options={distanceOptions}
              placeholder="select"
              fieldName="transportDistance"
              value={formik.values.transportDistance}
              onChange={formik.handleChange}
            />
          </div>
          <div className={styles.transport_form_container}>
            <label className={styles.label_text}>Routes</label>
            <FormDropDown
              options={routeOptions}
              placeholder="select"
              fieldName="routes"
              value={formik.values.routes}
              onChange={formik.handleChange}
            />
          </div>
        </div>

        <div className={styles.forms_row}>
          <div className={styles.transport_form_container}>
            <label className={styles.label_text}>Stop Name</label>
            <FormDropDown
              options={stopOptions}
              placeholder="select"
              fieldName="stopName"
              value={formik.values.stopName}
              onChange={formik.handleChange}
            />
          </div>
          <div className={styles.transport_form_container}>
            <label className={styles.label_text}>Pickup Point</label>
            <FormDropDown
              options={pickupOptions}
              placeholder="select"
              fieldName="pickupPoint"
              value={formik.values.pickupPoint}
              onChange={formik.handleChange}
            />
          </div>
        </div>

        <div className={styles.forms_row}>
          <div className={styles.transport_form_container}>
            <label className={styles.label_text}>Droping Point</label>
            <FormDropDown
              options={dropOptions}
              placeholder="select"
              fieldName="droppingPoint"
              value={formik.values.droppingPoint}
              onChange={formik.handleChange}
            />
          </div>
          <div className={styles.transport_form_container}>
            <label className={styles.label_text}>Assign Type</label>
            <FormDropDown
              options={assignTypeOptions}
              placeholder="select"
              fieldName="assignType"
              value={formik.values.assignType}
              onChange={formik.handleChange}
            />
          </div>
        </div>

        {/* Bus Type Selection */}
        <div className={styles.bustype_container}>
          {/* remarks container */}
          <div className={styles.remarks_container}>
            <label className={styles.label_text}>
              Remarks<span className={styles.important_star}>*</span>
            </label>

            <textarea
              fieldName="remarks"
              value={formik.values.transportDistance}
              onChange={formik.handleChange}
              id="remarks"
              className={styles.remarks_box}
              rows={4}
              placeholder="Enter Reason"
            />
          </div>
          <div className={styles.bus_type_box}>
            <label className={styles.label_text}>Bus Type</label>
            <div className={styles.ac_and_nonac_buttons}>
              <div className={`${styles.forms_row}`}>
                <div
                  className={`${styles.ac_box} ${
                    formik.values.busType === "AC" ? styles.active : ""
                  }`}
                  onClick={() => handleBusTypeClick("AC")}
                >
                  {/* AC SVG icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="27"
                    viewBox="0 0 27 27"
                    fill="none"
                    className={
                      formik.values.busType === "AC" ? styles.activeSvg : ""
                    }
                  >
                    <path
                      d="M7.875 13.5H19.125M18 3.375C20.6314 3.375 21.9465 3.375 22.9072 3.978C23.4084 4.29282 23.8322 4.71658 24.147 5.21775C24.75 6.1785 24.75 7.4925 24.75 10.125C24.75 12.7575 24.75 14.0715 24.1459 15.0323C23.8316 15.5328 23.4086 15.9561 22.9084 16.2709C21.9454 16.875 20.6303 16.875 18 16.875H9C6.36863 16.875 5.0535 16.875 4.09275 16.2709C3.59182 15.9567 3.16809 15.5337 2.853 15.0334C2.25 14.0704 2.25 12.7553 2.25 10.125C2.25 7.49475 2.25 6.1785 2.853 5.21775C3.16782 4.71658 3.59158 4.29282 4.09275 3.978C5.0535 3.375 6.3675 3.375 9 3.375H18Z"
                      stroke="#959595"
                      strokeWidth="1.26"
                      strokeLinecap="round"
                    />
                  </svg>
                  <p className={styles.ac_text}>AC</p>
                </div>
              </div>

              <div className={`${styles.forms_row}`}>
                <div
                  className={`${styles.non_ac_box} ${
                    formik.values.busType === "NON-AC" ? styles.active : ""
                  }`}
                  onClick={() => handleBusTypeClick("NON-AC")}
                >
                  {/* Non-AC SVG icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="27"
                    viewBox="0 0 27 27"
                    fill="none"
                  >
                    <path
                      d="M6.875 17.5H18.125M17 7.375C19.6314 7.375 20.9465 7.375 21.9072 7.978C22.4084 8.29282 22.8322 8.71658 23.147 9.21775C23.75 10.1785 23.75 11.4925 23.75 14.125C23.75 16.7575 23.75 18.0715 23.1459 19.0323C22.8316 19.5328 22.4086 19.9561 21.9084 20.2709C20.9454 20.875 19.6303 20.875 17 20.875H8C5.36863 20.875 4.0535 20.875 3.09275 20.2709C2.59182 19.9567 2.16809 19.5337 1.853 19.0334C1.25 18.0704 1.25 16.7553 1.25 14.125C1.25 11.4947 1.25 10.1785 1.853 9.21775C2.16782 8.71658 2.59158 8.29282 3.09275 7.978C4.0535 7.375 5.3675 7.375 8 7.375H17Z"
                      stroke="#959595"
                      strokeWidth="1.26"
                      strokeLinecap="round"
                    />
                  </svg>
                  <p className={styles.non_ac_text}>Non-AC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <BlueButton
        buttonText={buttonText}
        classname={styles.assign_transport_button}
      />

      <div className={styles.formik_values}>
        <h3>Formik State</h3>
        <pre>{JSON.stringify(formik.values, null, 2)}</pre>
      </div>
    </div>
  );
};

export default TransportForm;
