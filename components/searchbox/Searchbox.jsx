import React from "react";
import SearchInput from "./SearchInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Searchbox() {
  return (
    <div className="relative">
      <span className="absolute w-5 py-2 pl-2 text-gray-600 focus-within:text-gray-400">
        <FontAwesomeIcon icon={faSearch} />
      </span>
      <SearchInput />
    </div>
  );
}
