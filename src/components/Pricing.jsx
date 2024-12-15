import React from 'react'
import Slider from "react-slick";
const Pricing = () => {
    const swipes = [
        {
          name: "Jhon Smith",
          position: "CEO at Doe",
          image: "https://i.postimg.cc/sXNds585/img.jpg", // Replace with your image URL
          content: "Lorem ipsum dolor sit amet consectetur. Id vitae viverra habitant quam. Commodo ultrices phasellus morbi nunc. Parturient amet massa nunc ac sem sit. Id dignissim malesuada volutpat morbi. Eu phasellus urna lorem nunc orci est feugiat ut fringilla.",
        },
        {
          name: "Jane Doe",
          position: "Manager at XYZ",
          image: "https://via.placeholder.com/150", // Replace with your image URL
          content: "Another inspiring testimonial that showcases how this product changed my life! The support was incredible, and I highly recommend it.",
        },
      ];

    const slides = [
        {
          name: "SILVER",
          content1: "10 working days",
          content2: "This plan grants access to all the facilities offered by us , the best plan for long-term clients",
          price: "₹3,100",
        },
        {
            name: "GOLD",
            content1: "7 working days",
            content2: "This plan grants access to all the facilities offered by us , the best plan for long-term clients",
            price: "₹5,100",
        },
        {
            name: "DIAMOND",
            content1: "4 working days",
            content2: "This plan grants access to all the facilities offered by us , the best plan for long-term clients",
            price: "₹11,100",
        },
      ];

      const settings = {
        dots: true, // Enable dots for navigation
        infinite: true, // Infinite looping
        speed: 500, // Transition speed
        slidesToShow: 1, // Show one slide at a time
        slidesToScroll: 1, // Scroll one slide at a time
        autoplay: true, // Enable auto sliding
        autoplaySpeed: 5000, // Time interval in ms
        centerMode: true,
        centerPadding: "0px",
      };

  return (
    <div className='bodie w-screen'>
    <div className='mb-[35px]'>
      <h1 className='text-[48px] mb-[10px] font-medium'>Pricing</h1>
      <p className='text-[24px] font-light'>Payment should be done before the work starts. <br/>
      Payment should be done through payment gateway.</p>
    </div>
    <div>
        <div className='flex'>
    {slides.map((slide, index) => (
    <div key={index} className='border-[4px] border-gold rounded-2xl min-w-[307px] min-h-[543px] bg-premium mr-[80px]'>
    <h1 className='flex justify-center text-white text-4xl mt-[51px] mb-[44px]'>{slide.name}</h1>
    <ul className='text-greyish ml-[42px] mb-[85px] w-[241px] pr-2 font-light'>
      <li className='pb-[26px] w-[241px]'>
      <span className='text-gold mr-[14px] pt-2'>◆</span>
      {slide.content1}</li>
      <li>
      <span className='text-gold mr-[14px] pt-2 w-[241px]'>◆</span>
      {slide.content2}</li>
    </ul>
    <h2 className='text-4xl text-white flex justify-center mb-[49px]'>
      {slide.price}<span className='text-[13px] text-greyish font-light'>/day</span>
    </h2>
    <div className='h-[2px] bg-gold'></div>

    <div className='relative flex justify-center -top-[25px]'>
      <button className='bg-gold text-2xl h-[50px] w-[130px] rounded-[57px] hover:bg-yellow-700 font-semibold'>
        Buy now
      </button>
    </div>
    </div>
    ))}
    </div>
    </div>
    <h1 className='text-5xl flex justify-center mt-[60px] mb-[20px]'>What are others saying about us?</h1>

    <div className="w-[950px]  mx-auto">
      <Slider {...settings}>
        {swipes.map((item, index) => (
          <div
            key={index}
            style={{
              flex:  1, // Allow the text section to take the remaining space
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
            className=" max-h-[355.94px] bg-white border-[4px] border-gold rounded-[16.71px] p-[16.71px]"
          >
            <div className="sm:w-1/3 w-[250.66px] flex flex-col justify-center">
              <img
                src={item.image}
                alt={item.name}
                className="rounded-[8.36px] w-[250.66px] h-[250.66px] object-cover mb-[23.39px]"
              />
              <div className='flex flex-col items-center w-[250.66px]'>
                <p className="text-black font-normal">{item.position}</p>
                <p className="text-gray-600 font-normal">{item.name}</p>
              </div>
            </div>
            <div className="relative -translate-y-[160%] translate-x-[45%] w-2/3 flex flex-col">
              <img src="https://i.postimg.cc/0QGb8L41/Frame-44.png" alt="comma" className='w-[67.68px] h-[40.11px]'/>
                <p className="text-gray-600 px-[7%] text-justify">{item.content}</p>
                <img src="https://i.postimg.cc/LXFJFHNV/Frame-45.png" alt=""  className='w-[67.68px] h-[40.11px] self-end'/>
            </div>
          </div>
        ))}
      </Slider>
</div>

    </div>
  )
}

export default Pricing
