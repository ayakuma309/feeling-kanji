import React from "react";
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

        <TwitterShareButton
          title="あの人の感じはどんな漢字"
          hashtags={["あの人の感じはどんな漢字", "他己分析"]}
          related={["ZCunkuma"]}
          url={encodedUrl}
        >
          <p className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-3 rounded-full">
            ツイートする
          </p>
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
