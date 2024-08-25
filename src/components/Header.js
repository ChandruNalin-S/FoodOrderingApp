import { useState , useEffect } from "react";
import { LOG_URL } from "../utils/constants";


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
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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