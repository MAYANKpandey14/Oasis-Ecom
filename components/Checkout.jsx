"use client";

const handleAddressSubmit = async (e) => {
  console.log("Moving to Razorpay payment processing.......");
};

const Checkout = () => {
  return (
    <div className="grid place-items-center gap-4 m-4">
      <div className=" flex flex-col items-center m-4 p-10 bg-white border-t-4 border-black rounded-md shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Checkout </h1>
        <form
          onSubmit={handleAddressSubmit}
          className="flex flex-col gap-4 mx-2"
        >
          <label
            className="flex gap-1 items-center text-lg font-semibold mx-1 select-none"
            htmlFor="add1"
          >
            Address 1
          </label>
          <input
            id="add1"
            type="text"
            placeholder="House no, Street, or any Landmark"
          />
          <label
            className="flex gap-1 items-center text-lg font-semibold mx-1 select-none"
            htmlFor="add2"
          >
            Address 2
          </label>
          <input id="add2" type="text" placeholder="Locality, Society" />
          <label
            className="flex gap-1 items-center text-lg font-semibold mx-1 select-none"
            htmlFor="pin"
          >
            Pincode
          </label>
          <input
            id="pin"
            type="text"
            maxLength={6}
            inputMode="numeric"
            placeholder="123456"
          />

          <label
            className=" flex items-center gap-1 text-lg font-semibold mx-1 select-none"
            htmlFor="city"
          >
            City
          </label>
          <input id="city" type="text" placeholder="City, District or Region" />
          <button className="w-fit px-4 py-2 bg-blue-600 rounded-md mx-2 my-6 text-white shadow-md hover:shadow-lg ease-in-out duration-500">
            Proceed to payment
          </button>
          <div></div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
