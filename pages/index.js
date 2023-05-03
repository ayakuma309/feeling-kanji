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
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        id="title"
        type="text"
        placeholder="元明笑癒"
        onChange={inputTitle}
      />
      <div className="text">{title}</div>
      {title?.trim() && (
        <Link href={`/${title}`}>
          OGPを作成する
        </Link>
      )}
    </div>
  );
};
export default Home;
