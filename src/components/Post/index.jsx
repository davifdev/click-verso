import styles from "./style.module.css";

const Post = ({ post }) => {
  return (
    <div className={styles.post}>
      <div className={styles.post_img}>
        <img
          src="https://i.pinimg.com/736x/95/26/03/95260370b7ddaf8ce55bfd95f42cb0c3.jpg"
          alt=""
        />
      </div>

      <div className={styles.post_details}>
        <h2>{post.title}</h2>
        <p>{post.description}</p>

        <div className={styles.tags}>
          {/* {post.tagsArray && post.tagsArray.map((tag) => <span>{tag}</span>)} */}
        </div>

        <button>Ler</button>
      </div>
    </div>
  );
};

export default Post;
