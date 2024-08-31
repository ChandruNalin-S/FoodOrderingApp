import { useState , useEffect } from "react";
import { LOG_URL } from "../utils/constants";
import { Link} from "react-router-dom";// Link is a component provided by react-router-dom, purpose to link instead of <a></a>, because this link component won't reload the page, when move to another page or component and it is very fast render the page.


const Header = ()=>{

  const [btnNameReact,SetbtnNameReact] = useState("login");

  console.log("header-render");


  // if no dependency array => useEffect is called on every render.
  //if dependency array is empty = [] => useEffect is called on inital render (just once);
  // if dependency array is (btnNameReact) => called everytime btnNameReact is updated.
  useEffect(()=>{
    console.log("useEffect called");
  },[btnNameReact]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOG_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link className="nav-items-link" to="/">home</Link>
          </li>
          <li>
            <Link className="nav-items-link" to="/about">About Us</Link>
          </li>
          <li>
            <Link className="nav-items-link" to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link className="nav-items-link" to="/Grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <li>
            <button className="button" onClick={()=>{
              btnNameReact === "login"? SetbtnNameReact("logout"): SetbtnNameReact("login");
            }}>{btnNameReact}</button>
          </li>
        </ul>
      </div>
    </div>
  )
};


export default Header;