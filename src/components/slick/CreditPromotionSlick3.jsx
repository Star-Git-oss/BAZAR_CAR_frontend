import "./styles.css";

import { SliderComp } from "./SliderComp";

const data = [
  {
    title: "Milan",
    image: "./images/adver1.png",
  },
  {
    title: "Hong Kong",
    image: "./images/adver2.png",
  },
  {
    title: "Prague",
    image: "./images/adver3.png",
  },
  {
    title: "Milan",
    image: "./images/image1.png",
  },
  {
    title: "Hong Kong",
    image: "./images/image2.png",
  },
  {
    title: "Prague",
    image: "./images/image3.png",
  },
  {
    title: "Prague",
    image: "./images/image4.png",
  },
];

function CreditPromotionSlick3() {
  return (
    <div className="feature-container">
      <div style={{ height: 10 }} />
      <SliderComp
        autoplay={true}
        autoplaySpeed={3000}
        slideNum={1}
        data={data}
        label={"Travel"}
      />
    </div>
  );
}

export default CreditPromotionSlick3;
