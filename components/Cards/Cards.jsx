import React from "react";
import Newsletter from "../Newsletter/Newsletter";
import Card from "../Card/Card";

const Cards = ({ events, children }) => {
  return (
    <div className="px-2 sm:px-12 mt-6 flex flex-col gap-4 items-center justify-center">
      {children}

      <div className="mt-8 w-1/2">
        {events.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
