import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const FAQAccordion = () => {
  // Example FAQ data
  const faqData = [
    {
      question: "What is Lorem Ipsum",
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      question: "What is Lorem Ipsum",
      answer: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      question: "What is Lorem Ipsum",
      answer: "It has survived not only five centuries, but also the leap into electronic typesetting.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-[1153px] mx-auto p-6">
      <h1 className="text-5xl font-normal text-center mt-[24px] mb-[34px]">Frequently Asked Questions</h1>
      <div>
        {faqData.map((item, index) => (
          <div key={index}>
            <div
              className="flex justify-between items-center p-4 cursor-pointer bg-white"
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-4xl font-normal">{item.question}</span>
              <FaChevronDown
                className={`transform transition-transform duration-300 text-4xl ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ${
                openIndex === index ? "max-h-40 opacity-100  ease-in" : "max-h-0 opacity-0 ease-out"
              }`}
            >
              <div className="py-2 px-5 text-2xl bg-white text-gray-600">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
