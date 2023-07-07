import React, { useState } from "react";

const Search = ({ searchResult, query }) => {
  const [showFullTranscript, setShowFullTranscript] = useState(false);

  const toggleShowFullTranscript = () => {
    setShowFullTranscript((prevValue) => !prevValue);
  };

  let displayedTranscript = searchResult;

  if (!showFullTranscript) {
    const words = searchResult.split(" "); // Split the transcript into words
    const queryIndex = words.findIndex((word) =>
      word.toLowerCase().includes(query.toLowerCase())
    ); // Find the index of the query term (case-insensitive)

    if (queryIndex !== -1) {
      const start = Math.max(0, queryIndex - 10); // Starting index (10 words before the query)
      const end = Math.min(words.length, queryIndex + 10 + 1); // Ending index (10 words after the query + 1 for inclusive slice)

      displayedTranscript = words.slice(start, end).join(" "); // Extract the portion of the transcript with 10 words before and after the query
    } else {
      displayedTranscript = ""; // Query term not found
    }
  }

  return (
    <div className="p-4 rounded bg-teal-900 text-white">
      <div>{displayedTranscript}</div>
      {!showFullTranscript && displayedTranscript && (
        <button
          className="text-teal-300 underline mt-2"
          onClick={toggleShowFullTranscript}
        >
          Show Full Transcript
        </button>
      )}
    </div>
  );
};

export default Search;