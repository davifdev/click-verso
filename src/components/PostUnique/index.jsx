import styles from "./style.module.css";

import { useFetchPost } from "../../hooks/useFetchPost";
import { useParams } from "react-router-dom";
import { marked } from "marked";

export const PostUnique = () => {
  const { id } = useParams();
  const { post } = useFetchPost("posts", id);

  console.log(post.body);

  const renderText = () => {
    if (post.body) return { __html: marked(post.body) };
  };

  return (
    <section className={styles.postContainer}>
      <div
        className={styles.principalImage}
        style={{ backgroundImage: `url(${post.image})` }}
      ></div>

      <div className={styles.content}>
        <h1>{post.title}</h1>
        <p className={styles.description}>{post.description}</p>

        <div dangerouslySetInnerHTML={renderText()} />
      </div>
    </section>
  );
};
