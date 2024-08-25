import { CDN_URL } from "../utils/constants";



const RestaurantCard = (props)=>{ {/* props is a object, which is stored the argument come from function call like RestaurantCard inside the Body component*/}
  //console.log(props);
  //const {resName,cuisine} =props;// this shortcut is called destructing the object using javascript.
  const {resData} =  props;
  const {cloudinaryImageId,name,cuisines,avgRating} = resData?.info;// destructing and "?" it denotes that optional chaining. 

  const {deliveryTime} = resData?.info.sla;
  return (
    <div className="res-card" style={{backgroundColor:"lightgray"}}>
      <img className="food-image" alt="meghana Foods" src={CDN_URL+cloudinaryImageId}/>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{deliveryTime} mintues</h4>
    </div>
  )
};

export default RestaurantCard;// this is called a default export, each file have only one default export and we cannot pass multiple default export, if we want export to export multiple component or reactelement means we can use named component.