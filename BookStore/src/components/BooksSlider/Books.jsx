import React from 'react'
import Book1 from "../../assets/books/book10.jpg";
import Book2 from "../../assets/books/book11.jpg";
import Book3 from "../../assets/books/book14.jpg";
import Book4 from "../../assets/books/book12.jpg";
import Book5 from "../../assets/books/book6.jpg";
import { FaStar } from "react-icons/fa6";

const booksData = [
    {
      id: 1,
      img: Book1,
      title: "Commody",
      rating: 5.0,
      author: "Trending Now",
    },
    {
      id: 2,
      img: Book2,
      title: "Science Fiction",
      rating: 4.5,
      author: "Trending Now",
    },
    {
      id: 3,
      img: Book3,
      title: "Adventures",
      rating: 4.7,
      author: "Trending Now",
    },
    {
      id: 4,
      img: Book4,
      title: "Horror",
      rating: 4.4,
      author: "Trending Now",
    },
    {
      id: 5,
      img: Book5,
      title: "Romance",
      rating: 4.5,
      author: "Trending Now",
    },
  ];

const Books = () => {
  return (
    <>
    <div className='mt-14 mb-12'>
        <div className='container'>
            <div className="text-center mb-10 max-w-[600px] mx-auto ">
            <h1 className="text-3xl font-bold mb-2">Top Catagories</h1>
                <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Top Books catagories for you
                </p>
                
                <p className="text-xs text-gray-400">
                Dive into our top categories and find books that match your mood, interest, or curiosity all in one place
                </p>
            </div>
          {/* Body section */}
            <div className='ml-[10%]'>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-item-center gap-5 '>
                    {booksData.map((book) => (
                        <div key={book.id} className='div space-y-3'>
                            <img src={book.img} alt="" className="h-[220px] w-[150px] object-cover rounded-md"/>
                            <div>
                                <h3 className="font-semibold">{book.title}</h3>
                                <p className="text-sm text-gray-700">{book.author}</p>
                                <div className="flex items-center gap-1">
                                    <FaStar className="text-yellow-500" />
                                    <span>{book.rating}</span>
                                </div>
                            </div>
                        </div>
                        ))}
                </div>
                <div className='flex ml-[40%] '>
                    <button className=" mt-10 cursor-pointer  bg-primary text-white py-2 px-5 rounded-md">
                        View All Books
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div className="text-center py-10 border-t-2 border-gray-300/50"></div>
    </>
  )
}

export default Books