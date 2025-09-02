import React from 'react'
import { useState } from 'react'
import Vector from "../../assets/website/Blue2.png";
import Book1 from "../../assets/books/Book4.jpg";
import Book2 from "../../assets/books/Book7.jpg";
import Book3 from "../../assets/books/Book9.jpg";

const ImageList = [
    {
      id: 1,
      img: Book1,
      title: "The Prime of Miss Jean Brodie",
      description:
        "The Prime of Miss Jean Brodie is a novel by Muriel Spark, the best known of her works. It was first published in The New Yorker magazine and was published as a book by Macmillan in 1961. ",
    },
    {
      id: 2,
      img: Book2,
      title: "As I Lay Dying",
      description:
        "As I Lay Dying is a 1930 Southern Gothic novel by American author William Faulkner. Faulkners fifth novel, it is consistently ranked among the best novels of the 20th century. The title is derived from William Marris's 1925 translation of Homer's Odyssey, referring to the similar themes of both works",
    },
    {
      id: 3,
      img: Book3,
      title: "Wuthering Heights",
      description:
        'Wuthering Heights is the only novel by the English author Emily Brontë, initially published in 1847 under her pen name "Ellis Bell". It was published in 1850 under her real name. The novel is set in the Yorkshire moors and tells the story of the doomed love between Heathcliff and Catherine Earnshaw. It is a tale of passion, revenge, and the destructive power of love. The novel is known for its complex characters, dark themes, and innovative narrative structure, which includes multiple narrators and a non-linear timeline. ',
    },
];
    
function Hero({handleOrderPopup}) {

    const [imageId, setImageId] = useState(Book1);
    const [title, setTitle] = useState("His Life will forever be Changed");
    const [description, setDescription] = useState("lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");

    const bgImage = {
        backgroundImage: `url(${Vector})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
    }   

  return (
    <>
    <div className='min-h-[550px] sm:min-h-[680px] bg-gray-100 flex justify-center items-center duration-200 ' style={bgImage}>
    <div className="container pb-8 sm:pb-0 mx-[5%]">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text content section */}
            <div
              data-aos-once="true"
              className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 "
            >
              <h1
                data-aos="zoom-out"
                data-aos-duration="500"
                data-aos-once="true"
                className="text-5xl sm:text-6xl lg:text-7xl font-bold"
              >
                {title}
                
              </h1>
              <p
                data-aos="slide-up"
                data-aos-duration="500"
                data-aos-delay="100"
                className="text-sm "
              >
                {description}
              </p>
              <div>
                <button
                  onClick={handleOrderPopup}
                  className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                >
                  Order Now
                </button>
              </div>
            </div>
            {/* Image section */}
            <div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 ">
                <div className="h-[300px] sm:h-[550px] overflow-hidden flex justify-center items-center">
                    <img
                    data-aos="zoom-in"
                    data-aos-once="true"
                    src={imageId}
                    alt="biryani img"
                    className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto"
                    />
                </div>
                <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute -bottom-[40px] lg:-right-1 bg-white rounded-full ">
                {ImageList.map((item) => (
                  <img
                    data-aos="zoom-in"
                    data-aos-once="true"
                    src={item.img}
                    onClick={() => {
                      setImageId(
                        item.id === 1 ? Book1 : item.id === 2 ? Book2 : Book3
                      );
                      setTitle(item.title);
                      setDescription(item.description);
                    }}
                    alt="Book img"
                    className="max-w-[100px] h-[100px] object-contain inline-block hover:scale-110 duration-200"
                  />
                ))}
              </div>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero