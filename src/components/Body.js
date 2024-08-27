import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";






const Body = ()=>{

  const [ListOfRestaurants,setListOfRestaurants] = useState([]);

  const [FilterRestaurants, setFilterRestaurants] = useState([]);


  const[searchText,setSearchText] = useState("");


  useEffect(()=>{// it always take two parameter one is function to execute and another one is destructing.
    fetchData();
  },[]);

  const fetchData = async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0843007&lng=80.2704622&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();

    //console.log(json);

    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);//"?" it denotes optional chaining, if the object through a error while accessing property or method inside the object, the optional chaining it handle the error and give a undefined or null value.

    setFilterRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }


  
  /*
  if(ListOfRestaurants.length === 0){
    return <Shimmer/>
  }
  */

  return ListOfRestaurants.length === 0? <Shimmer />: (// this line is known as ternary operatorin javascript.
    <div className="body-container">
      <div className="top-rating-container">
        <div>
          <input text="text" className="filter-res" value={searchText} onChange={(e)=>{
              setSearchText(e.target.value);
          }}/>
          <button onClick={()=>{
            const FilterSearchRestaurants = ListOfRestaurants.filter((res)=>{
              return res.info.name.toLowerCase().includes(searchText.toLowerCase());
            });

            //console.log(FilterSearchRestaurants);

            setFilterRestaurants(FilterSearchRestaurants);
          }}>search</button>
        </div>


        <button className="Top-rating" onClick={()=>{
           const FilterRestaurants = ListOfRestaurants.filter((res)=>{
              return res.info.avgRating > 4;
          });

          setFilterRestaurants(FilterRestaurants);

        }}>Top Rating</button>
      </div>
      <div className="res-container">
        {// javascript only written in inside the curly bracket

        FilterRestaurants.map((restaurant)=>{
          return <Link key={restaurant.info.id}  to={"/restaurants/"+restaurant.info.id}><RestaurantCard  resData = {restaurant} /></Link>// whenever we looping array object,then we have to pass unique key props and why we put key inside the Link component not in RestaurantCard component, because now RestaurantCard component inside the Link component so it is parent component on top of it, that's why key is inside the Link component.
        })

        }
        {/*<RestaurantCard resName="KFG" cuisine="Burger, America"/>{/* resName is a called a props, and props is nothing but it is a argument or parameter passing to the javascript function or functional component */}
      </div>
    </div>
  )
};


export default Body;