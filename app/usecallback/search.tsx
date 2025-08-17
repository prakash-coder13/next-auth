import { memo } from "react";
import styles from "./styles.module.scss";
interface SearchProps {
  onChange: (text: string) => void;
}
const Search = ({ onChange }: SearchProps) => {
  console.log("SEARCH RENDERED");
  return (
    <input
      className={styles.search}
      type="search"
      placeholder="Search users"
      onChange={(e) => onChange(e.target.value)}
    ></input>
  );
};

export default memo(Search);
