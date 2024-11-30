"use client";
import { useRouter, useSearchParams } from "next/navigation";
import style from "../(styles)/search.module.scss";
import { ChangeEvent, useCallback, useState } from "react";
export const Search = () => {
  const searchParams: any = useSearchParams();
  const searchValue = searchParams?.get("search");
  const [search, setSearch] = useState(searchValue);
  const router = useRouter();
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
  };
  const handleSearch = () => {
    router.push(`?${createQueryString("search", search)}`);
  };
  return (
    <div className={style.wrap}>
      <div className={style.search}>
        <input
          type="text"
          className="searchTerm"
          placeholder="Write...."
          onChange={handleChange}
        />
        <button
          type="button"
          className={style.searchButton}
          onClick={handleSearch}
        >
          search
        </button>
      </div>
    </div>
  );
};
