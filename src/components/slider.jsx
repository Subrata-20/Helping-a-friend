import React from "react";
import Slider from "react-slick";

const TestimonialSlider = () => {
  const testimonials = [
    {
      name: "John Smith",
      position: "CEO at Doe",
      image: "https://via.placeholder.com/150", // Replace with your image URL
      content:
        "Lorem ipsum dolor sit amet consectetur. Id vitae viverra habitant quam. Commodo ultrices phasellus morbi nunc. Parturient amet massa nunc ac sem sit. Id dignissim malesuada volutpat morbi. Eu phasellus urna lorem nunc orci est feugiat ut fringilla.",
    },
    {
      name: "Jane Doe",
      position: "Manager at XYZ",
      image: "https://via.placeholder.com/150", // Replace with your image URL
      content:
        "Another inspiring testimonial that showcases how this product changed my life! The support was incredible, and I highly recommend it.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="max-w-[950px] mx-auto">
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="flex flex-row items-start bg-white border-[4px] border-yellow-500 rounded-lg p-6 gap-6"
          >
            {/* Image Section */}
            <div className="flex-shrink-0 w-[150px] h-[150px]">
              <img
                src={item.image}
                alt={item.name}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>

            {/* Text Section */}
            <div className="flex">
              {/* Content */}
              <div className="flex flex-col">
                <p className="text-gray-600 mb-4">
                  <span className="text-yellow-500 text-4xl font-bold mr-2">“</span>
                  {item.content}
                  <span className="text-yellow-500 text-4xl font-bold ml-2">”</span>
                </p>
                {/* Name and Position */}
                <div>
                  <p className="text-gray-800 font-bold">{item.position}</p>
                  <p className="text-gray-600">{item.name}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
