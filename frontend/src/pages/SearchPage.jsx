import React, { useState } from "react";
import logo from "../assets/logo.png"

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    const newSearchTerm = event.target.value
    setSearchTerm(newSearchTerm);
    setSearchResults(Array(5).fill(newSearchTerm));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-primaryBackground text-white">
      <div className="flex items-center space-x-3">
        <div className="w-20 h-20"> 
        <img src={logo} />
        </div>
        <h1 className="text-4xl font-bold">Lex Fridman Go</h1>
      </div>
      <div className="w-full max-w-lg mt-6">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-4 rounded bg-darkGreen text-white placeholder-midGreen focus:outline-none focus:ring-2 focus:ring-midGreen"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="w-full max-w-lg mt-6 space-y-3">
        {searchResults.map((result, index) => (
          <div
            key={index}
            className="p-4 rounded bg-darkGreen text-white"
          >
            {result}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
