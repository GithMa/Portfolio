"use client";
import React from "react";
import Image from "next/image";

import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#36494E] via-[#B86F52] to-[#597081]">
              Hei, Jeg er{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Githan",
                2500, // wait 1s before replacing "Mice" with "Hamsters"
                "Data Scientist",
                2500,
                "Statistikk og Matte",
                2500,
                "Informatikk",
                2500,
                "Maskin læring",
                2500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#36494E] via-[#B86F52] to-[#597081] hover:from-[#597081] hover:via-[#B86F52] hover:to-[#36494E] text-white transition-all duration-300">
              Ansett Meg
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#36494E] via-[#B86F52] to-[#597081] hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#011627] hover:bg-slate-800 rounded-full px-5 py-2">
                Last ned CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#5D737E] w-[250px] h-[250px] lg:w-[250px] lg:h[500px] relative">
            <Image
              src="/images/GithanPortfolioMidlertidig.JPG"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 contrast-125"
              width={175}
              height={175}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
