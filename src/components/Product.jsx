import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import { useState } from "react";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
import Link from 'next/link';

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {
  const dispatch = useDispatch();

  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING - 1)) + MIN_RATING
  );
  const [hasPrime] = useState(Math.random() < 0.5);

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
      hasPrime,
    };
    // Sending the product as an action to the REDUX store... the basket slice
    dispatch(addToBasket(product));
  };

  return (
    <>
    <div className=" text-center relative flex flex-col m-5 bg-white z-30 p-10 hover:scale-105 duration-75 ease-in-out">
    <Link href={`/product/${id}`}>
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>

      <Image
        src={image}
        height={200}
        width={200}
        objectFit="contain"
        alt={title}
        className='mx-auto'
      />

      <h1 className="my-3"> {title} </h1>

     

      <p className="text-xs my-2 line-clamp-2">{description}</p>

      <div className="mb-5">
        <Currency quantity={price} currency="GBP" />
      </div>
      </Link>
      <button onClick={addItemToBasket} className="mt-auto button bg-[#f2f2f1] p-4">
        Add to Basket
      </button>
    </div>
    </>
  );
}

export default Product;