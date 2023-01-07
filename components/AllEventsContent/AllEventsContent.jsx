import React, { useState, useEffect } from "react";
import Comments from "../Comments/Comments";
import CommentResult from "../Comments/CommentResult";

const AllEventsContent = ({ id, event }) => {
  const [showComment, setShowComment] = useState(false);
  const [comment, setComment] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (commentData) => {
    setLoading(true);
    console.log("loading", loading);

    fetch("/api/comment/" + id, {
      method: "POST",
      body: JSON.stringify(commentData),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));

    setLoading(false);
    console.log("loading", loading);
  };

  const handleShow = () => {
    setShowComment(!showComment);
  };
  useEffect(() => {
    if (showComment) {
      fetch("/api/comment/" + id)
        .then((response) => response.json())
        .then((data) => setComment(data));

      console.log(comment);
    }
  }, [showComment]);

  return (
    <div className="relative top-48 flex flex-col items-center">
      <div className="w-1/3 flex flex-col items-center">
        <p>{event.description}</p>
        <button
          className="p-2 rounded-lg border-2 border-cyan-400 mt-8  "
          onClick={handleShow}
        >
          Hide Comments
        </button>
        <Comments id={id} handleSubmit={handleSubmit} loading={loading} />
        {showComment && <CommentResult allcomment={comment} />}
      </div>
    </div>
  );
};

export default AllEventsContent;
