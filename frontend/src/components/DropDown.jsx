import React, { useState, useRef, useEffect } from "react";

const DropdownMenu = ({ options, selected, onSelectedChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }
      setIsOpen(false);
    };

    document.body.addEventListener("click", onBodyClick);

    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  const renderedOptions = options.map((option, index) => (
    <div
      key={index}
      className="bg-darkGreen text-white py-1 px-2 hover:bg-midGreen cursor-pointer text-sm"
      onClick={() => {
        onSelectedChange(option);
        setIsOpen(false);
      }}
    >
      {option}
    </div>
  ));

  return (
    <div
      ref={ref}
      className="relative inline-block text-left w-48 border-midGreen border-2 rounded-l"
    >
      <div
        className={`w-full h-14 flex items-center px-4 rounded bg-dlp text-white cursor-pointer text-sm ${
          isOpen ? "focus:outline-none focus:ring-2 focus:ring-midGreen" : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected || "Select Type..."}
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu">
            {renderedOptions}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
