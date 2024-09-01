import { CDN_URL } from "../utils/constants";



const RestaurantCard = (props)=>{ {/* props is a object, which is stored the argument come from function call like RestaurantCard inside the Body component*/}
  //console.log(props);
  //const {resName,cuisine} =props;// this shortcut is called destructing the object using javascript.
  const {resData} =  props;
  const {cloudinaryImageId,name,cuisines,avgRating,costForTwo} = resData?.info;// destructing and "?" it denotes that optional chaining. 

  const {deliveryTime} = resData?.info.sla;
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img className="rounded-lg" alt="meghana Foods" src={CDN_URL+cloudinaryImageId}/>
      <h3 className="font-bold text-lg py-3">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{deliveryTime} mintues</h4>
    </div>
  )
};

export default RestaurantCard;// this is called a default export, each file have only one default export and we cannot pass multiple default export, if we want export to export multiple component or reactelement means we can use named component.