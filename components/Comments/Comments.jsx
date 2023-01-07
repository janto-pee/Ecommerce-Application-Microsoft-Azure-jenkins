import React, { useState } from "react";

const Comments = ({ id, handleSubmit, loading }) => {
  const [form, setForm] = useState({
    email: "",
    username: "",
    text: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleForm = (e) => {
    e.preventDefault();

    handleSubmit({
      username: form.username,
      email: form.email,
      text: form.text,
    });
  };

  return (
    <div className="mt-8 bg-cyan-600 p-4 my-4">
      <form onSubmit={handleForm}>
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <label htmlFor="" className="text-white">
              Your Email
            </label>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="border-none bg-cyan-100"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="text-white">
              Your Name
            </label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              className="border-none bg-cyan-100"
            />
          </div>
        </div>
        <div className="flex flex-col mt-2">
          <label htmlFor="" className="text-white">
            Your Comment
          </label>
          <textarea
            type="text"
            name="text"
            value={form.text}
            onChange={handleChange}
            rows={4}
            cols={1}
            className="bg-cyan-100"
          />
        </div>
        <button
          disabled={loading}
          className={`border-cyan-800 text-white mt-2 py-2 px-4 rounded-md bg-cyan-300 ${
            loading && "bg-cyan-100 text-white"
          }`}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Comments;
