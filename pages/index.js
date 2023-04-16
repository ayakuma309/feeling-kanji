import React , { useState } from "react";
import Link from "next/link";

const Home = () => {
  const [title, setTitle] = useState("");
  const [meaning, setMeaning] = useState("");
  const [description, setDescription] = useState("");

  const inputTitle = (e) => {
    setTitle(e.target.value);
  };
  const inputMeaning = (e) => {
    setMeaning(e.target.value);
  };
  const inputDescription = (e) => {
    setDescription(e.target.value);
  };

  const query = {
    title: title,
    meaning: meaning,
    description: description
  };

  return (
    <div>
      <main>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        id="title"
        type="text"
        placeholder="漢字を送る相手(37期トリッキーさん)"
        onChange={inputTitle}
      />
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        id="meaning"
        type="text"
        placeholder="漢字を送る相手(37期トリッキーさん)"
        onChange={inputMeaning}
      />
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        id="description"
        type="text"
        placeholder="漢字を送る相手(37期トリッキーさん)"
        onChange={inputDescription}
      />

        {title?.trim() && (
          <Link href={{ pathname: `/${title}`, query }}>
            OGPを作成する
          </Link>
        )}
      </main>
    </div>
  );
};
export default Home;
