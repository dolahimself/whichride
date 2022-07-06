import React from "react";
import "./index.css";

const FlexRowSectionWithTop = ({
  lightBg,
  lightText,
  lightTextDesc,
  headline,
  description,
  img,
  alt,
  imgStart,
}) => {
  return (
    <>
      <div
        className={lightBg ? "home__hero-section" : "home__hero-section darkBg"}
      >
        <section className="body-subscription">
          <p className="body-subscription-heading">
            Whichride brings together multiple ride hailing providers and local
            taxi firms in one app
          </p>
          <p className="body-subscription-text">
            Allowing riders to select the provider that offers the best price,
            service or travel time, then seamlessly book within the app
          </p>
        </section>
        <div className="container">
          <div
            className="row home__hero-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="col">
              <div className="hero-text-wrapper">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <img
                    src={"images/step1.svg"}
                    alt={"home heroBg"}
                    className="hero-img"
                  />
                  <div className="home__hero">
                    <p className={"home__hero-title"}>{"Enter location"}</p>
                    <p className={"home__hero-title-small"}>
                      {
                        "Enter your destination to see a list of taxi providers near you."
                      }
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                  className="top-margin"
                >
                  <img
                    src={"images/step2.svg"}
                    alt={"home heroBg"}
                    className="hero-img"
                  />
                  <div className="home__hero">
                    <p className={"home__hero-title"}>
                      {"Find the perfect ride"}
                    </p>
                    <p className={"home__hero-title-small"}>
                      {
                        "Filter results by driver rating, driver sex, waiting times, price or speed. Reduce carbon footprint by only showing hybrid or electric cars."
                      }
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                  className="top-margin"
                >
                  <img
                    src={"images/step3.svg"}
                    alt={"home heroBg"}
                    className="hero-img"
                  />
                  <div className="home__hero">
                    <p className={"home__hero-title"}>{"Pay and Save"}</p>
                    <p className={"home__hero-title-small"}>
                      {
                        "Once you select a ride, we search the web for coupons to get you an even better deal, then book seemlessly within our app and earn points while you ride."
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="home__hero-img-wrapper">
                <img src={img} alt={alt} className="home__hero-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlexRowSectionWithTop;
