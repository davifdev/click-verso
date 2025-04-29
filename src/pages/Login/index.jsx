import styles from "./style.module.css";

import { FormComponent } from "../../components/FormComponent";

export const Login = () => {
  return (
    <section className={styles.s_login}>
      <FormComponent isLogin={true} title="Login" btnName="Entrar" />
    </section>
  );
};
