import React, { useState } from "react";
import Search from "../components/Search";
import DropdownMenu from "../components/DropDown";
import logo from "../assets/logo.png";
import { fetchData } from "../services/dataFetch";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isQuerySent, setIsQuerySent] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

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
      <div className="flex items-center w-full max-w-2xl mt-6 space-x-0">
        <DropdownMenu
          options={options}
          selected={selectedOption}
          onSelectedChange={setSelectedOption}
          className="rounded-l bg-darkGreen text-white"
        />
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-4 rounded-r bg-darkGreen text-white placeholder-midGreen outline-none ring-2 ring-midGreen"
          value={searchTerm}
          onKeyDown={handleSearch}
          onChange={handleType}
        />
      </div>
      <div className="w-full max-w-2xl mt-6 space-y-3">
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
