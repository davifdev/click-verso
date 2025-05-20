import styles from "./style.module.css";

import Post from "../../components/Post";
import { Link, useNavigate } from "react-router-dom";
import { NoPosts } from "../../components/NoPosts";
import { useState } from "react";
import { useFetchPosts } from "../../hooks/useFetchPosts";

export const Home = () => {
  const { posts } = useFetchPosts("posts");
  const [query, setQuery] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search?q=${query}`);
  };

  return (
    <section className={styles.s_home}>
      <form className={styles.search} onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Pesquise por tags"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button>Pesquisar</button>
      </form>

      <div className={styles.postsContainer}>
        {posts && posts.length === 0 && (
          <>
            <NoPosts />
          </>
        )}
        {posts && posts.map((post) => <Post {...post} key={post.id} />)}
      </div>
    </section>
  );
};
