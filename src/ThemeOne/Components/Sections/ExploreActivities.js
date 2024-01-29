import { Container, Grid } from "@mui/material";
import React from "react";
import img from "../../../Images/Background.png";
import "./section.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonSkiingNordic } from "@fortawesome/free-solid-svg-icons";
import { basecamp } from "../../Data/BaseCamp";
import simg from "../../../../src/Images/helicopter (2) 1.png";
import { smallacti } from "../../Data/BaseCamp";

const ExploreActivities = () => {
  return (
    <>
      <div className="exploreacti--wrapper">
        <Container>
          <h1 className="section--header">Explore Activities in Map</h1>
          <div className="exploreacti--container">
            <Grid container>
              <Grid xs={8}>
                <div className="map">
                  <img src={img} alt="nepal map" />
                </div>
              </Grid>

              <Grid xs={4}>
                <div className="exploreacti--content">
                  <button>Base Camp trek</button>
                  <ul>
                    {basecamp?.map((item) => (
                      <li>
                        {" "}
                        <FontAwesomeIcon
                          icon={faPersonSkiingNordic}
                          style={{ margin: "0px 5px", fontSize: "25px" }}
                        />
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </Grid>
            </Grid>
          </div>

          <div className="small--activities--container">
            {smallacti.map((item) => (
              <div className="divv">
                <div className="activities--img">
                  <img src={simg} alt="" />
                </div>
                <p>{item.actiname}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default ExploreActivities;
