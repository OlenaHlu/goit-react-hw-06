import { useId } from "react";
import css from "./SearchBox.module.css";

const SearchBox = ({ value, onSearch }) => {
  const searchId = useId();
  return (
    <div className={css.serchForm}>
      <label className={css.searchTitle} htmlFor={searchId}>
        Find contacts by name
      </label>
      <input
        className={css.serchInput}
        type="text"
        id={searchId}
        value={value}
        onChange={(event) => onSearch(event.target.value)}
      />
    </div>
  );
};

export default SearchBox;
