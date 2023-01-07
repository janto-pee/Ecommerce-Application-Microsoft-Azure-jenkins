import React from "react";
import Navbar from "../Navbar/Navbar";
import AllEventsCard from "./AllEventsCard";
import Comments from "../Comments/Comments";
import CommentResult from "../Comments/CommentResult";

const AllEventsHeader = ({ event }) => {
  return (
    <div className="allEvents bg-cyan-50 ">
      <Navbar />
      <div className="w-full bg-cyan-800">
        <h1 className="text-white text-4xl font-bold text-center pt-8 pb-20">
          Networking For Beginners
        </h1>
      </div>
      <AllEventsCard event={event} />
    </div>
  );
};

export default AllEventsHeader;
