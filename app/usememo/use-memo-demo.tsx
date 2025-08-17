"use client";
import { useMemo, useState } from "react";
import styles from "./use-memo-demo.module.scss";
import { initialItems } from "./utlls";

const UseMemoDemo = () => {
  const snippet = `"use client";
import { useMemo, useState } from "react";
import styles from "./use-memo-demo.module.scss";
import { initialItems } from "./utlls";
const UseMemoDemo = () => {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);
    //WE HAVE useMemo HERE, without it , react will call it everytime when any state change that triggers re render 
  const selectedItem = useMemo(
    () => items.find((item) => item.id === count),
    [items, count]
  ); 
  console.log("selected item ", selectedItem);
  return (
    <>
      <div className={styles.container}>
        <h1> Count : {count}</h1>
        <h1> Selected item: {selectedItem?.id}</h1>
        <div>
          <button onClick={() => setCount((prev) => prev + 1)}>
            Increment
          </button>
        </div>
      </div>
    </>
  );
};

export default UseMemoDemo;`;
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  const selectedItem = useMemo(
    () => items.find((item) => item.id === count),
    [items, count]
  );
  console.log("selected item ", selectedItem);
  return (
    <>
      <div className={styles.container}>
        <h1> Count : {count}</h1>
        <h1> Selected item: {selectedItem?.id}</h1>
        <div>
          <button onClick={() => setCount((prev) => prev + 1)}>
            Increment
          </button>
        </div>
      </div>

      <div className={styles["code-wrapper"]}>
        <code>
          <pre>{snippet}</pre>
        </code>
      </div>
    </>
  );
};

export default UseMemoDemo;
