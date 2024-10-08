import React, {useState} from "react";
import Head from "next/head";
import Link from "next/link";
import { TwitterShareButton } from "react-share";
export const getServerSideProps = async (context) => {
  if (typeof context.params?.id === "string") {
    return {
      props: {
        id: context.params?.id,
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
};

const Page = ({ id }) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "";
  const encodedUrl = encodeURI(`${baseUrl}/${id}`);
  const [toWhom, setToWhom] = useState("");
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
          content={`${baseUrl}/api/ogp?id=${id}`}
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
          content={`${baseUrl}/api/ogp?id=${id}`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <div className="text">
          <div className="text-content">{id|| "未入力"}</div>
        </div>
        <form>
          <label>
            誰に送りたいですか?<br/>
            メンションつけると届くかも(空欄でもツィートできます!)
          </label><br/>
          <input
            type="text"
            placeholder="@＋ユーザー名"
            onChange={(e) => setToWhom(e.target.value)}
            className="shadow appearance-none border rounded  md:w-80 py-5 px-5 my-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </form>
        <TwitterShareButton
          title={toWhom || "あの人の感じはどんな漢字"}
          hashtags={["あの人の感じはどんな漢字", "他己分析"]}
          related={["ZCunkuma"]}
          url={encodedUrl}
        >
          <div
            className="text-white font-bold rounded-full mr-5 bg-black py-1 px-2 mb-2"
          >
            \uD835\uDD4F
          </div>
        </TwitterShareButton>
        <Link href="/">
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800  font-bold py-2 px-4 rounded-full">
            作り直す
          </button>
        </Link>
      </div>
    </>
  );
};
export default Page;
