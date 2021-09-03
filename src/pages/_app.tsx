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
import { useEffect } from "react";
import "typeface-open-sans";
export default function CustomApp({ Component, pageProps }) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            console.log(
              "Service Worker registration successful with scope: ",
              registration.scope
            );
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, []);
  return (
    <>
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
