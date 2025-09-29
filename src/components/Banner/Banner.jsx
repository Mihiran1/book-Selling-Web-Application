import React from 'react'
import BooksStack from "../../assets/website/library.jpg";
import Vector from "../../assets/vector3.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import { GrDeliver } from "react-icons/gr";
import { MdOutlinePayment } from "react-icons/md";
import { MdLocalOffer } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";

const Banner = () => {

    const bgImage = {
        backgroundImage: `url(${Vector})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
      };
  return (
    <>
    <div className='min-h-[550px]'>
        <div className='min-h-[550px] flex justify-center item-center backdrop-blur-xl py-12 sm:py-0'>
            <div className='container' data-aos="slide-up">
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 item-center'>
                    {/* Image section */}
                    <div>
                        <img src={BooksStack} alt="Book img" className='max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"'/>
                    </div>
                    {/* text content section */}
                    <div className="flex flex-col justify-center gap-6 sm:pt-0">
                    <h1 className="text-3xl sm:text-4xl font-bold">
                        Library at your fingertips
                    </h1>
                    <p className='text-sm text-gray-500 tracking-wider leading-5'>
                    Access a world of books anytime, anywhere. Browse, read, and enjoy your favorite titles with just a click your personal library is always within reach.<br />
                    </p>
                    <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                  <FaBookOpen className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                    <p>Quality Books</p>
                  </div>
                  <div className="flex items-center gap-4">
                  <GrDeliver className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                    <p>Fast Delivery</p>
                  </div>
                  <div className="flex items-center gap-4">
                  <MdOutlinePayment className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                    <p>Easy Payment method</p>
                  </div>
                  <div className="flex items-center gap-4">
                  <MdLocalOffer className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                    <p>Get Offers on Books</p>
                  </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Banner