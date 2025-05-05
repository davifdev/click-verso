import styles from "./style.module.css";

import { FormAuth } from "../../components/FormAuth";

export const Login = () => {
  return (
    <section className={styles.s_login}>
      <FormAuth isLogin={true} title="Login" btnName="Entrar" />
    </section>
  );
};
