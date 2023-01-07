import React from "react";

const EventsSearchHeader = ({ month, year }) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-2xl">
        Events on {month}, {year}
      </h1>
      <button className="bg-cyan-800 p-2 text-white my-4 rounded-md">
        Show all events
      </button>
    </div>
  );
};

export default EventsSearchHeader;
