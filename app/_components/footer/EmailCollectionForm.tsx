"use client";

import React, { useState, FormEvent } from "react";

const EmailCollectionForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Email submitted: ${email}`);
    setEmail(""); // Clear the input after submission
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-[20rem] mt-4">
      <div className="flex relative items-center rounded-md overflow-hidden">
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-grow pl-0 border-b-2 text-xs py-2 bg-gray-100 text-black placeholder-gray-500 focus:outline-none"
        />
        <button
          type="submit"
          className="relative right-[3rem] px-4 py-2 bg-[transparent] text-black focus:outline-none"
          aria-label="Subscribe"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default EmailCollectionForm;
