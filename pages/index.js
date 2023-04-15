import React ,{ useState } from "react"

export default function Home() {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [meaning, setMeaning] = useState();
  return (
    <div className="w-full max-w-md mx-auto mt-10">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            タイトル
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="タイトルを入力してください"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="meaning">
            誰のことですか？
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="meaning"
            type="text"
            placeholder="漢字を送る相手(37期トリッキーさん)"
            onChange={(e) => setMeaning(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            説明
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            type="text"
            placeholder="説明"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto"
            type="button"
          >
            生成する！
          </button>
        </div>
      </form>
    </div>
  );
};
