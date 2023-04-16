import React from "react";
import Head from "next/head";

export const getServerSideProps = async (
  context
) => {
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
      </Head>
      <div>
        <h1>入力した文字: {id}</h1>
      </div>
    </>
  );
};
export default Page;
