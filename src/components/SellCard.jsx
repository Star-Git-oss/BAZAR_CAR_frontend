import * as React from "react";
import { useNavigate } from "react-router-dom";

export default function SellCard({ src, title, price }) {
  const navigate = useNavigate();
  const handleCardClick = () => {
    console.log("handleCardClick -------->>>>>>>> " + src);
    navigate("/view?" + " " + src);
  }
  return (
      <div className="flex flex-col h-full relative overflow-hidden" onClick={handleCardClick}>
        <img className="w-full mb-14 rounded-t-lg" draggable={false} src={src} />
        <div className="flex w-full h-14 flex-col bg-white justify-center items-center absolute bottom-0">
          <p className="text-xl">{title}</p>
          <p className="text-md">{price}</p>
        </div>
      </div>
  );
}