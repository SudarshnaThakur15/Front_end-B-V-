import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    text: "We have been working with Positivus for the past year and their dedication and attention to detail has been exceptional. We look forward to many more collaborations in the future!",
    name: "John Smith",
    position: "Marketing Director at XYZ Corp",
  },
  {
    text: "Positivus delivered everything we asked for and more. Their communication was clear and proactive, and they truly care about delivering quality work.",
    name: "Jane Doe",
    position: "Product Manager at ABC Ltd",
  },
  {
    text: "Incredible experience! The team at Positivus was professional, innovative, and on top of deadlines. Highly recommended for any digital needs.",
    name: "David Lee",
    position: "CTO at Innovatech",
  },
];

// Dimensions
const CARD_WIDTH = 606 + 32; // Card width + horizontal padding
const WRAPPER_WIDTH = 1240;

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="h-[625px] w-[1240px] ml-[100px] mt-[100px] bg-[#191A23] py-16 flex justify-center items-center rounded-[45px] overflow-hidden">
      <div className="relative w-[1240px]">
        {/* Slides */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(calc(${WRAPPER_WIDTH / 2}px - ${
              CARD_WIDTH / 2 + index * CARD_WIDTH
            }px))`,
            width: `${testimonials.length * CARD_WIDTH}px`,
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="w-[606px] h-[473px] flex-shrink-0 px-4 mx-2 flex flex-col items-center justify-start"
            >
              {/* Testimonial Card */}
              <div className="w-[606px] h-[266px] bg-[#191A23] border border-lime-400 rounded-2xl p-6 text-white relative flex items-center justify-center text-center">
                <p className="text-lg leading-relaxed">{t.text}</p>
              </div>

              {/* Speech Bubble + Name */}
              <div className="relative text-center mt-6">
                <div className="w-4 h-4 border-l border-b border-lime-400 rotate-45 mx-auto -mt-2 bg-[#191A23]" />
                <p className="text-lime-400 font-semibold mt-2">{t.name}</p>
                <p className="text-white text-sm">{t.position}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Navigation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-between items-center" style={{ width: "564px", height: "14px" }}>
          {/* Left Arrow */}
          <button onClick={prev} style={{ width: "20px", height: "auto" }}>
            <ArrowLeft className="text-white" size={30} />
          </button>

          {/* Navigation Icons */}
          <div style={{ width: "146px", height: "14px", display: "flex", justifyContent: "center", gap: "19px" }}>
            {testimonials.map((_, i) => (
              <img
                key={i}
                src={i === index ? "/the_logo_icon_active.svg" : "/the_logo_icon.svg"}
                alt={`dot-${i}`}
                style={{
                  width: "14px",
                  height: "14px",
                //   border: i === index ? "3px solid #A3E635" : "3px solid transparent",
                //   borderRadius: "50%",
                }}
              />
            ))}
          </div>

          {/* Right Arrow */}
          <button onClick={next} style={{ width: "20px", height: "auto", border: "3px"  }}>
            <ArrowRight className="text-white" size={30} />
          </button>
        </div>
      </div>
    </div>
  );
}
