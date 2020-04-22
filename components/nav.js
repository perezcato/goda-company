import React from "react";
import Link from "next/link";


export default () => (
    <header className="grid grid-cols-4 w-full px-32 py-4 border-b border-gray-600">
        <div className="icon">
            <img src="/images/logo.png" className="w-32" alt="logo"/>
        </div>
        <div className="menu col-span-2 m-auto f-m">
            <Link href="/">
                <a className="nav-item active:font-bold hover:font-bold hover:text-gray-800 transition-all duration-500 ease-in-out">Home</a>
            </Link>
            <Link href="/events">
                <a className="nav-item hover:font-bold hover:text-gray-800 transition-all duration-500 ease-in-out">Events</a>
            </Link>
            <Link href="/blog">
                <a className="nav-item hover:font-bold hover:text-gray-800 transition-all duration-500 ease-in-out">Blog</a>
            </Link>
            <Link href="/forum">
                <a className="nav-item hover:font-bold hover:text-gray-800 transition-all duration-500 ease-in-out">Forum</a>
            </Link>
            <Link href="/partners">
                <a className="nav-item hover:font-bold hover:text-gray-800 transition-all duration-500 ease-in-out">Partners</a>
            </Link>

        </div>
        <div className="auth-buttons m-auto">
            <button className="py-3 px-4 border border-gray-700 mr-5 rounded-lg ">
                Sign In
            </button>
            <button className="py-3 px-4 border-gray-700 border rounded-lg">
                Register
            </button>
        </div>
    </header>
)
