import React, { useContext } from "react";
import ItemCard from "components/item-card";
import { DrawerContext } from "contexts/drawer/drawer.provider";
import { useCart } from "contexts/cart/cart.provider";
import { useSearch } from "contexts/search/use-search";
import { useSearchable } from "helpers/use-searchable";
import NotFound from "assets/icons/not-found";

const Products = React.forwardRef(
  ({ items }: any, ref: React.RefObject<HTMLDivElement>) => {
    const { dispatch } = useContext(DrawerContext);

    const { searchTerm } = useSearch();
    const searchableItems = useSearchable(items, searchTerm, (item) => [
      item.name,
    ]);

    const { addItem, removeItem, getItem } = useCart();

    const showDetails = (item) => {
      dispatch({
        type: "STORE_PRODUCT_DETAIL",
        payload: {
          item: item,
        },
      });

      dispatch({
        type: "SLIDE_CART",
        payload: {
          open: true,
        },
      });

      dispatch({
        type: "TOGGLE_PRODUCT_DETAIL",
        payload: {
          showDetails: true,
        },
      });
    };

    return (
      <div className="w-full mt-35px xxl:mt-60px px-4 lg:px-35px" ref={ref}>
        {searchableItems.length ? (
          <div className="grid grid-cols-1 gap-x-3 gap-y-3 mt-9 md:grid-cols-2 md:gap-x-4 md:gap-y-4 lg:grid-cols-3 xxl:grid-cols-3 xxl:gap-x-4 xxl:gap-y-4 2xxl:grid-cols-4 large:grid-cols-5">
            {searchableItems.map((item) => (
              <ItemCard
                key={item.id}
                item={item}
                onClick={() => showDetails(item)}
                value={getItem(item.id)?.quantity}
                onIncrement={() => addItem(item)}
                onDecrement={() => removeItem(item)}
              />
            ))}
          </div>
        ) : (
          <div className="pt-10px md:pt-40px lg:pt-20px pb-40px">
            <NotFound width="100%" />
            <h3 className="text-24px text-gray-900 font-bold mt-35px mb-0 text-center">
              No product found :(
            </h3>
          </div>
        )}
      </div>
    );
  }
);

export default Products;
