import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";





const Body = ()=>{

  const [ListOfRestaurants,setListOfRestaurants] = useState([]);

  const [FilterRestaurants, setFilterRestaurants] = useState([]);


  const[searchText,setSearchText] = useState("");

  const Status = useOnlineStatus();


  useEffect(()=>{// it always take two parameter one is function to execute and another one is destructing.
    
    timer = setInterval(()=>{// for checking like, the useEffect() is running after moving to another page.it will running, to stop have to return some function to stop.
      console.log("the useEffect is running");
    },1000);

  
    if(Status=== true){
      fetchData();
    }
    else{
      return <h1>your connection is poor</h1>
    }

    return ()=>{
      clearInterval(timer);
    }
  },[]);// in dependency array we can pass more state variable and even one state variable is also update then useeffect is called.

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
      <div className="top-rating-container flex m-5">
        <div>
          <input text="text" className="border border-solid border-black mr-2 py-1 px-1 " value={searchText} onChange={(e)=>{
              setSearchText(e.target.value);
          }}/>
          <button className="bg-red-500 text-white px-3 py-1 mr-2 rounded-lg" onClick={()=>{
            const FilterSearchRestaurants = ListOfRestaurants.filter((res)=>{
              return res.info.name.toLowerCase().includes(searchText.toLowerCase());
            });

            //console.log(FilterSearchRestaurants);

            setFilterRestaurants(FilterSearchRestaurants);
          }}>search</button>
        </div>


        <button className="bg-black text-white px-2 rounded-lg" onClick={()=>{
           const FilterRestaurants = ListOfRestaurants.filter((res)=>{
              return res.info.avgRating > 4;
          });

          setFilterRestaurants(FilterRestaurants);

        }}>Top Rating</button>
      </div>
      <div className="flex flex-wrap">
        {// javascript only written in inside the curly bracket

        FilterRestaurants.map((restaurant)=>{
          return <Link className="res-details-container-link" key={restaurant.info.id}  to={"/restaurants/"+restaurant.info.id}><RestaurantCard  resData = {restaurant} /></Link>// whenever we looping array object,then we have to pass unique key props and why we put key inside the Link component not in RestaurantCard component, because now RestaurantCard component inside the Link component so it is parent component on top of it, that's why key is inside the Link component.
        })

        }
        {/*<RestaurantCard resName="KFG" cuisine="Burger, America"/>{/* resName is a called a props, and props is nothing but it is a argument or parameter passing to the javascript function or functional component */}
      </div>
    </div>
  )
};

export default Body;