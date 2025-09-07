import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import StudentCard from "../../../widgets/student-card/StudentCard";
import styles from "./StudentCardAccordian.module.css";

import accordianHeader from "../../../assets/transport-overview-icons/accordian_header.svg";
import cardDivider from "../../../assets/transport-overview-icons/card_devider.svg";

const StudentCardAccordian = ({ expanded, onChange }) => {
  return (
    <Accordion
      expanded={expanded}
      onChange={onChange}
      sx={{
        "& .MuiAccordionDetails-root ": { padding: "0px 16px 16px" },
        "&&": {
          "--Paper-shadow": "none",
          boxShadow: "none",
          borderRadius: "10px",
          border: "1px solid #E6E4F0",
          background: "rgba(255, 255, 255, 0.40)",
          backdropFilter: "blur(9.100000381469727px)",
        },
        "&::before": { display: "none" },
        "& .MuiButtonBase-root": {
          alignItems: "start",
          padding: "15px 18px 0px 18px",
        },
        "&.Mui-expanded": {
          borderRadius: "10px",
          border: "1px solid #B4BCFF",
          background: "rgba(255, 255, 255, 0.30)",
          boxShadow:
            "0 8px 16px 0 rgba(0, 0, 0, 0.14), 0 0 2px 0 rgba(0, 0, 0, 0.12)",
          backdropFilter: "blur(9.100000381469727px)",
          margin: "0px",
        },
        "& .MuiButtonBase-root": {
          minHeight: "50px",
        },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="student-content"
        id="student-content"
        sx={{
          "& .MuiAccordionSummary-content": { margin: "0px !important" },
          "&.Mui-expanded .MuiAccordionSummary-content": {
            margin: "0px !important",
          },
        }}
      >
        <Typography component="span">
          <figure>
            <img src={accordianHeader} />
            <p className={styles.header_text}>Bus Details</p>
          </figure>
        </Typography>
      </AccordionSummary>

      <AccordionDetails id="student-content">
        <Typography component="div">
          <div className={styles.student_cards_wrapper}>
            <StudentCard name="vamsi" admissionNo="HYD 1245" />
            <figure>
              <img src={cardDivider} />
            </figure>

            <StudentCard name="ram" admissionNo="HYD 1245" />
          </div>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default StudentCardAccordian;
