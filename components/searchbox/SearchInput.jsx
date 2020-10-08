import React from "react";

export default function SearchInput() {
  return (
    <input
      type="search"
      placeholder="Search..."
      autoComplete="off"
      className={`py-2 text-sm w-full text-white bg-gray-200 rounded-md pl-8
                       focus:outline-none focus:bg-white focus:text-gray-900`}
    />
  );
}
