import css from "./SearchBox.module.css";
import { FcSearch } from "react-icons/fc";

const SearchBox = ({ searchName, onFilter }) => {
  
  return (
    <div className={css.searchWrapper}>
      <p className={css.searchText}>Search by name</p>
      <input
        className={css.input}
        type="text"
        name="searchName"
        // Якщо форма контрольована то треба підв'язати інпути до того що в state
        value={searchName}
        onChange={onFilter}
      />
      <span className={css.icon}>
        <FcSearch />
      </span>
    </div>
  );
};

export default SearchBox;
