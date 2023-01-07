import React, { Fragment } from "react";

const CommentResult = ({ allcomment }) => {
  const comment = allcomment.comment;
  console.log(Array.isArray(comment));
  console.log(comment);
  return (
    <div>
      {comment &&
        comment.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-2 border-b-2 border-gray-400 mb-2 w-full"
          >
            <p>{item.text}</p>
            <p>{item.username}</p>
          </div>
        ))}
    </div>
  );
};

export default CommentResult;
