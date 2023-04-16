import React from "react";
import Head from "next/head";

export const getServerSideProps = async (context) => {
  const { id } = context.params || {};
  const { meaning, description } = context.query || {};
  if (typeof id === "string") {
    return {
      props: {
        id: id || null,
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

const Page = ({ id, meaning, description }) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "";
  return (
    <>
      <Head>
        {id && (
          <meta
            property="og:image"
            key="ogImage"
            content={`${baseUrl}/api/ogp?id=${id}&meaning=${meaning}&description=${description}`}
          />
        )}
        {id && (
          <meta
            name="twitter:card"
            key="twitterCard"
            content="summary_large_image"
          />
        )}
        {id && (
          <meta
            name="twitter:image"
            key="twitterImage"
            content={`${baseUrl}/api/ogp?id=${id}&meaning=${meaning}&description=${description}`}
          />
        )}
      </Head>
      <div>
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h1>入力した文字: {id || "未入力"}</h1>
          <h1>入力した意味: {meaning || "未入力"}</h1>
          <h1>入力した説明: {description || "未入力"}</h1>
        </div>
      </div>
    </>
  );
};
export default Page;
