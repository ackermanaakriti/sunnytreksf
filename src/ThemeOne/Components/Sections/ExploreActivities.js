import { Container, Grid } from "@mui/material";
import React from "react";
import img from "../../../Images/finalmap.png";
import "./section.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonSkiingNordic } from "@fortawesome/free-solid-svg-icons";
import { basecamp } from "../../Data/BaseCamp";
import simg from "../../../../src/Images/helicopter (2) 1.png";
import { smallacti } from "../../Data/BaseCamp";
import safari from '../../../Images/safari 1 (1).png'
import trekkinpol from '../../../Images/trekking-pole (1) 1.png'

const ExploreActivities = () => {
  return (
    <>
      <div className="explore--section--wrapper">
        <Container >
          <h1 className="section--header">Explore Activities in Map</h1>
          <div className="section--container">
            <Grid container>
              <Grid xl={7} lg={6} xs={6}>
                <div className="map">
                  <img src={img} alt="nepal map" />
                </div>
              </Grid>

              <Grid  lg={5} xl={4} xs={6}>
                <div className="exploreacti--content">
                  <button>Base Camp trek</button>
                  <ul>
                    {basecamp?.map((item) => (
                      <li>
                       <span>
                       <FontAwesomeIcon
                          icon={faPersonSkiingNordic}
                         
                        />
                       </span>
                    
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </Grid>
            </Grid>
          </div>

          <div className="small--activities--container">
            {/* {smallacti.map((item) => (
              
            ))} */}
            
            <div className="d-flex">
            <div className="divv">
                <div className="activities--img">
                  <img src={simg} alt="" />
                </div>
                <p>Heli Ride</p>
              </div>
            <div className="divv">
                <div className="activities--img">
                  <img src={safari} alt="" />
                </div>
                <p>Mountaineering</p>
              </div>
            <div className="divv">
                <div className="activities--img">
                  <img src={trekkinpol} alt="" />
                </div>
                <p>Circuit Trk</p>
              </div>
            <div className="divv">
                <div className="activities--img">
                  <img src={simg} alt="" />
                </div>
                <p>Heli Ride</p>
              </div>
            <div className="divv">
                <div className="activities--img">
                  <img src={safari} alt="" />
                </div>
                <p>Base Camp Trek</p>
              </div>
            <div className="divv">
                <div className="activities--img">
                  <img src={trekkinpol} alt="" />
                </div>
                <p>Heli Ride</p>
              </div>
            <div className="divv">
                <div className="activities--img">
                  <img src={simg} alt="" />
                </div>
                <p>Beyond Nepal</p>
              </div>
              </div>
              
          </div>
        </Container>
      </div>
    </>
  );
};

export default ExploreActivities;
