// .tsx version provided by Lipakshi Rana

// import Image from "next/image";
// import React from "react";

//  import { AiFillStar, AiOutlineStar } from "react-icons/ai";
// //  npm install react-icons --save

// interface propsType {
//   img: string;
//   title: string;
//   desc: string;
//   rating: number;
//   price: string;
// }

// const ProductCard: React.FC<propsType> = ({
//   img,
//   title,
//   desc,
//   rating,
//   price,
// }) => {
//   const generateRating = (rating: number) => {
//     switch (rating) {
//       case 1:
//         return (
//           <div className="flex gap-1 text-[20px] text-[#FF9529]">

//             <AiFillStar />
//             <AiFillStar />
//             <AiFillStar />
//             <AiFillStar />
//             <AiFillStar />

//           </div>
//         );
//       case 2:
//         return (
//           <div className="flex gap-1 text-[20px] text-[#FF9529]">
//             <AiFillStar />
//             <AiOutlineStar />
//             <AiOutlineStar />
//             <AiOutlineStar />
//             <AiOutlineStar />
//           </div>
//         );
//       case 3:
//         return (
//           <div className="flex gap-1 text-[20px] text-[#FF9529]">

//             <AiFillStar />
//             <AiFillStar />
//             <AiOutlineStar />
//             <AiOutlineStar />
//             <AiOutlineStar />
//           </div>
//         );
//       case 4:
//         return (
//           <div className="flex gap-1 text-[20px] text-[#FF9529]">

//             <AiFillStar />
//             <AiFillStar />
//             <AiFillStar />
//             <AiOutlineStar />
//             <AiOutlineStar />
//           </div>
//         );
//       case 5:
//         return (
//           <div className="flex gap-1 text-[20px] text-[#FF9529]">

//             <AiFillStar />
//             <AiFillStar />
//             <AiFillStar />
//             <AiFillStar />
//             <AiOutlineStar />
//           </div>
//         );

//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="px-4 border border-gray-200 rounded-xl max-w-[400px]">
//       <div>
//         <Image
//           className="w-full h-auto"
//           src={img}
//           width={200}
//           height={300}
//           alt={title}
//         />
//       </div>

//       <div className="space-y-2 py-2">
//         <h2 className="text-accent font-medium uppercase">{title}</h2>
//         <p className="text-gray-500 max-w-[150px]">{desc}</p>
//         <div>{generateRating(rating)}</div>

//         {/* for price thing  */}

//         <div className="font-bold flex gap-4">
//           Rs.{price}
//           <del className="text-gray-500 font-normal">
//             Rs.{parseInt(price) + 20}.00
//           </del>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;








// jsx version 1, by Mayank Pandey

'use client'

import React, { useContext, useState } from "react";
import Image from "next/image";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Notification from "./Commoncart/Notification";
import { cartContext } from "@/lib/cartContext";

function generateRating(rating) {
  switch (rating) {
    case 1:
      return (
        <div className="flex gap-1 text-[20px] text-[#FF9529]">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
      );
    case 2:
      return (
        <div className="flex gap-1 text-[20px] text-[#FF9529]">
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>
      );
    case 3:
      return (
        <div className="flex gap-1 text-[20px] text-[#FF9529]">
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>
      );
    case 4:
      return (
        <div className="flex gap-1 text-[20px] text-[#FF9529]">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>
      );
    case 5:
      return (
        <div className="flex gap-1 text-[20px] text-[#FF9529]">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
        </div>
      );
    default:
      return null;
  }
}

// async function handleAddToCart(getCartItem){
//   const res = await addToCart({productID : getCartItem._id,userID:userAgent._id})
//   console.log(res);
// }


function ProductCard({ id, img, title, desc, rating, price, setNotification }) {
  const [cartData, updateCart] = useContext(cartContext);
  const [loading, setLoading] = useState(false);

  const handleAddToCart = async () => {
    setLoading(true);  
    // Simulating an asynchronous action (e.g., API call)
    // Replace this with your actual addToCart logic
    setTimeout(() => {
      setLoading(false);
      let have = false;
      cartData.map(item => {
        if (item.id === id){
          item.quantity += 1;
          have = true;
        }
      })
      if (!have)
      {
        let product = {
          id: id,
          productID: {
            imageUrl: img,
            name: title,
            price: price
          },
          quantity: 1
        };
        updateCart((prev) => [...prev, product]);
      } else
        updateCart([...cartData]);
      setNotification(true); // Display the notification after successful addition
    }, 1500); // Simulating a delay of 1.5 seconds
  };
return (
  <>
    <div className="px-4 border border-gray-200 rounded-xl max-w-[400px] cursor-pointer shadow-md hover:shadow-lg 
    ease-in-out duration-500">
       <div>
        <Image src={img} width={250} height={300} alt={title} />
      </div>
      <div className="space-y-2 py-2">
        <h2 className="text-accent font-medium uppercase">{title}</h2>
        <p className="text-gray-500 max-w-[150px]">{desc}</p>
        <div>{generateRating(rating)}</div>
        <div className="font-bold flex gap-4">
          Rs.{price}
          <del className="text-gray-500 font-normal">
            Rs.{parseInt(price) + 2000}.00
          </del>
        </div>
        </div>

        <div>
        <button
          className="mt-1.5 flex w-full justify-center bg-black px-5 py-3 text-xs font-medium uppercase 
          tracking-wide text-white relative"
          onClick={handleAddToCart}
          disabled={loading} // Disable the button when loading
        >
          {loading && ( // Show loader when loading is true
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-black rounded-full animate-ping" />
            </div>
          )}
          {loading ? 'Adding ....' : 'Add To Cart'}
        </button>
      </div>
    </div></>
  );
  }
export default ProductCard;
