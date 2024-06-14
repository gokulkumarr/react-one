import React from "react";
import './reastaurantcard.css';

const RestaurantCard = (props) => {
    const {resData} = props;
    const {name, cloudinaryImageId, costForTwo, avgRating, cuisines, areaName} = resData?.info;
  return (
    <div className="card res-card">
        
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} className="card-img-top" alt="list" />
      
      <div className="card-body">
        <h6 className="card-title">{name}
        <label>{areaName}</label>
        </h6>
        <div className="card-xtra-txt">
        <label>{costForTwo}</label>
        <label className="float-end">{avgRating}</label>
        </div>
        <p className="card-text d-inline-block text-truncate">
          {cuisines.join(', ')}
        </p>
        
      </div>
    </div>
  );
};

export default RestaurantCard;
