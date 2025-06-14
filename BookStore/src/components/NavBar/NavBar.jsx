import React from 'react'
import Logo from '../../assets/website/logo.png'
import { FaCaretDown } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const Menu = [
    {
        id: 1,
        name: "Home",
        link: "#"
    },
    {
        id: 2,
        name: "About",
        link: "#"
    },
    {
        id: 3,
        name: "Services",
        link: "#"
    }
];

const Dropdownlinks = [
    {
        name: "Trending Books",
        link: "#"
    },
    {
        name: "Best Sellers",
        link: "#"
    },
    {
        name: "New Releases",
        link: "#"
    },
    {
        name: "Genres",
        link: "#"
    },
    {
        name: "Authors",
        link: "#"
    },
    {
        name: "Book Clubs",
        link: "#"
    },

];

const NavBar = ({ handleOrderPopup }) => {
  return (
    <>
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
        <div className="container py-3 sm:py-0">
            <div className="flex justify-between items-center  ">
                <div>
                    <a href="#" className='font-bold text-2xl sm:text-3xl flex gap-2 ml-4 items-center'>
                        {/* <img src={Logo} alt="" className='w-10'/> */}
                        <img src={Logo} alt="" className='w-10'/>Books
                    </a>
                    
                </div>
                <div className='flex justify-between items-center gap-4'>
                    <ul className='hidden sm:flex item-center gap-4 '>
                      {Menu.map((menu) => (
                        <li key={menu.id}>
                            <a href={menu.link} className='inline-block py-6 px-4 hover:text-primary duration-200'>{menu.name}</a>
                        </li>
                      ))}
                      {/* Simple Dropdown and Links */}
                        <li className="group relative cursor-pointer">
                            <a href="/#home" className='flex h-[72px] items-center gap-[2px]'>
                            Quick Links{" "}
                            <span>
                                <FaCaretDown className= "transition-all duration-200 group-hover:rotate-180"/>
                            </span>
                            </a>
                            <div className='absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block' >
                                <ul className='space-y-3'>
                                    {Dropdownlinks.map((data) => (
                                        <li key={data.name}>
                                            <a href={data.link} className='inline-block w-full rounded-md p-2 hover:bg-primary/20 '>{data.name}</a>

                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    </ul>
                    <button onClick={() => handleOrderPopup()} className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3'>Order
                    <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer"/>
                    </button>
                </div>
            </div>
        </div>
    </div>
    </>
    
  );
};

export default NavBar;