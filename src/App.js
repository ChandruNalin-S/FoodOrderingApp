import React,{lazy, Suspense,useState,useEffect} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
//import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error"; 
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter , RouterProvider ,Outlet } from "react-router-dom";
import UserContext from "./components/UserContext";
//import Grocery from "./components/Grocery";
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

const Grocery = lazy(()=>// lazy is function is used to load our component based on the demand like when user like Grocery nav then the component on to the site and lazy split the component, so the component is not inside in the normal js, it will new js file to the browser. the function come from React library.this function never have opening"{" and closing "}".
  import("./components/Grocery")
);

const About = lazy(()=> import("./components/About"));


// the below is a component compositons
const AppLayout = ()=>{
  const [userName,setUserName] = useState();

  useEffect(()=>{
    const data = {
      name:"Chandru S",
    }
    setUserName(data.name);
  },[]);


  return (
    <UserContext.Provider value={{loggedUser:userName,setUserName}}>{/*UserContext.Provider is a component and provide context to everywhere in the application, when the context is called.*/}
      <div className="app">
        <Header />
        <Outlet />{/* Outlet is a component which is provided by react-router-dom, through this we can nav to children route, whenever we give a path, it will automatically understand and move to different children route */}
      </div>
    </UserContext.Provider>
  )
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    children:[
      {
        path:"/",
        element:<Body />
      },
      {
        path:"/About",
        element:<Suspense fallback={<h1>The About is loading</h1>}><About /></Suspense>
      },
      {
        path:"/Contact",
        element:<Contact />
      },
      {
        path:"/Grocery",
        element:<Suspense fallback={<h1>loading...</h1>}><Grocery /></Suspense>// the lazy component must inside suspense component. Suspense component help you to load the component fast so only the component jsx will be display. 
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu />
      }
    ],
    errorElement:<Error />
  }
])
 

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);