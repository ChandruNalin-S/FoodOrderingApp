import {useState , useEffect } from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import { MENU_API } from "../utils/constants";


const RestaurantMenu  = ()=>{

  const [ResInfo, setResInfo] = useState(null);


  const {resId} = useParams();// it is function/component, purpose:"get the id from the URL as a object and put inside the resId property".


  useEffect(()=>{
    fetchMenu();
  },[]);


  const fetchMenu = async ()=>{
    const data = await fetch(MENU_API+resId);

    const json = await data.json();

    console.log(json);

    setResInfo(json?.data);
  }

  if (!ResInfo) {
  return <Shimmer />;  // Display a fallback UI or loading indicator if the structure is not available
}

  console.log("condition is success");

  // If all checks pass, destructure the necessary properties
  const { name, cuisines, costForTwoMessage } = ResInfo.cards[2].card.card.info;
  const { itemCards } =ResInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
  
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