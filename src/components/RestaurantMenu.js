import {useState , useEffect } from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";



const RestaurantMenu  = ()=>{

  const {resId} = useParams();// it is function/component, purpose:"get the id from the URL as a object and put inside the resId property".

  const resInfo = useRestaurantMenu(resId);// this function is called a custom hook which means we can create our oun hook to make our component manageable.

  if (!resInfo) {
  return <Shimmer />;  // Display a fallback UI or loading indicator if the structure is not available
}

  console.log("condition is success");

  // If all checks pass, destructure the necessary properties
  const { name, cuisines, costForTwoMessage } = resInfo.cards[2].card.card.info;
  const { itemCards } =resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
  
  //console.log(itemCards[0].card.info.name);

  return (
    <div className="resMenu">
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <ul>
        {itemCards.map((item)=>{
          return <li key ={item.card.info.id}>{item.card.info.name}-{" Rs."}
          {item.card.info.price || item.card.info.defaultPrice}</li>
        })}
      </ul>
    </div>
  )
}


export default RestaurantMenu;