import React, { Component } from 'react';

const Navbar = () => {


    return (

        <div className="container flex gap-[30px] pt-[20px] items-center justify-between">

            <div className="">
                <img className="" src="./src/assets/images/nav-logo.svg" alt="" />
            </div>

            <div className="flex mr-[220px] items-center border rounded-full px-4 py-2 shadow-sm bg-white w-full max-w-md">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-400"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                    />
                </svg>

                <input
                    type="text"
                    placeholder="Search something here"
                    className="flex-grow px-2 outline-none text-gray-700 placeholder-gray-400"
                />

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-400"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 6h-5m5 0h6m-6 6h-2m2 0h9m-9 6h-5m5 0h6"
                    />
                </svg>
            </div>

            <div className='flex gap-[20px]'>
                <img className="" src="./src/assets/images/nav-logo1.svg" alt="" />
                <img className="" src="./src/assets/images/nav-logo2.svg" alt="" />
                <img className="" src="./src/assets/images/nav-logo3.svg" alt="" />
                <img className="" src="./src/assets/images/nav-logo4.svg" alt="" />

            </div>

        </div>

    )


}

export default Navbar;