import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";


const Cart = ()=>{

  const cartItems = useSelector((store)=> store.cart.items);// I'm subscribing specific portion of the store for optimization of data rendering.

  /*
  note: never do like this using useSelector, because it reduce the performs of data render.

  const store = useSelector((store)=> store);
  const cartItems = store.cart.items
  
  it will work but even the code is not optimize, because the whole store is subscribe instead of portion store data, so if the any slice is update inside the store, it have to wait and then render the data.
  */

  //console.log(cartItems);

  const dispatch = useDispatch();// hook

  const clearCartItems = ()=>{
    dispatch(clearCart());
  }

  return (
    <div className="text-center p-5 m-5 text-xl">
      <div className=" flex justify-evenly items-center mb-[20px]">
        <h1 className="font-bold text-2xl">Cart</h1>
        <button className="m-1 p-2 bg-black text-white rounded-lg font-bold" onClick={clearCartItems}>Clear Cart</button>
      </div>
      
      <div className="m-auto w-6/12">
        {cartItems.length === 0 && <h1>Please Add the Product to Cart!</h1>}
        <ItemList items={cartItems}/>
      </div>
    </div>
  )
}

export default Cart;