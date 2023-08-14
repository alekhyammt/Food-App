import RestroCards from "./RestroCards";
import './BodyComponent.css';

const BodyComponent = () => {
    const restro_List=[{
      type: "restaurant",
      data: {
        id: "334475",
        name: "KFC",
        area: "BTM Layout",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        costForTwo: 40000,
        cloudinaryImageId: "xqwpuhgnsaf18te7zvtv",
        costForTwoString: "₹400 FOR TWO",
        deliveryTime: 36,
        avgRating: "3.8",
        totalRatings: 500,
      },
      subtype: "basic",

    },
{      type: "restaurant",
      data: {
        id: "334470",
        name: "Biryani",
        area: "BTM Layout",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        costForTwo: 40000,
        cloudinaryImageId: "bmwn4n4bn6n1tcpc8x2h",
        costForTwoString: "₹400 FOR TWO",
        deliveryTime: 36,
        avgRating: "3.8",
        totalRatings: 500,
      },
      subtype: "basic",
    }];
    return (
      <div className="body">
        <div className="search">search</div>
        <div className="RestroContainer">
        {restro_List.map((restaurant) => (
            <RestroCards key={restaurant.data.id} resData={restaurant} />
          ))}      </div>
      </div>
    );
  };
  export default BodyComponent;