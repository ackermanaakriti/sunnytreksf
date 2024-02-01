import React from "react";
import { singlepagedata } from "../../Context/SinglepageData";

const Detail = () => {
  return (
    <>
      <div className="singlepage--detail--container">
        {singlepagedata.map((item) => (
          <>
            <h1>{item.title}</h1>
            <p>{item.content}</p>
          </>
        ))}
      </div>
    </>
  );
};

export default Detail;
