import styles from "./style.module.css";

import Post from "../../components/Post";
import { useFetchPosts } from "../../hooks/useFetchPosts";

export const Home = () => {
  const { posts } = useFetchPosts("posts");

  return (
    <section className={styles.s_home}>
      <div className={styles.search}>
        <input type="search" placeholder="Pesquise por tags" />
        <button>Pesquisar</button>
      </div>

      <div className={styles.postsContainer}>
        {posts && posts.map((post) => <Post {...post} key={post.id} />)}
      </div>
    </section>
  );
};
