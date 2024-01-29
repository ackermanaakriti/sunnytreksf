import React from "react";
import img from "../../../Images/Mask group.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faMountainSun } from "@fortawesome/free-solid-svg-icons";
const OurTrendingPackageCard = () => {
  return (
    <>
      <div className="ourtrendingcard--container">
        <div className="ourtrendingcard--img">
          <img src={img} />
        </div>
        <div className="ourtrendingcard--content">
          <h1>Climbing Mount Annapurna Trek</h1>
          <div className="ourtrendingcard--location">
            <p>
              
              <FontAwesomeIcon
                style={{ color: "#0E6097", paddingRight: "5px" }}
                icon={faLocationDot}
              />
              Kilimanjaro,Tanzania
            </p>

            <p>
              
              <FontAwesomeIcon
                style={{ color: "#0E6097", paddingRight: "5px" }}
                icon={faCalendar}
              /> 7 Days
            </p>
          </div>
          <p >
            <FontAwesomeIcon
              style={{ color: "#0E6097", paddingRight: "8px" }}
              icon={faMountainSun}
            />
            Trekking
          </p>

          {/* <div className="otc--btn">
            <Bluebutton value="Explore" />
            <p style={{ color: "gray", fontSize: "20px" }}>Price Rs.2,999</p>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default OurTrendingPackageCard;
