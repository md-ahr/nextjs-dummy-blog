import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Layout from "../../components/Layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
        <Script strategy="lazyOnload">{console.log("my script")}</Script>
      </Head>
      <h1>First Post</h1>
    </Layout>
  );
}
