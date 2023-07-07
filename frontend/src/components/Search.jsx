import React from "react";

const Search = ({searchTerm}) => {
  return (
    <div className="w-full max-w-lg mt-6">
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-4 rounded bg-darkGreen text-white placeholder-midGreen focus:outline-none focus:ring-2 focus:ring-midGreen"
        value={searchTerm}
      />
    </div>
  );
};

export default Search;
