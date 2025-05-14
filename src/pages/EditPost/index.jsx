import { FormCreateAndEdit } from "../../components/FormCreateAndEdit";
import styles from "./style.module.css";

export const CreatePost = () => {
  return (
    <section className={styles.s_createPost}>
      <FormCreateAndEdit isEdit={true} />
    </section>
  );
};