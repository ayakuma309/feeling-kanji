import React , { useState } from "react";
import Link from "next/link";

const Home = () => {
  const [text, setText] = useState();

  const inputHandler = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <main>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        id="meaning"
        type="text"
        placeholder="漢字を送る相手(37期トリッキーさん)"
        onChange={inputHandler}
      />

        {text?.trim() && (
          <Link href={`/${text}`}>
            OGPを作成する
          </Link>
        )}
      </main>
    </div>
  );
};
export default Home;
