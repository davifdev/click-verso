import styles from "./style.module.css";
import { useQuery } from "../../hooks/useQuery";
import { useFetchPosts } from "../../hooks/useFetchPosts";

import Post from "../../components/Post";

export const Search = () => {
  const query = useQuery();
  const search = query.get("q");
  const { posts } = useFetchPosts("posts", search.toLowerCase());

  return (
    <section className={styles.search_container}>
      <h2>{search}</h2>
      <div className={styles.posts}>
        {posts &&
          posts.map(
            (post) => (console.log(post), (<Post {...post} key={post.id} />))
          )}
      </div>
    </section>
  );
};
