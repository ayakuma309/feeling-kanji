import React , { useState } from "react";
import Link from "next/link";
import { useForm } from 'react-hook-form';
import Head from "next/head";
import { TwitterShareButton , TwitterIcon} from "react-share";
const Home = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "";
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
    <>
      <Head>
        <title>あの人の感じはどんな漢字</title>
        <meta charset="utf-8" />
        <meta
          name="og:title"
          property="og:title"
          content={`あの人の感じはどんな漢字`}
        />
        <meta
          name="description"
          content={`その人の印象(感じ)を漢字にして、漢字をプレゼントしよう`}
        />
        <meta
          property="og:image"
          key="ogImage"
          content={`${baseUrl}/ogp.png`}
        />
        <meta
          name="twitter:card"
          key="twitterCard"
          content="summary_large_image"
        />
        <meta name="twitter:site" content="@ZCunkuma" />
        <meta name="twitter:creator" content="@ZCunkuma" />
        <meta
          name="twitter:image"
          key="twitterImage"
          content={`${baseUrl}/ogp.png`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className="container">
      <h1 className="heading">
        あの人の感じはどんな漢字
        <TwitterShareButton
          title="あの人の感じはどんな漢字"
          hashtags={["あの人の感じはどんな漢字,他己分析"]}
          related={["ZCunkuma"]}
          url="https://feeling-kanji.vercel.app/"
        >
          <TwitterIcon  className="share-button"/>
        </TwitterShareButton>
      </h1>
      <p className="description">
        友達や大切な人の印象(感じ)を4文字の漢字にしてプレゼントしよう！
      </p>
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
            value: /^[\u4e00-\u9faf]+$/,
            message: '漢字のみ入力してください。',
          },
          })}
          className="shadow appearance-none border rounded w-80 py-5 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-5 px-5">
          作成
        </button>
        {errors.title && (
          <p className="error error-add">{errors.title.message}</p>
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
    </>
  );
};
export default Home;
