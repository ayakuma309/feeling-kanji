import React from "react";
import Head from "next/head";

export const getServerSideProps = async (context) => {
  const { title } = context.params || {};
  const { meaning, description } = context.query || {};
  if (typeof title === "string") {
    return {
      props: {
        title: title || null,
        meaning: meaning || "",
        description: description || "",
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
};

const Page = ({ title, meaning, description }) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "";
  return (
    <>
      <Head>
        <title>あの人の感じはどんな漢字</title>
        <meta charset="utf-8" />
        {title &&(
          <meta name="og:title" property="og:title" content={`${meaning}`} />
        )}
        {title &&(
          <meta name="description" content={`${description}`} />
        )}
        {title && (<meta name="og:url" property="og:url" content={`${baseUrl}/api/ogp?title=${title}`} />
        )}
        {title && (
          <meta
            property="og:image"
            key="ogImage"
            content={`${baseUrl}/api/ogp?title=${title}`}
          />
        )}
        {title && (
          <meta
            name="twitter:card"
            key="twitterCard"
            content="summary_large_image"
          />
        )}
        {title && (
          <meta name="twitter:image" key="twitterImage" content={`${baseUrl}/api/ogp?title=${title}`} />
        )}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h1>入力した文字: {title || "未入力"}</h1>
          <h1>入力した意味: {meaning || "未入力"}</h1>
          <h1>入力した説明: {description || "未入力"}</h1>
        </div>
      </div>
    </>
  );
};
export default Page;
