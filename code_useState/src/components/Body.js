import { CiSearch } from "react-icons/ci";
import { restaurantList } from "../config";
import { RestaurantCard } from "./ResturantCard";
import { useState } from "react";
function filterData(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
}

const Body = () => {
  const [searchText, setSearch] = useState("KFC"); 
//   const [searchClicked, setSearchClicked] = useState(false);
  const originalRestaurantList = restaurantList;
    const [restaurants, setResturants] = useState(restaurantList);
  return (
    <div className="body">
      <div className="search-box">
        <input 
        type="text"
        className="search-input"
        value={searchText}
        placeholder="search"
        onChange={(e) => {
            setSearch(e.target.value)
        }}
        
        />
       <button className="btn"
       onClick={()=>{
        // if(searchClicked == "false")
        // setSearchClicked("true")
        // else
        //     setSearchClicked("false")


        // need to filter the data and update the state -> resturants 

        const data = filterData(searchText,originalRestaurantList);
        setResturants(data);

       }}
       >Search</button>
      </div>
      <div className="restaurant-container">
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            restaurantData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};
export default Body;