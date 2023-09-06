import React from "react";
import styles from "./Note.module.scss";

const Note = ({ children }) => {
  return (
    <article className={styles.note}>
      <h2 className={styles.note__h2}>Note</h2>
      {children}
    </article>
  );
};

export default Note;
