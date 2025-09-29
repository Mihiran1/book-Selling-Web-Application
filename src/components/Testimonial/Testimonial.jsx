import React from 'react'
import Slider from "react-slick";

const testimonialData = [
    {
      id: 1,
      name: "— Amaya R",
      text: "This bookstore is a hidden gem! I found all my favorite titles in one place, and the delivery was super fast. Highly recommended!",
      img: "https://picsum.photos/101/101",
    },
    {
      id: 1,
      name: "— Devon S.",
      text: "The layout is so easy to browse, and the recommendations are spot on. I’ve discovered amazing new reads I wouldn’t have found elsewhere.",
      img: "https://picsum.photos/102/102",
    },
    {
      id: 1,
      name: "— Nilanthi J",
      text: "Great selection, excellent customer service, and beautiful packaging. It’s my new go-to place for books!",
      img: "https://picsum.photos/103/103",
    },
    {
      id: 1,
      name: "— Kaveen M.",
      text: "As a book lover, I couldn’t ask for more. From trending novels to timeless classics, they have it all — and at great prices!",
      img: "https://picsum.photos/104/104",
    },

  ];


const Testimonial = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        // slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
          {
            breakpoint: 10000,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  
  return (
    <>
    <div data-aos="fade-up" data-aos-duration="300" className="py-10">
        <div className='container'>
        <div className="text-center mb-10 max-w-[1000px] mt-[-5%] mx-[20%]">
        <h1 className="text-3xl font-bold mb-2 ">Testimonial</h1>
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Loved by Thousands of Readers
            </p>
            
            <p className="text-xs text-gray-400">
            Honest feedback from our amazing book-loving community
            </p>
          </div>
          <div data-aos="zoom-in" data-aos-duration="500" className="grid grid-cols-1 max-w-[1000px] mx-auto gap-6 mx-[20%]">
            <Slider {...settings}>
                {testimonialData.map((data) => (
                    <div className="my-6 " >
                    <div key={data.id} className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative'>
                        <div>
                        <img
                          className="rounded-full w-20 h-20"
                          src={data.img}
                          alt=""
                        />
                      </div>
                      <div className="flex items-center gap-4">
                        <div>
                          <p className="text-gray-500 text-sm">{data.text}</p>
                          <h1 className="text-0.5xl font-bold text-gray-800">
                            {data.name}
                          </h1>
                        </div>
                      </div>
                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                    </div>
                    </div>
                ))}
            </Slider>
          </div>
        </div>
    </div>
    </>
  )
}

export default Testimonial;