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
    const regex = new RegExp(`(${query})`, "gi");
    const match = transcript.match(regex);

    if (match) {
      const splitTranscript = transcript.split(regex);
      beforeQuery = splitTranscript[0];
      queryText = match[0];
      afterQuery = splitTranscript[2];
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
