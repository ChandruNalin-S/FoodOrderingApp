import { DOWN_ARROW_URL } from "../utils/constants";
import ItemList from "./ItemList";


const RestaurantCategory = ({data,showItems,setShowIndex})=>{
   //console.log(data)
  
  
   // const [showListItems, setShowListItems] = useState(false);
  
   const handleClick = ()=>{// to display ItemList by accordion, The accordion uses collapse internally to make it collapsible. To render an accordion that’s expanded.
    setShowIndex();
   }

  return (
    <div className="mt-5 m-auto w-6/12 bg-gray-50 shadow-lg p-4 cursor-pointer" onClick={handleClick}>
      <div className="flex justify-between items-center">
        <span className="font-bold">{data.title} ({data.itemCards.length})</span>
        <span>
          <img className="w-3" src={DOWN_ARROW_URL}/>
        </span>
      </div>
       {showItems ? <ItemList items={data.itemCards}/>:null}{/*{showListItems && <ItemList items={data.itemCards}/> both are ternary operator}*/}
    </div>
  )
}

export default RestaurantCategory;