import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

const Checkout = () => {
  const [state] = useStateValue();
  const { basket } = state;

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="checkout add"
        />

        {basket?.length === 0 ? (
          <div className="checkout__title">
            <h2 >Your Shopping Basket is empty</h2>
            <p>
              You have no items in your basket. To buy one or more items click
              "Add to Basket" next to the item.
            </p>
          </div>
        ) : (
          <div className="checkout__title">
            <h2 >Your Shopping Basket</h2>

            {basket?.map((item, indx) => (
              <CheckoutProduct
                key={indx}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>


      {basket.length > 0 && (
        <div className="checkout__right">
            <Subtotal/>
        </div>
      )}
    </div>
  );
};

export default Checkout;
