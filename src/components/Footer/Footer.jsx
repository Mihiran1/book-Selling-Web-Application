import React from 'react'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import footerLogo from "../../assets/website/logo.png";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
  {
    title: "Services",
    link: "/#services",
  },
  {
    title: "Shop",
    link: "/#shop",
  },
  {
    title: "FAQ",
    link: "/#faq",
  },
  {
    title: "Testimonials",
    link: "/#testimonials",
  },
  
  
];
const ImportantLinks = [    
  
  {
    title: "HomShipping & Return Policye",
    link: "/#",
  },
  {
    title: "Privacy And Cookies Policy",
    link: "/#about",
  },
  {
    title: "Terms & Conditions",
    link: "/#",
  },
  {
    title: "Payment Policy",
    link: "/#blog",
  },
  {
    title: "Coupon T&C",
    link: "/#blog",
  },
  {
    title: "Refund Policy",
    link: "/#blog",
  },
  {
    title: "Cancellation Policy",
    link: "/#blog",
  },
  {
    title: "Shipping Policy",
    link: "/#blog",
  },
];
const CategoryLinks = [    
  
  {
    title: "School List",
    link: "/#",
  },
  {
    title: "Galle Literary",
    link: "/#about",
  },
  {
    title: "Gift Packs",
    link: "/#",
  },
  {
    title: "By Language",
    link: "/#blog",
  },
  {
    title: "Promotions",
    link: "/#blog",
  },
  {
    title: "By Genre",
    link: "/#blog",
  },
  {
    title: "By Author",
    link: "/#blog",
  },
  {
    title: "By Publisher",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <>
    <div className="bg-gray-100">
      <div className="container">
        <div className=" grid md:grid-cols-3 py-5">
        {/* company Details */}
          <div className='py-8 px-4 ml-[18%]' >
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="" className='max-w-[50px]'/>Book Store
            </h1>
            <h4 className=" sm:text-1xl text-0.5xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">Your Favorite Bookstore</h4>
            <p className="">
            Bringing stories to life explore a wide range of books and enjoy seamless shopping from the comfort of your home.{" "}
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>No.30,
                        Stanley Thilakarathne Mawatha,
                        Nugegoda,
                        Sri Lanka, 10250</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+94 764377039</p>
            </div>
             {/* Social Handle */}
             <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ml-[5%]">
            <div className="">
              <div className='py-8 px-4'>
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Quick Links</h1>
                <ul className='flex flex-col gap-3'>
                  {FooterLinks.map((link) => (
                    <li className='cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500'>
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <div className='py-8 px-4 mr-[12%]'>
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Information</h1>
                <ul className='flex flex-col gap-3'>
                  {ImportantLinks.map((link) => (
                    <li className='cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500'>
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <div className='py-8 px-4'>
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  More Categories</h1>
                <ul className='flex flex-col gap-3'>
                  {CategoryLinks.map((link) => (
                    <li className='cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500'>
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          </div>
          <div>
          <div className="text-center py-10 border-t-2 border-gray-300/50">
            @copyright 2025 All rights reserved || Made with ❤️ by MihiRan
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer