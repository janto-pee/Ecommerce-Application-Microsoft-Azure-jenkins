import React from "react";

const Filter = () => {
  return (
    <div className="bg-white w-1/2 p-4 boxshadow2 rounded-md flex items-center justify-between gap-2">
      <div className="flex gap-2 items-center">
        <label htmlFor="">Year</label>
        <select
          name=""
          id=""
          className="border-2 border-gray-400 rounded-md w-36 p-2"
        >
          {[
            { name: "Event 1", year: 2022, value: "London" },
            { name: "Conference", year: 2012, value: "South Africa" },
            { name: "Picnic", year: 2023, value: "Qatar" },
          ].map((item, index) => (
            <option key={index} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex gap-2 items-center">
        <label htmlFor="">Year</label>
        <select
          name=""
          id=""
          className="border-2 border-gray-400 rounded-md w-36 p-2"
        >
          {[
            { name: "Event 1", year: 2022, value: "London" },
            { name: "Conference", year: 2012, value: "South Africa" },
            { name: "Picnic", year: 2023, value: "Qatar" },
          ].map((item, index) => (
            <option key={index} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex gap-2 text-right">
        <button className="bg-cyan-800 text-white p-2 rounded">
          Find Events
        </button>
      </div>
    </div>
  );
};

export default Filter;
