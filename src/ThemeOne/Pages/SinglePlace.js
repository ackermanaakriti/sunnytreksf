import React from "react";
import LayOutone from "../LayOutone";
import { Container } from "@mui/material";
import Inquiry from "../Components/Singleplace/Inquiry";
import Detail from "../Components/Singleplace/Detail";
import ActivitiesCard from "../Components/Cards/ActivitiesCard";
import { singlepageactivities } from "../Context/SinglepageData";
import DestinationCard from "../Components/Cards/DestinationCard";
import SinglePlaceReview from "../Components/Singleplace/SinglePlaceReview";

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
      <Container maxWidth='xl'>
        <div className="singlepage--content--wrapper">
          <Inquiry />
          <Detail />
        </div>
      </Container>
    
    
   
    </LayOutone>
  );
};

export default SinglePlace;
