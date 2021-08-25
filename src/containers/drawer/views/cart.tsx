import { useContext } from "react";
import { Scrollbar } from "components/scrollbar";
import { useCart } from "contexts/cart/cart.provider";
import { DrawerContext } from "contexts/drawer/drawer.provider";
import CartItem from "components/cart-item";
import Button from "components/button";
import NoItem from "./no-item";
import ArrowLeft from "assets/icons/arrow-left";
import { CURRENCY } from "helpers/constants";
import CurrencyFormat from "react-currency-format";
import Head from "next/head";
// import Razorpay from "@tiltbike/razorpay-checkout-js";

export default function Cart() {
  const { dispatch } = useContext(DrawerContext);

  const { items, calculatePrice } = useCart();

  const showCheckout = () => {
    dispatch({
      type: "TOGGLE_CHECKOUT_VIEW",
      payload: {
        showCheckout: true,
      },
    });
  };

  const hideCart = () => {
    dispatch({
      type: "SLIDE_CART",
      payload: {
        open: false,
      },
    });
  };

  // const order = () => {
  //   const rzp_options = {
  //     key: "rzp_test_s19lQbXBEki9AS",
  //     amount: calculatePrice() * 100,
  //     name: "Usha Handicrafts",
  //     description: "",
  //     handler: function (response) {
  //       alert(`Payment Succesful ${response.razorpay_payment_id}`);
  //     },
  //     modal: {
  //       ondismiss: function () {
  //         alert(`Payment Failed`);
  //       },
  //     },
  //     prefill: {
  //       email: "test@email.com",
  //       contact: +914455667788,
  //     },

  //     theme: {
  //       color: "#000",
  //     },
  //   };
  //   let rzp = new Razorpay(rzp_options);
  //   rzp.open();
  // };

  // const order = async () => {
  //   const options = {
  //     key: "rzp_test_iZy9pDaZeEAkky", // Enter the Key ID generated from the Dashboard
  //     amount: calculatePrice() * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
  //     currency: "INR",
  //     name: "USHA HANDICRAFTS",

  //     image: "https://example.com/your_logo",

  //     prefill: {
  //       name: "",
  //       email: "",
  //       contact: "",
  //     },
  //     notes: {
  //       address: "Razorpay Corporate Office",
  //     },
  //     theme: {
  //       color: "#000",
  //     },
  //   };

  //   var _window = window as any;
  //   var rzp1 = new _window.Razorpay(options);
  //   rzp1.open();

  //   rzp1.on("payment.failed", function (response) {
  //     alert(response.error.code);
  //     alert(response.error.description);
  //     alert(response.error.source);
  //     alert(response.error.step);
  //     alert(response.error.reason);
  //     alert(response.error.metadata.order_id);
  //     alert(response.error.metadata.payment_id);
  //   });
  // };

  return (
    <>
      <Head>
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      </Head>
      <div className="flex flex-col w-full h-full">
        {items.length ? (
          <>
            <div className="w-full flex justify-center flex-shrink-0 relative px-30px py-20px border-b border-gray-200">
              <button
                className="w-auto h-10 flex items-center justify-center text-gray-500 absolute top-half -mt-20px left-30px transition duration-300 focus:outline-none hover:text-gray-900"
                onClick={hideCart}
                aria-label="close"
              >
                <ArrowLeft />
              </button>

              <h2 className="font-bold text-24px m-0">Your Basket</h2>
            </div>

            <Scrollbar className="cart-scrollbar flex-grow">
              {items.map((item) => (
                <CartItem item={item} key={item.id} />
              ))}
            </Scrollbar>
          </>
        ) : (
          <NoItem />
        )}

        <div className="flex flex-col flex-shrink-0 p-30px">
          <div className="flex items-center justify-between mb-20px">
            <span className="font-semibold text-gray-900">
              Subtotal &nbsp;
              <span className="font-normal text-gray-700 text-13px">
                (Incl. VAT)
              </span>
            </span>

            <span className="font-semibold text-18px text-gray-900">
              {/* {CURRENCY}
            {calculatePrice()} */}
              <CurrencyFormat
                value={calculatePrice()}
                displayType={"text"}
                thousandSeparator={true}
                prefix={CURRENCY}
              />
            </span>
          </div>

          {/* <Button
          className="big flex-shrink-0"
          disabled={!items.length ? true : false}
          onClick={showCheckout}
        >
          Confirm
        </Button> */}
          <Button
            className="big flex-shrink-0"
            disabled={!items.length ? true : false}
            onClick={showCheckout}
          >
            Confirm
          </Button>
          {/* <button id="paymentclick" onClick={order}>
          pay amount
        </button> */}
        </div>
      </div>
    </>
  );
}
