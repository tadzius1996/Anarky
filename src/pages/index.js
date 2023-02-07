import React, {useState} from 'react';
import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";
import { useRouter } from "next/router";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
  ShoppingBagIcon,
  BarsTwoIcon,
  ArrowRightCircleIcon
} from "@heroicons/react/outline";

export default function Home({ products }) {
  const [search, setSearch] = useState("");
  const router = useRouter();
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Anarky</title>
      </Head>

      {/* Header */}
      <Header />

      <main className="max-w-screen-2xl mx-auto ">
        
        {/* Banner */}
        <Banner />
        <div className="hidden absolute bottom-0 left-10 lg:flex items-center h-10 rounded-md bg-black hover:bg-[#1A1A1A] w-72 grow-0 cursor-pointer">
             <input
                type="search"
                name="src"
                value={search}
                onChange={(e) => {setSearch(e.target.value)}}
                className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none"
                placeholder={
                    router.route === "/"
                        ? "🔎 Search in products listed below…"
                        : ""
                }
               
            />
              <SearchIcon className="h-12 p-4 text-white" />
         </div>

        {/* ProductFeed */}
        

        <ProductFeed products={products} search={search}/>
      </main>
    </div>
  );
}
export async function getServerSideProps(context) {
  
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      products,
      
    },
  };
}