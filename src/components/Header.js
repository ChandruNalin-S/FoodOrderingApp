import { useState , useEffect, useContext } from "react";
import { LOG_URL } from "../utils/constants";
import { Link} from "react-router-dom";// Link is a component provided by react-router-dom, purpose to link instead of <a></a>, because this link component won't reload the page, when move to another page or component and it is very fast render the page.
import UserContext from "./UserContext";


const Header = ()=>{

  const [btnNameReact,SetbtnNameReact] = useState("login");

  console.log("header-render");

  const {loggedUser} = useContext(UserContext);// to use the Context we can use the useContext hook to get the data which is inside the CreateContext.


  // if no dependency array => useEffect is called on every render.
  //if dependency array is empty = [] => useEffect is called on inital render (just once);
  // if dependency array is (btnNameReact) => called everytime btnNameReact is updated.
  useEffect(()=>{
    console.log("useEffect called");
  },[btnNameReact]);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg py-2 items-center sm:bg-lime-300 lg:bg-blue-300">
      <div className="logo-container">
        <img className="w-40" src={LOG_URL}></img>
      </div>
      <div className="nav-items">
        <ul className="flex m-4 py-2">
          <li className="px-4">
            <Link className="nav-items-link" to="/">home</Link>
          </li>
          <li className="px-4">
            <Link className="nav-items-link" to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link className="nav-items-link" to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link className="nav-items-link" to="/Grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <li>
            <button className="button" onClick={()=>{
              btnNameReact === "login"? SetbtnNameReact("logout"): SetbtnNameReact("login");
            }}>{btnNameReact}</button>
          </li>
          <li className="px-4 text-lg font-bold items-center cursor-pointer">{loggedUser}</li>
        </ul>
      </div>
    </div>
  )
};


export default Header;