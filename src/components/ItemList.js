import { useDispatch } from "react-redux";
import { CDN_URL} from "../utils/constants"
import { addItem } from "../utils/cartSlice";

const ItemList = ({items})=>{

  const dispatch = useDispatch()

  const AddtoCart = (item)=>{
    dispatch(addItem(item));
  }

  /*
    dispatch(addItem(item));
    -> the addItem(item) the item is pass like a object such as,
    {
      payload:item
    } 
  */

  console.log(items);
  return (
    <div>
      {
        items.map((item)=>{
          return (
            <div className="border-gray-200 border-b-2 m-2 p-2 text-left flex justify-between pb-4" key={item.card.info.id}>
              <div className="w-10/12">
                  <div className="font-bold">
                    <span>{item?.card?.info?.name}</span>
                    <span> -₹ {item?.card?.info?.price ? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice/100}</span>
                  </div>
                  <p className="text-xs">{item?.card?.info?.description}</p>
              </div>
              <div className="w-2/12 relative">
                <img className="w-40 align-middle rounded-lg" src={CDN_URL+item.card.info.imageId}/>
                <div className="absolute bottom-[-6] right-5">
                  <button className="px-[15px] py-[5px] bg-white rounded-lg font-bold text-green-500 shadow-lg" onClick={()=>AddtoCart(item)}>Add +</button>
                </div>
              </div>
            </div>
          )})
      }
    </div>
  )
}

export default ItemList;