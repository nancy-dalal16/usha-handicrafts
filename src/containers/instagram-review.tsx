import React from "react";
import Carousel from "react-multi-carousel";
import InstagramCard from "components/instagram-card";
import ChevronLeft from "assets/icons/chevron-left";
import ChevronRight from "assets/icons/chevron-right";

type NavButtonProps = {
  onClick: Function;
  children: React.ReactNode | undefined;
};

const PrevButton: React.FC<NavButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      aria-label="prev-button"
      className="w-40px h-40px rounded-full	flex items-center justify-center bg-white shadow-cart text-gray-900 absolute left-0 -ml-20px focus:outline-none"
    >
      {children}
    </button>
  );
};
const NextButton: React.FC<NavButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      aria-label="next-button"
      className="w-40px h-40px rounded-full	flex items-center justify-center bg-white shadow-cart text-gray-900 absolute right-0 -mr-20px focus:outline-none"
    >
      {children}
    </button>
  );
};

type ButtonGroupProps = {
  next?: Function;
  previous?: Function;
};

const ButtonGroup: React.FC<ButtonGroupProps> = ({ next, previous }) => {
  return (
    <div className="absolute top-half w-full -mt-20px">
      <PrevButton onClick={() => previous()}>
        <ChevronLeft />
      </PrevButton>
      <NextButton onClick={() => next()}>
        <ChevronRight />
      </NextButton>
    </div>
  );
};
const reviews = [
  {
    id: 1,
    postUrl: "https://www.instagram.com/p/CRBDLtDJBgy/",
  },
  {
    id: 2,
    postUrl: "https://www.instagram.com/p/CE1ae2ohVOq/",
  },
  {
    id: 3,
    postUrl: "https://www.instagram.com/p/CE1adJcB68O/",
  },
  {
    id: 4,
    postUrl: "https://www.instagram.com/p/CE1abO4htAH/",
  },
  {
    id: 5,
    postUrl: "https://www.instagram.com/p/CE1aZFQht-k/",
  },
  {
    id: 6,
    postUrl: "https://www.instagram.com/p/CE1aXMyBajJ/",
  },
  {
    id: 7,
    postUrl: "https://www.instagram.com/p/CE1aUIpheRQ/",
  },
];

const responsive = {
  desktopExtraLarge: {
    breakpoint: { max: 3000, min: 1601 },
    items: 7,
  },
  desktopLarge: {
    breakpoint: { max: 1600, min: 1281 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1280, min: 1101 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1100, min: 861 },
    items: 3,
  },
  tabletSmall: {
    breakpoint: { max: 860, min: 465 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
export default function InstagramReview() {
  return (
    <div className="my-35px xxl:my-60px px-5 lg:px-40px">
      <div className="relative">
        <Carousel
          responsive={responsive}
          ssr={true}
          slidesToSlide={1}
          infinite={true}
          arrows={false}
          renderButtonGroupOutside={true}
          customButtonGroup={<ButtonGroup />}
          className="instagram-review-carousel mt-30px p-1 pt-0 -mx-4"
        >
          {reviews.map((item) => (
            <div className="p-2 pr-4 md:pr-2" key={item.id}>
              <InstagramCard postUrl={item.postUrl} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
