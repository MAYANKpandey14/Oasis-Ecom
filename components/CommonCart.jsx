"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CommonCart({
  cartItems = [],
  handleDeleteCartItem,
  // componentLevelLoader,
}) {
  const router = useRouter();

  return (
    <section className="w-full h-ful">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto  max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white">
            <div className="px-4 py-8 sm:px-8 sm:py-1 border-t-4 border-black rounded-md shadow-lg">
              <div className="flow-root">
                {cartItems && cartItems.length ? (
                  <ul className="-my-8">
                    {cartItems.map((cartItem) => (
                      <li
                        className="flex-col flex space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0"
                        key={cartItem.id}
                      >
                        <div className="shrink-0">
                          <Image
                            src={
                              cartItem &&
                              cartItem.productID &&
                              cartItem.productID.imageUrl
                            }
                            width={480}
                            heigth={270}
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
                            </div>
                            <div className="mt-4 flex gap-3 items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                              <p className="shrink-0 w-20 text-base font-semibold text-gray-950 sm:order-1 sm:ml-8 sm:text-right">
                                $
                                {cartItem &&
                                  cartItem.productID &&
                                  cartItem.productID.price}
                              </p>
                              <button
                                type="button"
                                className="font-medium text-yellow-700 sm:order-2"
                                onClick={() =>
                                  handleDeleteCartItem(cartItem._id)
                                }
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <h1 className="font-bold text-2xl m-4">Your cart is Empty !</h1>
                )}
              </div>
              <div className="mt-6 border-t border-b py-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-400">Subtotal</p>
                  <p className="text-lg text-black font-semibold">
                    $
                    {cartItems && cartItems.length
                      ? cartItems.reduce(
                          (total, item) => item.productID.price + total,
                          0
                        )
                      : "0"}
                  </p>
                </div>
                <div className="flex items-center justify-between text-lg">
                  <p className="text-sm text-gray-400">Shipping</p>
                  <p className="text-lg text-black font-semibold">$0</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-400">Total</p>
                  <p className="text-lg text-black font-semibold">
                    $
                    {cartItems && cartItems.length
                      ? cartItems.reduce(
                          (total, item) => item.productID.price + total,
                          0
                        )
                      : "0"}
                  </p>
                </div>
                <div className="mt-5 text-center mb-4">
                  <button
                    onClick={() => router.push("/checkout")}
                    // disabled={cartItems && cartItems.length === 0}
                    className="disabled:opacity-50 group inline-flex w-full rounded-md items-center justify-center bg-black px-4 py-2 text-lg text-white font-medium shadow-md hover:shadow-lg ease-in-out duration-500"
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
