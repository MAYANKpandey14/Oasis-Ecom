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
import { AiOutlineShoppingCart,AiOutlineCheckCircle } from "react-icons/ai";
import {useState} from 'react';
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
  
  const [itemAdded,setItemAdded]=useState(false);
  
const handleBtnAddToCart =()=>{
  setItemAdded(false);
  console.log("Product Added to Cart");
  setItemAdded(true);
  setInterval(()=>{
    if(setItemAdded){
      setItemAdded(false);
    }
  },10000);
  
  
}
  
  return (
    <div className=" flex flex-col px-6 border border-gray-200 rounded-xl max-w-[400px] cursor-pointer shadow-md hover:shadow-lg ease-in-out duration-500">
      <div>
        <Image src={img} width={250} height={300} alt={title} />
      </div>
      <div className="space-y-2 py-6 ">
        <h2 className="text-accent font-bold uppercase">{title}</h2>
        <p className="text-gray-500 max-w-[150px] text-sm">{desc}</p>
        <div>{generateRating(rating)}</div>
        <div className="font-bold flex gap-2">
          Rs.{price}
          <del className="text-gray-500 font-normal">
            Rs.{parseInt(price) + 2000}.00
          </del>
        </div>
        <div className="">
         {!itemAdded?( <button  onClick={handleBtnAddToCart} className="flex gap-2 items-center justify-center font-semibold border-2 border-black bg-black text-white w-fit px-4 py-1.5 rounded-md  focus:bg-white focus:border-2 focus:border-black focus:rounded-md focus:text-black duration-500 ease-in-out">
            <AiOutlineShoppingCart size={24} />
            Add to Cart
          </button>
          ):(<button  onClick={handleBtnAddToCart} className="flex gap-2 items-center justify-center font-semibold border-2 border-black bg-black text-white w-fit px-4 py-1.5 rounded-md  focus:bg-white focus:border-2 focus:border-black focus:rounded-md focus:text-black duration-500 ease-in-out">
          <AiOutlineCheckCircle size={24} />
          Added to Cart
        </button>)}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
