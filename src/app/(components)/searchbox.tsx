import style from "../(styles)/search.module.scss";
export const Search = () => {
  return (
    <div className={style.wrap}>
      <div className={style.search}>
        <input type="text" className="searchTerm" placeholder="Write...." />
        <button type="submit" className={style.searchButton}>
          search
        </button>
      </div>
    </div>
  );
};
