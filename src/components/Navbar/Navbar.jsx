import React, { useState } from 'react';

import { MdDarkMode } from 'react-icons/md';
import { MdLightMode } from 'react-icons/md';
import DarkMode from './DarkMode';

const Navbar = () => {
    const [navIcon, setNavIcon] = useState(false);

    return (
        <>
            <header className="dark:bg-gray-800 dark:text-white">
                <nav class="shadow">
                    <div class="flex justify-between items-center py-6 px-10 container mx-auto">
                        <div>
                            <h1 class="text-3xl text-black dark:text-[#D9FFFF] font-bold bg-gradient-to-tr from-indigo-600 to-green-600 bg-clip-text hover:cursor-pointer">
                                Car Rental
                            </h1>
                        </div>

                        <div>
                            <div class="hover:cursor-pointer sm:hidden flex gap-2">
                                <div>
                                    <DarkMode />
                                </div>

                                <button onClick={() => setNavIcon(!navIcon)}>
                                    <span class="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></span>
                                    <span class="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></span>
                                    <span class="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></span>
                                </button>
                            </div>
                            <div class="flex items-center">
                                <ul class="sm:flex space-x-4 hidden items-center uppercase">
                                    <li>
                                        <a
                                            href="#"
                                            class="text-gray-700 hover:text-indigo-600 text-md dark:text-white dark:hover:text-yellow-200 font-bold"
                                        >
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            class="text-gray-700 hover:text-indigo-600 text-md dark:text-white dark:hover:text-yellow-200 font-bold"
                                        >
                                            Car
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            class="text-gray-700 hover:text-indigo-600 text-md dark:text-white dark:hover:text-yellow-200 font-bold"
                                        >
                                            About
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="#"
                                            class="text-gray-700 hover:text-indigo-600 text-md dark:text-white dark:hover:text-yellow-200 font-bold"
                                        >
                                            Booking
                                        </a>
                                    </li>
                                    <li>
                                        <DarkMode />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            {/* navIcon controller for small devices........  */}

            {navIcon && (
                <div
                    data-aos="fade-down"
                    data-aos-duration="300"
                    class="flex items-center  justify-center w-full sm:hidden"
                >
                    <ul class=" flex flex-col justify-center  gap-y-[1px]  w-full items-center uppercase">
                        <li className="w-full">
                            <a
                                href="#"
                                class="text-gray-700 block w-full text-center bg-gray-200 hover:bg-gray-300  hover:text-white text-md dark:text-white dark:bg-gray-600 dark:hover:bg-gray-400 dark:hover:text-yellow-200 font-bold py-2"
                            >
                                Home
                            </a>
                        </li>
                        <li className="w-full">
                            <a
                                href="#"
                                class="text-gray-700 block w-full text-center bg-gray-200 hover:bg-gray-300  hover:text-white text-md dark:text-white dark:bg-gray-600 dark:hover:bg-gray-400 dark:hover:text-yellow-200 font-bold py-2"
                            >
                                Car
                            </a>
                        </li>
                        <li className="w-full">
                            <a
                                href="#"
                                class="text-gray-700 block w-full text-center bg-gray-200 hover:bg-gray-300  hover:text-white text-md dark:text-white dark:bg-gray-600 dark:hover:bg-gray-400 dark:hover:text-yellow-200 font-bold py-2"
                            >
                                About
                            </a>
                        </li>

                        <li className="w-full">
                            <a
                                href="#"
                                class="text-gray-700 block w-full text-center bg-gray-200 hover:bg-gray-300  hover:text-white text-md dark:text-white dark:bg-gray-600 dark:hover:bg-gray-400 dark:hover:text-yellow-200 font-bold py-2"
                            >
                                Booking
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
};

export default Navbar;
