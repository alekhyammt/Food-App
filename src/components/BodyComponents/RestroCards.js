import { CDN_URL } from "../../utils/constants";
import "./RestroCards.css"
const RestroCards = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    availability,
  } = resData.info;
  return (
    <div className="restro-card">
      <img
        className="restro-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{availability.nextCloseTime}</h4>
    </div>
  );
};
export default RestroCards;
