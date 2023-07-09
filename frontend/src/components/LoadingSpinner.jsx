import React from "react";
import { PropagateLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center">
      <PropagateLoader color="#36d7b7" className="ml-6 mt-10"/>
    </div>
  );
};

export default LoadingSpinner;
