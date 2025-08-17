"use client";
import { useCallback, useRef, useState } from "react";
import Search from "./search";
import styles from "./styles.module.scss";

const allUsers = ["George", "John", "Prakash", "James", "Sandra"];

const UseCallbackDemo = () => {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState(allUsers);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleSearch = useCallback((text: string) => {
    if (timeoutRef.current) {
      console.log("Will clear previous timer");
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      console.log("Filtering for ", text);
      const filteredUsers = allUsers.filter((user) => {
        return user.toLowerCase().includes(text.toLowerCase());
      });
      setUsers(filteredUsers);
    }, 1000);
  }, []);
  return (
    <>
      <div className={styles.container}>
        Demo for useCallback hook
        <div>Current count : {count}</div>
        <button
          onClick={() => {
            setCount((c) => c + 1);
          }}
        >
          Change Count
        </button>
        <div className={styles["search-wrapper"]}>
          <Search onChange={handleSearch}></Search>
        </div>
        <div className={styles["list-wrapper"]}>
          <ul>
            {users.map((user) => {
              return <li key={user}>{user}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default UseCallbackDemo;
