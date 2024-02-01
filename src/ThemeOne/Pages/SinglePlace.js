import React from "react";
import LayOutone from "../LayOutone";
import { Container } from "@mui/material";
import Inquiry from "../Components/Singleplace/Inquiry";
import Detail from "../Components/Singleplace/Detail";
import ActivitiesCard from "../Components/Cards/ActivitiesCard";
import { singlepageactivities } from "../Context/SinglepageData";
import DestinationCard from "../Components/Cards/DestinationCard";

const SinglePlace = () => {
  return (
    <LayOutone>
      <div className="pages--wrapper">
        <Container>
          <div className="pages--header">
            <h1>Pokhara</h1>
          </div>
        </Container>
      </div>
      <Container>
        <div className="singlepage--content--wrapper">
          <Inquiry />
          <Detail />
        </div>
      </Container>
      <Container>
        <div className="singlepage-acitivities">
          <h1 className="section--header">Activities in Pokhara</h1>
          <div className="signlepage-acitvities--cards">
            <Container>
              <div className="ccc">
                {singlepageactivities.map((item) => (
                  <ActivitiesCard />
                ))}
              </div>
            </Container>
          </div>
        </div>
      </Container>
      <Container>
        <div className="singlepage-otherdestination">
            <Container>
          <h1 className="section--header">Other Destination May You Like</h1>
          <div className="signlepage-otherdestinaitons--cards">
           
              <div className="ccc">
                {singlepageactivities.map((item) => (
                <DestinationCard/>
                ))}
              </div>
            
          </div>
          </Container>
        </div>
      </Container>
    </LayOutone>
  );
};

export default SinglePlace;
