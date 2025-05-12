import { Link } from "react-router-dom";
import styles from "./style.module.css";

const Post = ({ title, tagsArray,description, image, id, createdBy }) => {
  return (
    <div className={styles.post}>
      <div
        className={styles.post_img}
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      <div className={styles.post_details}>
        <h2>{title}</h2>
        <p>Criado por: {createdBy}</p>

        <p>{description}</p>
        <div className={styles.tags}>
          {tagsArray && tagsArray.map((tag) => <span>{tag}</span>)}
        </div>

        <Link to={`post/${id}`}>Ler</Link>
      </div>
    </div>
  );
};

export default Post;
