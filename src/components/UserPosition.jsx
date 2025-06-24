import React from "react";
import styles from "../components/UserPosition.module.css";

const UserPosition = () => {
  return (
    <div className={styles.position}>
      <div className={styles.box}>
        <button>USE YOUR POSITION</button>
      </div>
    </div>
  );
};

export default UserPosition;
