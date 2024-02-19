import { Carousel } from "@material-tailwind/react";
import SellCard from "./SellCard";

function CardCarousel({src}) {
  console.log(src);
  return (
    <>
      <Carousel
        className="rounded-xl"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-40 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <SellCard />
        <SellCard />
        <SellCard />
        {/* <img
          src={src[1]}
          alt="inicio 2"
          className="w-full object-cover"
          style={{height: "89vh"}}
        />
        <img
          src={src[2]}
          alt="inicio 3"
          className="w-full object-cover"
          style={{height: "89vh"}}
        /> */}
      </Carousel>
    </>
  );
}

export default CardCarousel;
