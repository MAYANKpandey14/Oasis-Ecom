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

"use client";

import React from "react";
import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";


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

function ProductCard({ img, title, desc, rating, price }) {
  return (
    <div className="px-4 border border-gray-200 rounded-xl max-w-[400px] cursor-pointer shadow-md hover:shadow-lg ease-in-out duration-500">
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
        <div className="">
          <button className="flex gap-2 items-center justify-center font-semibold bg-black text-white w-fit px-4 py-1.5 rounded-md">
            <AiOutlineShoppingCart size={24} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
