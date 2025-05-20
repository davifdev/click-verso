import styles from "./style.module.css";

import { Link } from "react-router-dom";

const Post = ({ title, tagsArray,description, image, id, createdBy }) => {
  return (
    <div className={styles.post}>
      <div
        className={styles.postImg}
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      <div className={styles.postDetails}>
        <h2>{title}</h2>
        <p>Criado por: {createdBy}</p>

        <p>{description}</p>
        <div className={styles.tags}>
          {tagsArray && tagsArray.map((tag, index) => <span key={index}>{tag}</span>)}
        </div>

        <Link to={`/post/${id}`}>Ler</Link>
      </div>
    </div>
  );
};

export default Post;
