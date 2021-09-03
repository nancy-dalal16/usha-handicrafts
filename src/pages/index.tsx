import { useEffect } from "react";
import Head from "next/head";
import Layout from "containers/layout/layout";
import HeroBlock from "containers/hero-block";
import HowItWorks from "containers/how-it-works";
import Products from "containers/products";
import InstagramReview from "containers/instagram-review";
import { useRefScroll } from "helpers/use-ref-scroll";
import { useSearch } from "contexts/search/use-search";
import { getProducts } from "helpers/get-products";

export default function Home({ products }) {
  const { elRef, scroll } = useRefScroll({
    percentOfElement: 0,
    percentOfContainer: 0,
    offsetPX: -100,
  });
  const { searchTerm } = useSearch();
  useEffect(() => {
    if (searchTerm) {
      scroll();
    }
  }, [searchTerm]);
  return (
    <Layout>
      <Head>
        <title>USHA HANDICRAFTS</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>

      <HeroBlock />
      <HowItWorks />
      <Products items={products} ref={elRef} />
      {/* <InstagramReview /> */}
    </Layout>
  );
}

export async function getServerSideProps() {
  const products = await getProducts();
  return {
    props: {
      products,
    },
  };
}
