import { ToastContainer } from "react-toastify";
import Verify from "./Verify";
import styles from "./../form.module.css";

export default function Register() {
  return (
    <div
      className={styles.background}
      style={{
        border: "1px solid white",
        width: "100%",
        height: "100vh",
        backgroundColor: "white",
        color: "black",
      }}
    >
      <Verify />
      <ToastContainer />
    </div>
  );
}
