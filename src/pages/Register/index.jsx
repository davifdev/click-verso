import styles from "./style.module.css";

import { FormAuth } from "../../components/FormAuth";

export const Register = () => {
  return (
    <section className={styles.s_register}>
      <FormAuth title="Cadastro" btnName="Cadastrar" />
    </section>
  );
};
