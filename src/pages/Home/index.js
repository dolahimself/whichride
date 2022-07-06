import React from "react";
import FlexRowSection from "../../components/FlexRowSection";
import WhyWhichride from "../../components/WhyWhichride";
import FlexRowSectionWithTop from "../../components/FlexRowSectionWithTop";

const homeObjOne = {
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  headline: "Compare & book ride-hailing providers ",
  description:
    "Save money and time with WhichrRide. Think Compare the market but for taxis.",
  imgStart: "",
  img: "images/heroBg.svg",
  alt: "home heroBg",
};
const homeObjTwo = {
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  headline: "Compare & book ride-hailing providers ",
  description:
    "Save money and time with WhichrRide. Think Compare the market but for taxis.",
  imgStart: "start",
  img: "images/iPhone-X-2.svg",
  alt: "home heroBg",
};

const Home = () => {
  return (
    <>
      <FlexRowSection {...homeObjOne} />
      <FlexRowSectionWithTop {...homeObjTwo} />
      <WhyWhichride />
    </>
  );
};

export default Home;
