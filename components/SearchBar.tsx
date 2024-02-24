"use client";

import React from "react";
import { Input } from "./ui/input";

interface SearchBarProp {
  onSearchQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProp> = ({ onSearchQuery }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    onSearchQuery(query);
  };

  return (
    <div className="h-18 sticky top-28 z-10 bg-white p-4">
      <Input
        type="text"
        placeholder="Search User..."
        className=" border-cyan-500 py-5 text-xl"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
