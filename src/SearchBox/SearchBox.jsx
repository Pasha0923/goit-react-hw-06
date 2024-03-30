import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../redux/filtersSlice";
import css from "./SearchBox.module.css";
import { FcSearch } from "react-icons/fc";
import { selectNameFilter } from "../selectors/selectors";

const SearchBox = () => {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  return (
    <div className={css.searchWrapper}>
      <p className={css.searchText}>Search by name</p>
      <input
        className={css.input}
        type="text"
        name="filter"
        // Якщо форма контрольована то треба підв'язати інпути до того що в state
        value={filter}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
      <span className={css.icon}>
        <FcSearch />
      </span>
    </div>
  );
};

export default SearchBox;
