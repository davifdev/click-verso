import styles from "./style.module.css";

import { Link } from "react-router-dom";

export const NoPosts = () => {
  return (
    <div className={styles.noPosts}>
      <h3>Nenhuma postagem encontrada...</h3>
      <Link to="/post/create" className={styles.createPost}>
        Criar Postagem
      </Link>
    </div>
  );
};
