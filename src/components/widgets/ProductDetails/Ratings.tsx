import React from "react";
import '../../../assets/css/ratings.css'

const Ratings = (props: {ratingPoint : Number}) => {
  return (
    <div>
      <div className="rating d-flex">
        <div className="rating_point">{props.ratingPoint}</div>
        <div className="stars">
          <div className="star">
            <div className="fas fa-star"></div>
          </div>
          <div className="star">
            <div className="fas fa-star"></div>
          </div>
          <div className="star">
            <div className="fas fa-star"></div>
          </div>
          <div className="star">
            <div className="fas fa-star"></div>
          </div>
          <div className="star">
            <div className="fas fa-star"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ratings;
