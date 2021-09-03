import { useContext, useRef, useEffect } from "react";
import Link from "next/link";
import WhatsappIcon from "assets/icons/whatsapp-icon";
import CartIcon from "assets/icons/cart-icon";
import Logo from "assets/icons/logo";

import LogoPic from "assets/icons/usha-handicrafts-logo.png";
import Search from "components/search-outline";
import { DrawerContext } from "contexts/drawer/drawer.provider";
import { StickyContext } from "contexts/sticky/sticky.provider";
import { useCart } from "contexts/cart/cart.provider";
import { useMedia } from "helpers/use-media";
import { useRouter } from "next/router";

import Head from "next/head";

export default function Header() {
  const router = useRouter();
  const isLargeScreen = useMedia("(min-width: 1024px)");
  const { dispatch } = useContext(DrawerContext);
  const {
    state: { isSticky },
  } = useContext(StickyContext);
  const { itemsCount } = useCart();
  const searchRef = useRef(null);
  useEffect(() => {
    if (isLargeScreen && isSticky && searchRef.current) {
      searchRef.current.focus();
    }
  }, [isSticky, isLargeScreen]);

  const showMenu = () => {
    dispatch({
      type: "OPEN_MENU",
      payload: {
        menu: true,
      },
    });
  };

  const showCart = () => {
    dispatch({
      type: "SLIDE_CART",
      payload: {
        open: true,
      },
    });
    dispatch({
      type: "TOGGLE_CART_VIEW",
      payload: {
        showCart: true,
      },
    });
  };

  const isHome = router.pathname === "/";

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <title>USHA HANDICRAFTS</title>

        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#333333" />
      </Head>
      <header className="flex items-center shadow-mobile text-gray-700 body-font fixed bg-white w-full h-90px z-20 lg:shadow-header pr-20px md:pr-30px lg:pr-40px">
        <button
          aria-label="Menu"
          className="menuBtn flex flex-col items-center justify-center w-50px flex-shrink-0 h-full outline-none focus:outline-none lg:w-90px"
          onClick={showMenu}
        >
          <span className="menuIcon">
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </span>
        </button>

        <Link href="/">
          <a className="hidden mx-auto lg:mr-10 lg:flex">
            {/* <span className="sr-only">USHA HANDICRAFTS</span>
          <span>
            <h1 className="rainbow">USHA HANDICRAFTS </h1>
          </span> */}
            <img src={LogoPic} alt="hero-image" width="300px" />
            {/* <Logo width="110px" id="medsy-header-logo" /> */}
          </a>
        </Link>

        <div
          className={`w-full ml-10px mr-20px lg:mr-10 lg:ml-auto transition duration-350 ease-in-out flex justify-center ${
            isSticky ? "lg:opacity-100 lg:visible" : "lg:opacity-0 lg:invisible"
          }`}
        >
          {isHome && <Search ref={searchRef} className="search-outline" />}
        </div>

        <div className="hidden items-center text-gray-900 mr-10 flex-shrink-0 lg:flex">
          <WhatsappIcon />
          {/* <Link href="https://api.whatsapp.com/send?phone=+911234567890&text=Hello"> */}
          <Link
            href=" https://api.whatsapp.com/send?text=Hey, Please open this website to buy this material at this price. www.xyz.com"
            data-original-title="whatsapp"
            data-placement="left"
          >
            <a>
              <span className="font-semibold text-base text-14px ml-3">
                +91 12345 67890
              </span>
            </a>
          </Link>
        </div>

        <button
          className="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none"
          onClick={showCart}
          aria-label="cart-button"
        >
          <CartIcon width="20px" height="22px" />
          <span
            className="w-18px h-18px flex items-center justify-center bg-gray-900 text-white absolute rounded-full"
            style={{ fontSize: "10px", top: "-10px", right: "-10px" }}
          >
            {itemsCount}
          </span>
        </button>
      </header>
      );
    </>
  );
}
