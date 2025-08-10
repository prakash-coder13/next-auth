'use client'
import { useState } from "react";
import styles from "./expandable.module.scss";
const Expandable = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div className={styles.expandable}>
        <div
          className={styles.header}
          onClick={() => {
            setIsExpanded((prev) => {
              return !prev;
            });
          }}
        >
          <div>Title</div>
          <div>{isExpanded? "Collapse": "Expand"}</div>
        </div>

         <div
          className={
            isExpanded
              ? `${styles["body"]} ${styles.expanded}`
              : `${styles["body"]} ${styles.collapsed}`
          }
        >
          This is the body
        </div>
    
      </div>
    </>
  );
};

export default Expandable;
