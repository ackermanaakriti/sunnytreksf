import React from "react";
import { singlepagedata } from "../../Context/SinglepageData";
import ActivitiesCard from "../Cards/ActivitiesCard";
import { singlepageactivities } from "../../Context/SinglepageData";
import { Container } from "@mui/material";
import DestinationCard from "../Cards/DestinationCard";
import SinglePlaceReview from "./SinglePlaceReview";

const Detail = () => {
  return (
    <>
    <div>
      <div className="singlepage--detail--container">
        {singlepagedata.map((item) => (
          <>
            <h1>{item.title}</h1>
            <p>{item.content}</p>
          </>
        ))}
      </div>

    
        <div className="singlepage-acitivities">
          <h1 className="section--header">Activities in Pokhara</h1>
          <div className="signlepage-acitvities--cards">
         
              <div className="ccc">
                {singlepageactivities.map((item) => (
                  <ActivitiesCard />
                ))}
              </div>
          </div>
        </div>

       
        <div className="singlepage-otherdestination">
           
          <h1 className="section--header">Other Destination May You Like</h1>
          <div className="signlepage-otherdestinaitons--cards">
           
              <div className="ddd">
                {singlepageactivities.map((item) => (
                <DestinationCard/>
                ))}
              </div>
            
          </div>
        
        </div>

       
        <SinglePlaceReview/>
     
   


        
        </div>
  
    </>
  );
};

export default Detail;
