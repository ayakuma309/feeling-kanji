import React from "react";
import Head from "next/head";

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
        <meta
          name="twitter:image"
          key="twitterImage"
          content={`${baseUrl}/api/ogp?id=${id}`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h1>入力した文字: {id|| "未入力"}</h1>
        </div>
      </div>
    </>
  );
};
export default Page;
