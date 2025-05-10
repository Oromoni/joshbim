"use client"; // only needed if you're using the App Router

import React from "react";
import Hero from "./Hero";

const Landing = () => {
  return (
    <div className="min-h-screen bg-[#091912] w-full relative scroll-smooth font-sans">
      <video
        src="/asset/video.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="object-cover h-96 w-full sm:h-[450px] pointer-events-none"
      />
      <Hero />
    </div>
  );
};

export default Landing;
