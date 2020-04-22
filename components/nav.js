import React from "react";
import Link from "next/link";


export default () => (
    <header className="grid grid-cols-4 w-full px-32 py-4 border-b border-gray-500">
        <div className="icon">
            <img src="/images/logo.png" className="w-32" alt="logo"/>
        </div>
        <div className="menu col-span-2 m-auto f-m">
            <Link href="/">
                <a className="nav-item">Home</a>
            </Link>
            <Link href="/events">
                <a className="nav-item hover:border-b-2">Events</a>
            </Link>
            <Link href="/blog">
                <a className="nav-item">Blog</a>
            </Link>
            <Link href="/forum">
                <a className="nav-item">Forum</a>
            </Link>
            <Link href="/partners">
                <a className="font-bold text-gray-700 text-sm">Partners</a>
            </Link>

        </div>
        <div className="auth-buttons m-auto">
            <button className="py-3 px-4 border border-gray-700 mr-5 ">
                Sign In
            </button>
            <button className="py-3 px-4 border-gray-700 border">
                Register
            </button>
        </div>
    </header>
)
