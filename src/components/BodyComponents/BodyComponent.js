import RestroCards from "./RestroCards";
import "./BodyComponent.css";
import { useEffect, useState } from "react";
import Shimmer from "../ShimmerUI/shimmer";

const BodyComponent = () => {
  //here i have created two staes for storing the restro list one for filter, another one will stay there for update..
  const [restroList, setRestroList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filterRestro, setFilterRestro] = useState([])
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const resData =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestroList(resData);
    setFilterRestro(resData)
  };

  return restroList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          placeholder="Search here"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const SearchFilter = restroList.filter((res) =>
              res?.info?.name.toLowerCase().includes(inputValue.toLowerCase())
            );
            setFilterRestro(SearchFilter)
          }}
        >
          Search
        </button>
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = restroList?.filter(
              (res) => res?.info?.avgRating > 4.4
            );
            setFilterRestro(filterList);
          }}
        >
          Top Rated restaurants
        </button>
      </div>
      <div className="RestroContainer">
        {filterRestro?.map((restaurant) => (
          <RestroCards key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default BodyComponent;
