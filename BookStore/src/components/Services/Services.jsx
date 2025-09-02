import React from 'react'
import { FaStar } from "react-icons/fa";
import Img1 from "../../assets/books/book2.jpg";
import Img2 from "../../assets/books/book1.jpg";    
import Img3 from "../../assets/books/book3.jpg";
import Img4 from "../../assets/books/Book4.jpg";
import Img5 from "../../assets/books/Book5.jpg";
import Img6 from "../../assets/books/Book7.jpg";
import Img7 from "../../assets/books/Book7.jpg";

const ServicesData = [
    {
      id: 1,
      img: Img1,
      title: "His Life",
      description:
        "American novel by Philip Roth. Its success turned Roth into a major celebrity, sparking a storm of controversy over its explicit and candid treatment of sexuality, including detailed depictions of masturbation using various props including a piece of liver.",
    },
    {
      id: 2,
      img: Img2,
      title: "Who's there",
      description:
        "novel by the English writer Malcolm Lowry published in 1947. It tells the story of Geoffrey Firmin, an alcoholic British consul in the Mexican city of Quauhnahuac on the Day of the Dead in November 1938. ",
    },
    {
      id: 3,
      img: Img3,
      title: "Lost Boy",
      description:
        "a short adventure novel by Jack London, published in 1903 and set in Yukon, Canada, during the 1890s Klondike Gold Rush, when strong sled dogs were in high demand. The central character of the novel is a dog named Buck.",
    },
    {
        id: 4,
        img: Img4,
        title: "The Prime of Miss Jean Brodie",
        description:
          "The Prime of Miss Jean Brodie is a novel by Muriel Spark, the best known of her works. It was first published in The New Yorker magazine and was published as a book by Macmillan in 1961.",
      },
      {
        id: 5,
        img: Img5,
        title: "The Call of the Wild",
        description:
          "The Call of the Wild is a short adventure novel by Jack London, published in 1903 and set in Yukon, Canada, during the 1890s Klondike Gold Rush, when strong sled dogs were in high demand. The central character of the novel is a dog named Buck.",
      },
      {
        id: 6,
        img: Img6,
        title: "As I Lay Dying",
        description:
          "As I Lay Dying is a 1930 Southern Gothic novel by American author William Faulkner. Faulkner's fifth novel, it is consistently ranked among the best novels of the 20th century. The title is derived from William Marris's 1925 translation of Homer's Odyssey, referring to the similar themes of both works.",
      },
  ];

const Services = ({ handleOrderPopup }) => {
  return (
    <>
    <span id="services"></span>
    <div className="py-10">
        <div className="container">
            <div className='t mb-20 max-w-auto text-center '>
            <h1 className="text-3xl font-bold mb-2">Best Books</h1>
                <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ">
                    Trending Books
                </p>
                
            <p className="text-xs text-gray-400">
            Discover what everyone’s reading! Explore our top trending books that readers can’t put down.
            </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center ">
                {ServicesData.map((service) =>(
                    <div
                        data-aos="zoom-out"
                        className='rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px] mb-20'                    
                    >
                        <div className="h-[100px]">
                        <img
                            src={service.img}
                            alt=""
                            className="max-w-[100px] block mx-auto transform -translate-y-14 group-hover:scale-105  duration-300 shadow-md"/>
                        </div>
                        <div className="p-4 text-center">
                            <div className="w-full flex items-center justify-center gap-1">
                                <FaStar className="text-yellow-500" />
                                <FaStar className="text-yellow-500" />
                                <FaStar className="text-yellow-500" />
                                <FaStar className="text-yellow-500" />
                            </div>
                            <h1 className="text-xl font-bold">{service.title}</h1>
                            <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                                {service.description}
                            </p>
                            <button
                                className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                                onClick={handleOrderPopup}
                            >
                                Order Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    </>
  )
}

export default Services