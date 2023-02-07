import React, { useEffect, useState } from 'react'
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import axios from 'axios'
import Link from 'next/link';
import Products from '../pages/Products';
import {AiFillGithub, AiFillFacebook, AiFillInstagram} from 'react-icons/ai'
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
    ShoppingBagIcon,
    BarsTwoIcon,
    ArrowRightCircleIcon
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/react";
import { selectItems } from '../slices/basketSlice';

function Header() {
    const router = useRouter();
    const { data: session } = useSession();
    const items = useSelector(selectItems);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [search, setSearch] = useState("");
    
  return (
    <>
    <div className='flex justify-between h-20 items-center shadow-xl px-12 bg-white'>
        <MenuIcon className='w-10 h-auto md:hidden'onClick={() => setMobileOpen(!mobileOpen)}/>
        {mobileOpen && (
            <div className='z-20 bg-[#f2f2f1] w-2/3 h-screen fixed left-0 top-0'>
                <h1 onClick={() => router.push('/')} className=' p-7 text-2xl font-semibold tracking-widest cursor-pointer'>ANARKY</h1>

                <div className=' gap-7 items-center p-6'>
         <div
                        onClick={!session ? signIn : signOut}
                        className="link cursor-pointer">
                        <p className="hover:underline">
                            {session
                                ? `Hello, ${session.user.name}`
                                : "Sign In"}
                        </p>
                        <p className="font-extrabold md:text-sm">
                            Account & Lists
                        </p>
                    </div>
                    <div
                        className="link mt-4 flex"
                        onClick={() => router.push("/orders")}>
                        <p>Returns </p>
                        <p className="font-extrabold md:text-sm"> &Orders</p>
                    </div>

                   
         </div>

         <div className='flex gap-7 text-2xl p-5'>
           <a href='https://github.com/tadzius1996?tab=repositories'><AiFillGithub className='hover:scale-105 duration-100 ease-in-out hover:text-yellow-400'/></a>
           <a href='https://www.facebook.com/tadas.miloncius'><AiFillFacebook className='hover:scale-105 duration-100 ease-in-out hover:text-yellow-400'/></a>
           <a href=''><AiFillInstagram className='hover:scale-105 duration-100 ease-in-out hover:text-yellow-400'/></a>
         </div>

         <ShoppingBagIcon onClick={() => setMobileOpen(!mobileOpen)} className='w-10 m-4 mt-0 cursor-pointer text-right h-auto text-black'/>

            </div>
        )}
         <div className='sm:flex gap-7 text-2xl hidden'>
           <a href='https://github.com/tadzius1996?tab=repositories'><AiFillGithub className='hover:scale-105 duration-100 ease-in-out hover:text-yellow-400'/></a>
           <a href='https://www.facebook.com/tadas.miloncius'><AiFillFacebook className='hover:scale-105 duration-100 ease-in-out hover:text-yellow-400'/></a>
           <a href=''><AiFillInstagram className='hover:scale-105 duration-100 ease-in-out hover:text-yellow-400'/></a>
         </div>
         
         <h1 onClick={() => router.push('/')} className='lg:ml-44 text-2xl font-semibold tracking-widest cursor-pointer'>ANARKY</h1>

         <div className='sm:flex gap-7 items-center hidden'>
         <div
                        onClick={!session ? signIn : signOut}
                        className="link cursor-pointer">
                        <p className="hover:underline">
                            {session
                                ? `Hello, ${session.user.name}`
                                : "Sign In"}
                        </p>
                        <p className="font-extrabold md:text-sm">
                            Account & Lists
                        </p>
                    </div>
                    <div
                        className="link"
                        onClick={() => router.push("/orders")}>
                        <p>Returns</p>
                        <p className="font-extrabold md:text-sm">& Orders</p>
                    </div>

                    <div
                        className="relative link flex items-center"
                        onClick={() => router.push("/checkout")}>
                        <span
                            className={`absolute top-0 right-0 md:right-10 h-4 ${
                                items.length >= 10 ? "w-6" : "w-4"
                            } bg-yellow-400 text-center rounded-full text-black font-bold`}>
                            {items.length}
                        </span>
                        <ShoppingCartIcon className="h-10" />
                        <p className="hidden md:inline font-normal md:text-sm mt-2">
                            Basket
                        </p>
                    </div>

         </div>
         <div
                        className="relative link flex items-center sm:hidden"
                        onClick={() => router.push("/checkout")}>
                        <span
                            className={`absolute top-0 right-0 md:right-10 h-4 ${
                                items.length >= 10 ? "w-6" : "w-4"
                            } bg-yellow-400 text-center rounded-full text-black font-bold`}>
                            {items.length}
                        </span>
                        <ShoppingCartIcon className="h-10" />
                        <p className="hidden md:inline font-thin md:text-sm mt-2">
                            Basket
                        </p>
                    </div>
    </div>
    <div className='h-10 bg-[#f2f2f1]'>
        <p className='text-center pt-2'>Free worldwide shipping on orders over $95.</p>
    </div>
    

    </>
  )
}

export default Header