import React from "react";
import exampleImg from "../assets/react.svg"; // Puedes reemplazar esta imagen luego

const LeftImage = () => (
  <div className="w-[40%] bg-black flex items-center justify-center">
    <img
      src={exampleImg}
      alt="Profile"
      className="object-cover grayscale w-full h-full"
    />
  </div>
);

export default LeftImage; 