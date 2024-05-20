import React from "react";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {name, cloudinaryImageId, costForTwo, avgRating, cuisines, areaName} = resData?.info;
  return (
    <div className="card" style={{width: 18 + "rem"}}>
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} className="card-img-top" alt="list" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>

        <label>{costForTwo}</label>
        <label>{avgRating}</label>
        <p className="card-text">
          {cuisines.join(', ')}
        </p>
        <label>{areaName}</label>
      </div>
    </div>
  );
};

export default RestaurantCard;
