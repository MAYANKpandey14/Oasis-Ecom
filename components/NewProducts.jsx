'use client'

import React, { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Notification from "./Commoncart/Notification";
import { cartContext } from "@/lib/cartContext";



const productsData = [
  {
    img: "/jacket-1.jpg",
    title: "Jacket",
    desc: "MEN Yarn Fleece Jacket",
    rating: 4,
    price: 3000.00,
  },
  {
    img: "/skirt-1.jpg",
    title: "Skirt",
    desc: "Black Floral Wrap Midi Skirt",
    rating: 5,
    price: 2000.00,
  },
  {
    img: "/party-wear-1.jpg",
    title: "Party Wear",
    desc: "Women's Party Wear Shoes",
    rating: 3,
    price: 980.00,
  },
  {
    img: "/shirt-1.jpg",
    title: "Shirt",
    desc: "Pure Garment Dyed Cotton Shirt",
    rating: 4,
    price: 1999.00,
  },
  {
    img: "/sports-1.jpg",
    title: "Sports",
    desc: "Trekking & Running Shoes - Black",
    rating: 3,
    price: 5888.00,
  },
  {
    img: "/watch-1.jpg",
    title: "Watches",
    desc: "Smart Watches Vital Plus",
    rating: 4,
    price: 4666.00,
  },
  {
    img: "/watch-2.jpg",
    title: "Watches",
    desc: "Pocket Watch Leather Pouch",
    rating: 4,
    price: 8755.00,
  },
];

export default function NewProducts(){
  const [cartValue, setCartValue] = useContext(cartContext);
  const [showNotification, setNotification] = useState(false);

  useEffect(() => {
    if (cartValue.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartValue));
    }
    setTimeout(() => {
      setNotification(() => false); // Hide the notification after a delay
    }, 2000); // Display the notification for 2 seconds     
    console.log(cartValue)
  }, [cartValue, showNotification])
  return (
    <>
    <div className="container">
      <div className="mb-10">
        <h2 className="font-bold text-4xl text-center">Feature Products</h2>
      </div>
      <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10 mb-16 mx-10">
        {productsData.map((item,index) => (
          <ProductCard
            id={index}
            img={item.img}
            title={item.title}
            desc={item.desc}
            rating={item.rating}
            price={item.price}
            setNotification={setNotification}
            />
            ))}
      </div>
    </div>
      {
        showNotification && (<Notification message="Item added to cart"/>)
      }
      </>
  )
};
