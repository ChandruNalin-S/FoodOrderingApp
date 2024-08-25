import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
/*
component -> to build this site
Header
  ->Logo
  ->Nav items
Body
  ->Search
  ->RestaurantContainer
    ->RestaurantCard
      -img
      -name of restaurant, star rating, cuisine,delivery time.
Footer
  ->Address
  ->links  
*/

/*
Important note: All the website UI can change based on data come from backend. this will handle by "config driven UI" to allow developers to create UI website based on configuration file, such as JSON or TypeScript
*/



/* 
note: whenever creating or developing dynamic RestaurantCard or any other html, then we have to give props to the component and generate each and every one.
*/




/*
note: In map function never use key as a index of array object or element. because react cannot accept index as a key. but we run the code it will execute. it is not right way to write in react and it called a anti-pattern.


note: not using keys(not acceptable) <<<<< index as key <<<< unique id (best practice)

*/




// the below is a component compositons
const AppLayout = ()=>{
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  )
};
 

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);