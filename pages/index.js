import React , { useState } from "react";
import Link from "next/link";

const Home = () => {
  const [title, setTitle] = useState("");

  const inputTitle = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className="container">
      <input
        className="shadow appearance-none border rounded w-80 py-5 px-5 text-gray-700 mb-10 leading-tight focus:outline-none focus:shadow-outline"
        id="title"
        type="text"
        placeholder="元明笑癒"
        onChange={inputTitle}
      />
      <div className="text">
        <div className="text-content">
          <h1>{title}</h1>
        </div>
      </div>
      {title?.trim() && (
        <Link href={`/${title}`}>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800  font-bold py-5 px-5 rounded-full">
            OGPを作成する
          </button>
        </Link>
      )}
    </div>
  );
};
export default Home;
