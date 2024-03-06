import { Carousel } from "@material-tailwind/react";

function PreownedCarousel({src}) {
  // const src = ["./inicio1.png", "./inicio2.png", "./inicio3.png"];
  return (
    <>
      <Carousel
        className="rounded-b-xl"
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
        <img
          src={src[0]}
          alt="inicio 1"
          className="w-auto md:w-full min-h-[400px] object-cover"
        />
        <img
          src={src[1]}
          alt="inicio 2"
          className="w-auto md:w-full min-h-[400px] object-cover"
        />
        <img
          src={src[2]}
          alt="inicio 3"
          className="w-auto md:w-full min-h-[400px] object-cover"
        />
      </Carousel>
    </>
  );
}

export default PreownedCarousel;
