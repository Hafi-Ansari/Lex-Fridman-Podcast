import React from "react";

// Simple modal component
const Modal = ({ onClose, children, title, date }) => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
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

export default Modal;
