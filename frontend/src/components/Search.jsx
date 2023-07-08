import React, { useState } from "react";

// Simple modal component
const Modal = ({ onClose, children, title, date }) => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto ">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-black opacity-40"></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
          {" "}
          &#8203;
        </span>
        <div className="inline-block align-bottom bg-midGreen rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              className="p-2 rounded-xl w-21 mb-2 bg-midAccentGreen hover:opacity-50"
              onClick={onClose}
            >
              {title} - {date}
            </button>
          </div>
          <div className="p-4 text-black overflow-auto max-h-screen">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

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
