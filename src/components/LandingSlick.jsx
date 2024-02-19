import * as React from "react";
import PromotionSlick from "./slick/PromotionSlick";
import PromotionSlick1 from "./slick/PromotionSlick1";
import PromotionSlick2 from "./slick/PromotionSlick2";

function LandingSlick() {
  return (
    <>
      <div className="w-full px-2">
        <div className="w-full h-auto lg:flex">
          <div className="w-full lg:w-2/3 border bg-gray-300 border-blue-500 rounded-lg mt-1">
            <div className="w-full mb-10">
              <PromotionSlick />
            </div>
          </div>
          <div className="w-full lg:w-1/3 bg-gray-100 border border-blue-500 rounded-lg mt-1 lg:ml-1">
            <div className="w-full mb-10 h-auto">
              <PromotionSlick1 />
            </div>
          </div>
        </div>
        <div className="w-full h-auto border border-blue-500 rounded-lg mt-1 px-2">
          <PromotionSlick2 />
        </div>
        
      </div>
    </>
  );
}

export default LandingSlick;
