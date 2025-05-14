import styles from "./style.module.css";

import { useFetchPost } from "../../hooks/useFetchPost";
import { useParams, useNavigate, Link } from "react-router-dom";

export const PostUnique = () => {
  const { id } = useParams();
  const { post } = useFetchPost("posts", id);
  const navigate = useNavigate();

  return (
    <section className={styles.postContainer}>
      <div>
        <div
          className={styles.principalImage}
          style={{ backgroundImage: `url(${post.image})` }}
        ></div>
        <div className={styles.content}>
          <h1>{post.title}</h1>
          <p className={styles.description}>{post.description}</p>
        </div>
      </div>
      <button onClick={() => navigate(-1)}>Voltar</button>
    </section>
  );
};
