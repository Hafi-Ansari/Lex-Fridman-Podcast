import React, { useState } from "react";
import Search from "../components/Search";
import logo from "../assets/logo.png";
import { fetchData } from "../services/dataFetch";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isQuerySent, setIsQuerySent] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  const handleType = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
  };

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      const fetchDataAsync = async () => {
        const result = await fetchData(searchTerm);
        console.log(result);
        setSearchResult(result); // save the entire result
      };
      fetchDataAsync();
      setIsQuerySent(true);
    }
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
          onKeyDown={handleSearch}
          onChange={handleType}
        />
      </div>
      <div className="w-full max-w-lg mt-6 space-y-3">
        {isQuerySent &&
          searchResult.map((result, index) => (
            <Search
              key={index}
              title={result._source.title}
              transcript={result._source.transcript}
              date={result._source.date}
              query={searchTerm}
            />
          ))}
      </div>
    </div>
  );
};

export default SearchPage;
