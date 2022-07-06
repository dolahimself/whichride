import React from "react";
import "./index.css";

const WhyWhichride = ({
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
      <div className={"home__hero-section"}>
        <section className="body-why">
          <p className="body-why-heading">Why Whichride</p>
        </section>
        <div className="container">
          <div
            className="row home__hero-row"
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div className="col">
              <div className="hero-text-wrapper">
                <div className="home__hero">
                  <img
                    src={"images/car-dealer.svg"}
                    alt={"home heroBg"}
                    className="hero-img"
                  />
                  <p className={"home__hero-title dark"}>{"More choices"}</p>
                  <p className={"home__hero-title-small dark"}>
                    {
                      "WhichRide lets you compare pricing across the major rideshares so you can save money on every ride."
                    }
                  </p>
                </div>
                <div className="home__hero top-margin">
                  <img
                    src={"images/clock-fast.svg"}
                    alt={"home heroBg"}
                    className="hero-img"
                  />
                  <p className={"home__hero-title dark"}>{"More choices"}</p>
                  <p className={"home__hero-title-small dark"}>
                    {
                      "WhichRide lets you compare pricing across the major rideshares so you can save money on every ride."
                    }
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="hero-text-wrapper">
                <div className="home__hero">
                  <img
                    src={"images/options.svg"}
                    alt={"home heroBg"}
                    className="hero-img"
                  />
                  <p className={"home__hero-title dark"}>{"More choices"}</p>
                  <p className={"home__hero-title-small dark"}>
                    {
                      "WhichRide lets you compare pricing across the major rideshares so you can save money on every ride."
                    }
                  </p>
                </div>
                <div className="home__hero top-margin">
                  <img
                    src={"images/safety-first.svg"}
                    alt={"home heroBg"}
                    className="hero-img"
                  />
                  <p className={"home__hero-title dark"}>{"Safety first"}</p>
                  <p className={"home__hero-title-small dark"}>
                    {
                      "WhichRide lets you compare pricing across the major rideshares so you can save money on every ride."
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyWhichride;
