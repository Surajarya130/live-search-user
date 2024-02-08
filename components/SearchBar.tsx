"use client";

import React from "react";
import { Input } from "./ui/input";

const SearchBar = () => {
  return (
    <div className="h-18 sticky top-28 z-10 bg-white p-4">
      <Input type="text" placeholder="Search User..." className=" border-cyan-500 py-5 text-xl" />
    </div>
  );
};

export default SearchBar;
