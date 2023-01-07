import React from "react";

const Error = ({ errorMessage }) => {
  return (
    <div className="p-4">
      <p className="p-2 bg-red-300 text-white">{errorMessage}</p>
    </div>
  );
};

export default Error;
