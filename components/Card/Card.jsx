import Link from "next/link";
import React from "react";
import { AiOutlineArrowRight, AiOutlineCalendar } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

const Card = ({ item }) => {
  return (
    <div className="bg-white boxshadow2 flex items-start gap-4 my-4 w-full h-56 rounded-md">
      <img src={item.img} alt="images" className="w-3/6 h-full" />
      <div className="basis-3/6 py-2 px-4 ">
        <h3 className="font-semibold text-xl">{item.title}</h3>
        <div className="flex gap-4 items-center m-2">
          <AiOutlineCalendar className="" />
          <span className="text-sm">{item.date}</span>
        </div>
        <div className="flex gap-4 items-center m-2 my-4 ">
          <GoLocation className="" />
          <span className="w-1/2 text-sm">{item.location}</span>
        </div>
        <Link href={`/events/${item.id}`} className="mt-4">
          <button className="bg-cyan-600 text-white rounded-md flex items-center gap-4 p-1 px-2 ml-auto ">
            <span>Explore Event</span>
            <AiOutlineArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
