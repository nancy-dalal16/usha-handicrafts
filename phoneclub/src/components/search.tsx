import React from "react";
import SearchIcon from "assets/icons/search-icon";
import { useSearch } from "contexts/search/use-search";
import { SearchBase, SearchIconWrapper, SearchInput } from "./utils/theme";

type SearchProps = { className?: string; id?: string; [key: string]: unknown };

const Search = React.forwardRef<HTMLInputElement, SearchProps>(
  ({ className = "", ...props }, ref) => {
    const { searchTerm, setSearchTerm } = useSearch();
    const onSearch = (e) => {
      e.preventDefault();
      const { value } = e.currentTarget;
      setSearchTerm(value);
    };
    const onSubmit = (e) => e.preventDefault();

    const classNames = SearchBase + " " + className;
    return (
      <form noValidate role="search" className={classNames} onSubmit={onSubmit}>
        <span className={SearchIconWrapper}>
          <SearchIcon color="#5a5a5a" />
        </span>
        <label htmlFor={props.id || "search-normal"} className="sr-only">
          {props.id || "search-normal"}
        </label>
        <input
          type="search"
          placeholder="Search your products here"
          className={SearchInput}
          id={props.id || "search-normal"}
          value={searchTerm}
          onChange={onSearch}
          autoComplete="off"
          ref={ref}
          {...props}
        />
      </form>
    );
  }
);

export default Search;
