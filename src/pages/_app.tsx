import React from "react";
// import 'react-spring-modal/dist/index.css';
import "rc-collapse/assets/index.css";
import "overlayscrollbars/css/OverlayScrollbars.css";
import "react-multi-carousel/lib/styles.css";
import Head from "next/head";
import "assets/styles/index.css";
import { CartProvider } from "contexts/cart/cart.provider";
// import { ModalProvider } from 'contexts/modal/modal.provider';
import { DrawerProvider } from "contexts/drawer/drawer.provider";
import { StickyProvider } from "contexts/sticky/sticky.provider";
import { SearchProvider } from "contexts/search/use-search";
import "typeface-open-sans";
export default function CustomApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>USHA HANDICRAFTS</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <SearchProvider>
        <StickyProvider>
          <DrawerProvider>
            <CartProvider>
              {/* <ModalProvider> */}
              <Component {...pageProps} />
              {/* </ModalProvider> */}
            </CartProvider>
          </DrawerProvider>
        </StickyProvider>
      </SearchProvider>
    </>
  );
}
