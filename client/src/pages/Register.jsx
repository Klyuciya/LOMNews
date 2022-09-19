import React from "react";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-1/4 h-60 mx-auto mt-40"
    >
      <h1 className="text-lg  font-bold text-black text-center">
        Registration form
      </h1>
      <label className="text-xs text-400 font-bold">
        Name:
        <input
          type="text"
          //               value={username}
          //               onChange={(e) => setUsername(e.target.value)}
          placeholder="Name"
          className="mt-1 text-black w-full rounded-md bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700"
        />
      </label>
      <label className="text-xs text-400 font-bold">
        Email:
        <input
          type="email"
          //               value={username}
          //               onChange={(e) => setUsername(e.target.value)}
          placeholder="Email"
          className="mt-1 text-black w-full rounded-md bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700"
        />
      </label>
      <label className="text-xs text-400  font-bold">
        Password:
        <input
          type="password"
          //               value={username}
          //               onChange={(e) => setUsername(e.target.value)}
          placeholder="Password"
          className="mt-1 text-black w-full rounded-md bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700"
        />
      </label>
      <label className="text-xs text-400 font-bold">
        Avatar:
        <input
          type="text"
          //               value={username}
          //               onChange={(e) => setUsername(e.target.value)}
          placeholder="Avatar"
          className="mt-1 text-black w-full rounded-md bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700"
        />
      </label>

      <div className="flex gap-8 justify-center mt-4">
        <button
          type="submit"
          // onClick={handleSubmit}
          className="flex justify-center items-center text-s bg-sky-500 hover:bg-sky-700 text-white font-bold rounded-sm py-2 px-4"
        >
          Sign up
        </button>
        <Link
          to="/login"
          className="flex justify-center items-center text-xs text-black font-bold"
        >
          Already signed up? Log in
        </Link>
      </div>
    </form>
  );
};
