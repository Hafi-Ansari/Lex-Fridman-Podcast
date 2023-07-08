import React, { useState } from "react";
import Modal from "./Modal";

const Search = ({ title, transcript, date, query }) => {
  const [showFullTranscript, setShowFullTranscript] = useState(false);

  const toggleShowFullTranscript = () => {
    setShowFullTranscript((prevValue) => !prevValue);
  };

  let displayedTranscript = transcript;

  let beforeQuery = "";
  let afterQuery = "";
  let queryText = "";

  if (!showFullTranscript) {
    const words = transcript.split(" "); // Split the transcript into words
    const queryIndex = words.findIndex((word) =>
      word.toLowerCase().includes(query.toLowerCase())
    ); // Find the index of the query term (case-insensitive)

    if (queryIndex !== -1) {
      const start = Math.max(0, queryIndex - 10); // Starting index (10 words before the query)
      const end = Math.min(words.length, queryIndex + 10 + 1); // Ending index (10 words after the query + 1 for inclusive slice)

      beforeQuery = words.slice(start, queryIndex).join(" ") + " ";
      queryText = words[queryIndex];
      afterQuery = " " + words.slice(queryIndex + 1, end).join(" ");
    } else {
      displayedTranscript = ""; // Query term not found
    }
  }

  return (
    <div className="p-4 rounded bg-midGreen text-white overflow-y-auto overflow-x-hidden max-h-64">
      <div>
        <button
          className="p-2 rounded-xl w-21 mb-2 bg-midAccentGreen hover:opacity-50"
          onClick={toggleShowFullTranscript}
        >
          {title} - {date}
        </button>
      </div>
      {!showFullTranscript && (
        <span>
          {beforeQuery}
          <span className="bg-midAccentGreen">{queryText}</span>
          {afterQuery}
        </span>
      )}
      {showFullTranscript && (
        <Modal onClose={toggleShowFullTranscript} title={title} date={date}>
          {displayedTranscript}
        </Modal>
      )}
    </div>
  );
};

export default Search;
