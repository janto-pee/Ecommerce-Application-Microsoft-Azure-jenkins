import Head from "next/head";
import Header from "../components/Header/Header";
import Cards from "../components/Cards/Cards";
import Newsletter from "../components/Newsletter/Newsletter";
import { fetchApi, isFeatured } from "../utils/fetch";

export default function Home({ events }) {
  return (
    <div className="bg-cyan-50 min-h-screen">
      <Head>
        <title>Events Home</title>
      </Head>
      <Header />
      <Cards events={events}>
        <Newsletter />
      </Cards>
    </div>
  );
}

export async function getStaticProps() {
  const data = await isFeatured();

  if (!data)
    return {
      props: {
        hasError: true,
      },
    };

  return {
    props: {
      events: data,
    },
  };
}
