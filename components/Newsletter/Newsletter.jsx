import React, { useState } from "react";
import Error from "../Error/Error";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [validation, setValidation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setValidation(true);
      return;
    }
    fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({ email: email }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));

    setEmail("");
  };

  return (
    <div>
      <h1 className="font-bold text-xl mb-4">Sign up to stay updated!</h1>
      {validation && <Error errorMessage={"fields empty"} />}
      <input
        type="email"
        className="px-2 border-gray-600 bg-white boxshadow"
        placeholder="your email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button
        className="px-2 bg-cyan-600 text-white rounded-md "
        onClick={handleSubmit}
      >
        Register
      </button>
    </div>
  );
};

export default Newsletter;
