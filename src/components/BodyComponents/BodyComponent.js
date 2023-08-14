import RestroCards from "./RestroCards";
import "./BodyComponent.css";
import { useState } from "react";
import restro_List from "../../utils/mockData"

const BodyComponent = () => {
  const [restroList, setRestroList] = useState(restro_List);

  return (
    <div className="body">
      <div className="search">search</div>
      <div className="filter">
        <button className="filter-btn" onClick={() => {
          const filterList= restroList.filter(
            (res)=>res.data.avgRating > 4
          );
          setRestroList(filterList);
        }}>
          Top Rated restaurants
        </button>
      </div>
      <div className="RestroContainer">
        {restroList.map((restaurant) => (
          <RestroCards key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default BodyComponent;
