import styles from "./style.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const ManagerComponent = ({ id, title }) => {
  return (
    <div className={styles.dashboardEdit}>
      <strong>{title}</strong>
      <div className={styles.btn_settings}>
        <Link to={`/post/${id}`}>
          <FontAwesomeIcon icon={faEye} className={styles.view} />
        </Link>
        <Link to={`/posts/edit/${id}`}>
          <FontAwesomeIcon icon={faPenToSquare} className={styles.edit} />
        </Link>
        <FontAwesomeIcon icon={faTrash} className={styles.delete} />
      </div>
    </div>
  );
};
