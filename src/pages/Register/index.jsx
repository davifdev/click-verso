import styles from "./style.module.css";

import { FormComponent } from "../../components/FormComponent";

export const Register = () => {
  return (
    <section className={styles.s_register}>
      <FormComponent title="Cadastro" btnName="Cadastrar" />
    </section>
  );
};
