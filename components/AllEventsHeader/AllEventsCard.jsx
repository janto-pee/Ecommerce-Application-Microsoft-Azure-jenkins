import React from "react";
import { AiOutlineArrowRight, AiOutlineCalendar } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

const AllEventsCard = ({ event }) => {
  return (
    <div className="bg-gray-800 boxshadow2 flex items-center gap-4 my-4 w-2/6 mx-auto p-4 rounded-md headCard text-cyan-200">
      <div className="basis-3/6 flex justify-center">
        <img
          src={event.img}
          alt="images"
          className="border-4 h-44 w-44 rounded-full border-gray-100"
        />
      </div>
      <div className="basis-3/6 py-2 px-4 ">
        <div className=" flex-col gap-4 items-center m-2">
          <AiOutlineCalendar className="" />
          <span className="text-sm">{event.date}</span>
        </div>
        <div className="flex-col gap-4 items-center m-2 my-4 ">
          <GoLocation className="" />
          <span className="w-1/3 text-sm">{event.location}</span>
        </div>
      </div>
    </div>
  );
};

export default AllEventsCard;
