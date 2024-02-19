import "./styles.css";

import { SliderComp } from "./SliderComp";

const data = [
  {
    title: "Milan",
    image: "./images/pro1.png",
  },
  {
    title: "Hong Kong",
    image: "./images/pro2.png",
  },
  {
    title: "Prague",
    image: "images/pro3.png",
  },
  {
    title: "Florence",
    image: "images/pro3.png",
  },
  {
    title: "Venice",
    image: "images/pro3.png",
  },
  {
    title: "Los Angeles",
    image: "images/pro3.png",
  },
  {
    title: "Milan",
    image: "images/pro3.png",
  },
  {
    title: "Hong Kong",
    image: "images/pro3.png",
  },
  {
    title: "Prague",
    image: "images/pro3.png",
  },
  {
    title: "Florence",
    image: "images/pro3.png",
  },
  {
    title: "Venice",
    image: "images/pro3.png",
  },
  {
    title: "Los Angeles",
    image: "images/pro3.png",
  },
];

const data1 = [
  {
    title: "Milan",
    image: "./images/agency.png",
  },
  {
    title: "Hong Kong",
    image: "./images/agency1.png",
  },
  {
    title: "Prague",
    image: "images/agency2.png",
  },
  {
    title: "Florence",
    image: "images/agency3.png",
  },
  {
    title: "Venice",
    image: "images/agency4.png",
  },
  {
    title: "Los Angeles",
    image: "images/agency5.png",
  },
];

function RentalPromotionSlick1() {
  return (
    <div className="main-container">
      <div style={{ height: 10 }} />
      <SliderComp
        autoplay={true}
        autoplaySpeed={3000}
        slideNum={3}
        data={data}
        label={"Travel"}
      />
      <div style={{ height: 10 }} />
      <SliderComp
        autoplay={true}
        autoplaySpeed={4000}
        slideNum={3}
        data={data1}
        label={"Tours"}
        // heading={"Lisbon Tours"}
        // subheading={"Check out the fun in Lisbon!"}
      />
    </div>
  );
}

export default RentalPromotionSlick1;