import React, { useState } from "react";
import "./Checksidebar.scss";
import { region, activities } from "../../Data/Checkbox";
import { CheckBox } from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Region = () => {
  const [regionvisible, setregionVisible] = useState(false);
  const [activitiesvisible, setacitivitesvisible] = useState(false);
  const [bugetvisible, setbudgetvisible] = useState(false);
  

 
  const handleRegion = () => {
    setregionVisible(!regionvisible);
  };
  const handleActivities = () => {
    setacitivitesvisible(!activitiesvisible);
  };
  const handleBudget = () => {
    setbudgetvisible(!bugetvisible);
  };
  return (
    <>
      <div className="checkbox--container">

        <div className="checkbox--header">       <p>
          Region{" "}
          <span>
          <FontAwesomeIcon
            onClick={handleRegion}
            style={{ fontSize: "13px",color:'#0E6097' }}
            icon={faChevronDown}
          />
          </span>
        
        </p></div>

        {regionvisible && (
          <div className="region--container">
            <form>
              {region.map((item) => (
                <div>
                  <input type="checkbox" placeholder="check me" />
                  <label>{item.name}</label>
                </div>
              ))}
            </form>
          </div>
        )}


        <div className="checkbox--header">       <p>
          Activities
          <FontAwesomeIcon
            onClick={handleActivities}
            style={{ fontSize: "13px",color:'#0E6097' }}
            icon={faChevronDown}
          />{" "}
        </p></div>

        {activitiesvisible && (
          <div className="region--container">
            <form>
              {activities.map((item) => (
                <div>
                  <input type="checkbox" placeholder="check me" />
                  <label>{item.name}</label>
                </div>
              ))}
            </form>
          </div>
        )}


        <div className="checkbox--header">       <p>
          Budget{" "}
          <FontAwesomeIcon
            onClick={handleBudget}
            style={{ fontSize: "13px",color:'#0E6097' }}
            icon={faChevronDown}
          />{" "}
        </p></div>

        {bugetvisible && (
          <div className="region--container">
            <form>
              {activities.map((item) => (
                <div>
                  <input type="checkbox" placeholder="check me" />
                  <label>{item.name}</label>
                </div>
              ))}
            </form>
          </div>
        )}




      </div>
    </>
  );
};

export default Region;
