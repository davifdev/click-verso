import styles from "./style.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const ManagerComponent = () => {
  return (
    <div className={styles.dashboardEdit}>
      <strong>TITLE</strong>
      <div className={styles.btn_settings}>
        <FontAwesomeIcon icon={faEye} className={styles.view} />
        <FontAwesomeIcon icon={faPenToSquare} className={styles.edit} />
        <FontAwesomeIcon icon={faTrash} className={styles.delete} />
      </div>
    </div>
  );
};
