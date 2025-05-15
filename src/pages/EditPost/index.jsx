import { FormCreateAndEdit } from "../../components/FormCreateAndEdit";
import styles from "./style.module.css";

export const EditPost = () => {
  return (
    <section className={styles.s_createPost}>
      <FormCreateAndEdit isEdit={true} title="Editar Postagem" />
    </section>
  );
};