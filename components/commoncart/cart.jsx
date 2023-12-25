"use client";

import { useRouter } from "next/navigation";
//  useRouter is imported from "next/navigation", which allows access to the Next.js 
//  router functionality.
import { useContext, useEffect, useState } from "react";
import { cartContext } from "@/lib/cartContext";
// useEffect and useState are imported from "react", used for managing state and side effects within a React functional component.
//import ComponentLevelLoader from "../Loader/componentlevel";

export default function CommonCart({
  handleDeleteCartItem,
  updated
  // componentLevelLoader,
}) {

  // cartItems state is managed using the useState hook, initialized as an empty array.
  const [cartItems, setCartItems] = useContext(cartContext)
  // const itemData = {};
  // cartItems.forEach(element => {
  //   const [quantity, setQuantity] = useState(element.quantity)
  //   itemData[element.id] = {
  //     quantity: quantity,
  //     setQuantity: setQuantity 
  //   }
  // });
  const router = useRouter()

  // Side Effect on Component Mount and Update

  // The useEffect hook is used to manage the side effect of updating the cartItems state. 
  // It triggers on initial mount and whenever the updated dependency changes. It retrieves
  //  data from the local storage ('cartItems'), parses it as JSON, and updates the cartItems
  //   state.

  return (
    <section className="h-screen bg-gray-100 overflow-scroll">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mt-8 max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow">
            <div className="px-4 py-6 sm:px-8 sm:py-10">
              <div className="flow-root">
                {cartItems && cartItems.length ? (
                  <ul className="-my-8">
                    {cartItems.map((cartItem) => {
                      return(
                      <li
                        className="flex-col flex space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0"
                        key={cartItem.id}
                      >
                        <div className="shrink-0">
                          <img
                            src={
                              cartItem &&
                              cartItem.productID &&
                              cartItem.productID.imageUrl
                            }
                            alt="Product image"
                            className="h-24 w-25 max-w-full rounded-lg object-cover"
                          />
                        </div>
                        <div className="flex flex-1 flex-col justify-between">
                          <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                            <div className="pr-8 sm:pr-4">
                              <p className="text-base font-semibold text-gray-900">
                                {cartItem &&
                                  cartItem.productID &&
                                  cartItem.productID.name}
                              </p>
                              <input type="number" name="quantity" min="1" id="itemquantity" className="text-base w-24 p-0 min-h-0.5 text-gray-900"
                              value={cartItem.quantity}
                              onChange={(e) => {
                                if (cartItem.quantity > 0) {
                                  cartItem.quantity = e.target.valueAsNumber;
                                  setCartItems([...cartItems]);
                                }
                              }}/>
                            </div>
                            <div className="mt-4 flex gap-3 items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                              <p className="shrink-0 w-20 text-base font-semibold text-gray-950 sm:order-1 sm:ml-8 sm:text-right">
                                $
                                {cartItem &&
                                  cartItem.productID &&
                                  cartItem.quantity * cartItem.productID.price}
                              </p>
                              <button
                                type="button"
                                className="font-medium text-yellow-700 sm:order-2"
                                onClick={() =>
                                  handleDeleteCartItem(cartItem.id)
                                }
                              >
                                "Remove"
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>)
})}
                  </ul>
                ) : (
                  <h1 className="font-bold text-lg">Your cart is Empty !</h1>
                )}
              </div>
              <div className="mt-6 border-t border-b py-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-400">Subtotal</p>
                  <p className="text-lg text-black font-semibold">
                    $
                    {cartItems && cartItems.length
                      ? cartItems.reduce(
                        (total, item) => item.quantity * item.productID.price + total,
                        0
                      )
                      : "0"}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-400">Shipping</p>
                  <p className="text-lg text-black font-semibold">$0</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-400">Total</p>
                  <p className="text-lg text-black font-semibold">
                    $
                    {cartItems && cartItems.length
                      ? cartItems.reduce(
                        (total, item) => item.quantity * item.productID.price + total,
                        0
                      )
                      : "0"}
                  </p>
                </div>
                <div className="mt-5 text-center">
                  <button
                    onClick={() => router.push('/checkout')}
                    disabled={cartItems && cartItems.length === 0}
                    className="disabled:opacity-50 group inline-flex w-full items-center justify-center bg-black px-6 py-4 text-lg text-white font-medium uppercase tracking-wide"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
// JSX Structure

// The component returns a structure representing the shopping cart view:

//     It starts with a section having a gray background.
//     Nested within are several nested div elements creating a layout for the cart view.
//     The main part of the cart view comprises a white box containing a list of items in 
// the shopping cart.

// Within the list of cart items:

//     Each item in the cart is displayed with an image, product name, price, and a 
// "Remove" button.
//     If the cart is empty, it shows a message "Your cart is Empty!".
//     The total price is calculated by iterating over cartItems, summing up the prices
//  of the products and displaying the subtotal, shipping cost, and total.

// The checkout button at the bottom is conditionally disabled if the cart is empty and, 
// when clicked, navigates to the '/checkout' route using the Next.js router
//  (router.push('/checkout')).