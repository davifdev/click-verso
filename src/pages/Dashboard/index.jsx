import { ManagerComponent } from "../../components/ManagerComponent";
import styles from "./style.module.css";

export const Dashboard = () => {
  return (
    <section className={styles.s_dashboard}>
      <h2>Dashboard</h2>

      <div className={styles.dashboard}>
        <ManagerComponent />
      </div>
    </section>
  );
};
