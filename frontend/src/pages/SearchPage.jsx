import React, { useState } from "react";
import Search from "../components/Search";
import DropdownMenu from "../components/DropDown";
import LoadingSpinner from "../components/LoadingSpinner";
import logo from "../assets/logo.png";
import {
  fetchFull,
  fetchFuzzy,
  fetchPhrase,
  fetchProximity,
  fetchSearch,
} from "../services/dataFetch";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isQuerySent, setIsQuerySent] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isOptionSelected, setIsOptionSelected] = useState(true);

  const options = [
    "General Search",
    "Phrase Search",
    "Full-Text Search",
    "Fuzzy Search",
    "Proximity Search",
  ];

  const handleType = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
  };

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      if (!selectedOption) {
        setIsOptionSelected(false);
        return;
      }
      setIsOptionSelected(true);
      setIsLoading(true);
      const fetchDataAsync = async () => {
        let result;
        switch (selectedOption) {
          case "Phrase Search":
            result = await fetchPhrase(searchTerm);
            break;
          case "Full-Text Search":
            result = await fetchFull(searchTerm);
            break;
          case "Fuzzy Search":
            result = await fetchFuzzy(searchTerm);
            break;
          case "Proximity Search":
            result = await fetchProximity(searchTerm);
            break;
          case "General Search": // New case for the general search
            result = await fetchSearch(searchTerm);
            break;
          default:
            console.error("Invalid search option");
            return;
        }
        console.log(result);
        setSearchResult(result); // save the entire result
        setIsLoading(false);
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
      <div className="flex items-center w-full max-w-3xl mt-6 space-x-0">
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
      {isLoading && <LoadingSpinner />}
      {!isOptionSelected && (
        <div className="mt-4 text-red-600">Please select a search type.</div>
      )}
      <div className="w-full max-w-6xl mt-6 space-y-3">
        {isQuerySent &&
          searchResult.map((result, index) => (
            <Search
              key={index}
              title={result.title} // Corrected
              transcript={result.transcript}
              date={result.date}
              query={searchTerm}
            />
          ))}
      </div>
    </div>
  );
};

export default SearchPage;
