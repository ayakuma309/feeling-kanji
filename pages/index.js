import React , { useState } from "react";
import Link from "next/link";
import { useForm } from 'react-hook-form';
const Home = () => {
  const [title, setTitle] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const inputTitle = (e) => {
    setTitle(e.target.value);
  };
  const onSubmit = (data) => setTitle(data.title);
  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          id="title"
          placeholder="元明笑癒"
          onChange={inputTitle}
          {...register("title",{
          required: { value: true, message: "入力は必須です" },
          maxLength: { value: 4, message: "4文字で入力してください" },
          minLength: { value: 4, message: "4文字で入力してください" },
          pattern: {
            value: /([\u{3005}\u{3007}\u{303b}\u{3400}-\u{9FFF}\u{F900}-\u{FAFF}\u{20000}-\u{2FFFF}][\u{E0100}-\u{E01EF}\u{FE00}-\u{FE02}]?)/mu,
            message: '漢字のみ入力してください。',
          },
          })}
          className="shadow appearance-none border rounded w-80 py-5 px-5 text-gray-700 mb-10 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-5 px-5 rounded-full">
          作成
        </button>
        {errors.title && (
          <p className="error">{errors.title.message}</p>
          ) }
      </form>
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
