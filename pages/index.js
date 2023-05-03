import React , { useState } from "react";
import Link from "next/link";

const Home = () => {
  const [title, setTitle] = useState("");

  const inputTitle = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div>
      <main>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        id="title"
        type="text"
        placeholder="元明笑癒"
        onChange={inputTitle}
      />
        {title?.trim() && (
          <Link href={`/${title}`}>
            OGPを作成する
          </Link>
        )}
      </main>
    </div>
  );
};
export default Home;
