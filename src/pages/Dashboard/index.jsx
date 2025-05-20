import styles from "./style.module.css";

import { ManagerComponent } from "../../components/ManagerComponent";
import { NoPosts } from "../../components/NoPosts";
import { useFetchPosts } from "../../hooks/useFetchPosts";

export const Dashboard = () => {
  const { posts } = useFetchPosts("posts");
  console.log(posts);
  return (
    <section className={styles.s_dashboard}>
      <h2>Dashboard</h2>

      <div className={styles.dashboard}>
        {posts && posts.length === 0 && <>
          <NoPosts />
        </>}
        {posts &&
          posts.map((post) => <ManagerComponent {...post} key={post.id} />)}
      </div>
    </section>
  );
};
