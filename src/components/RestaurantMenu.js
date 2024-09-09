import {useState , useEffect } from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";



const RestaurantMenu  = ()=>{

  const {resId} = useParams();// it is function/component, purpose:"get the id from the URL as a object and put inside the resId property".

  const resInfo = useRestaurantMenu(resId);// this function is called a custom hook which means we can create our oun hook to make our component manageable.

  const [showIndex, setShowIndex] = useState(0);

  if (!resInfo) {
  return <Shimmer />;  // Display a fallback UI or loading indicator if the structure is not available
}

  console.log("condition is success");

  // If all checks pass, destructure the necessary properties
  const { name, cuisines, costForTwoMessage } = resInfo.cards[2].card.card.info;
  const { itemCards } =resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
  //console.log(resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards)

  const categories = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((itemCards)=>{
    return itemCards?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  }) 
  console.log(categories);

  return (
    <div className="text-center mt-4">
      <div className="font-bold p-2 m-auto w-6/12 text-start mb-2">
        <h1 className="mb-2">{name}</h1>
        <p>{cuisines.join(", ")}-{costForTwoMessage}</p>
      </div>
      {
        categories.map((category,index)=>{
          return <RestaurantCategory 
          key={category?.card?.card?.title} 
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}// after updated the index value in showIndex useState, then react render the component and the pass the showItems value to RestaurantCategory component. to control the child component of itemList component.
          setShowIndex={()=>{
            setShowIndex(index);// it get the index data of component, when we click the handleClick function inside in RestaurantCategory component and update the index in showIndex useState (local state).
          }}
          />
        })
      }
    </div>
  )
}


export default RestaurantMenu;