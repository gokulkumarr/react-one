import React, { useState, useEffect } from "react";
import RestaurantCard from "../resto-card/RestaurantCard";
import SearchBar from "./Search";

const BodySection = () => {
  const [resListArr, setresListArr] = useState([]);
  const [searchFilterArr, setsearchFilterArr] = useState([]);
  
  useEffect(() => {
    fetchresData();
 
    // for memory cleanup
    return () => {
      setresListArr([]);
    };
  }, []);

  const fetchresData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0843007&lng=80.2704622&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    const apiData = jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setresListArr(apiData);
    setsearchFilterArr(apiData);
  };

  const handleTopRated = () => {
    const topRatedList = resListArr.filter((res) => {
      return res?.info?.avgRating > 4;
    });
    setsearchFilterArr(topRatedList);
  };

  const handleSearchTextData = (searchtxt) => {
      
      const searchList = resListArr.filter((res) => {
        return res?.info?.name.toLowerCase().includes(searchtxt.toLowerCase());
      });
  
      setsearchFilterArr(searchList);
  }

  const handleClearFilters = () => {
    return setsearchFilterArr(resListArr);
  }

  return resListArr.length === 0 ? (
    <h1>Loading...</h1>
  ) : (
    <main className="main-container container my-4">
      <div className="utility-container mb-3">
      <SearchBar onChildClick ={handleSearchTextData}/>
        <button className="filter-btn float-end mb-2 ms-2 d-block" onClick={handleClearFilters}>Clear Filters</button>
        <button className="filter-btn float-end mb-2 d-block" onClick={handleTopRated}>Top Rated</button>
      </div>
      <div className="row">
        {searchFilterArr.map((restaurant) => {
          return (
            <div
              className="col-12 col-md-2 d-flex flex-row mb-3"
              key={restaurant.info.id}
            >
              <RestaurantCard resData={restaurant} />
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default BodySection;
