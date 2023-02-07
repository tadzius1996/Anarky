import React from 'react'
import Header from '../../components/Header'
import Link from 'next/link'
import { useDispatch } from "react-redux";
import { addToBasket } from "../../slices/basketSlice";

function Product({product}) {
  const { title, description, image, price, rating, id } = product;
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
     
      image,
    }
    // Sending the product as an action to the REDUX store... the basket slice
    dispatch(addToBasket(product));
  };
  return (
    <>
    <Header/>
    <div className="flex h-[75vh] mt-44 md:mt-5 md:h-[90vh] flex-col justify-center gap-14 md:flex-row items-center max-w-screen-xl mx-auto my-20 p-6 mb-10 bg-white lg:shadow-lg rounded-lg">
      <img className="md:w-1/3 h-auto w-full object-cover rounded-lg md:mr-6" src={image} alt={title} />
      <div className="md:w-2/4 text-center md:text-left">
        <h2 className="text-xl font-medium mt-4">{title}</h2>
        <p className="text-gray-700 mt-2">{description}</p>
        <div className="flex items-center mt-4">
          <span className="text-2xl font-medium mr-2">${price}</span>
          <span className="text-gray-500">
            {rating.rate} ({rating.count})
          </span>
        </div>
        <button onClick={addItemToBasket} className="mb-8 bg-black text-white mt-6 py-2 px-4 rounded-full hover:bg-[#f2f2f1]">
          Add to Cart
        </button>
      </div>
    </div>
    </>
  );
}

export default Product

export async function getServerSideProps({params}) {
  console.log(params)
    const product = await fetch(`https://fakestoreapi.com/products/${params.id}`).then(
      (res) => res.json()
    );
  
    return {
      props: {
        product,
        
      },
    };
  }