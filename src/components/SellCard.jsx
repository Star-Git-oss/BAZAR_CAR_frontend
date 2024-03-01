import * as React from "react";
import { useNavigate } from "react-router-dom";

export default function SellCard({ src, title, price }) {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate("/view?" + " " + src);
  };
  return (
    <div className="w-full h-full">
      <div
        className="sellcard flex flex-col w-auto h-full relative overflow-hidden shadow-md hover:cursor-pointer"
        onClick={handleCardClick}
      >
        <img
          className="h-full mb-14 rounded-t-lg object-cover"
          draggable={false}
          src={src}
          alt={src}
        />
        <div className="flex w-full h-14 flex-col bg-white justify-center items-center absolute bottom-0">
          <p className="text-sm sm:text-md md:text-lg">{title}</p>
          <p className="text-xs sm:text-sm md:text-md">{price}</p>
        </div>
      </div>
    </div>
  );
}
