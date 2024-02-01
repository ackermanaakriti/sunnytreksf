import React, { useState } from "react";
import { tvdata } from "../../Data/TopVacDestination";
import DestinationCard from "../Cards/DestinationCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import "./pagination.scss";
import ActivitiesCard from "../Cards/ActivitiesCard";

const ActivitiesPagination = () => {
  const cardsPerPage = 9; // Number of cards per page
  const [currentPage, setCurrentPage] = useState(1);
  const totalCards = tvdata.length;
  const totalPages = Math.ceil(totalCards / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = Math.min(startIndex + cardsPerPage - 1, totalCards - 1);

  const currentCards = tvdata.slice(startIndex, endIndex + 1);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <div className="pagination--container">
        {currentCards.map((item) => (
          <ActivitiesCard
            key={item.id}
            title={item.title}
            content={item.content}
          />
        ))}

<div className="buttons--container">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
         
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <p>{currentPage}</p>
        <p>{currentPage + 1}</p>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      </div>
      
    </>
  );
};

export default ActivitiesPagination;
