# React hooks-> it is normal Javascript utils/ build in functions and it was written by Facebook developer
-> this hooks present in react file in node_modules.
->purpose: to create a powerful variable(state variable) or function to change or modify the data and stored in it.
->there are many hooks concept in react but these two are using lot of time in developing application react.
  ->useState() - Superpowerful state variable in react. (80%) using in react.
  ->useEffect() = (20%) using in react.

# rendering -> whenever the state variable is changes or update, then react will re-render the component

# How web app and UI app fetch the data from the backend or API and there are two approach to fetch the data.
->1-Approach. loads->API(wait for 500ms to get the data and then)-> render (but it is poor approach to make Webapps that's why we are using second approach which are using in react.).

->2-Approach. loads-> render->API(call the data from backend and then)-> re-render the UI and website(that's why we are always using approach to make webapps).


# useEffect function will work, when the component render the jsx code inside it, then the useEffect function will run the code inside it. (after rendering of jsx inside the component, the useeffect function will executed)

# fetching data from backend using API by fetch function which was provide by JSEngine in browser. when we fetch the data in "network tab" and loading in our localHost then we got some error called "CROS" it standard for "Cross-Origin-Resource Sharing", why we are getting these error, because "the browser is not allowing us to access the API due to mismatching of localHost origin and backend origin", to slow this conflicts or issue we can use extension called cros chrome extension.

# Shimmer UI-> A shimmer UI is a version of the UI that doesn’t contain actual content, but instead mimics the layout and shapes of the content that will eventually appear. It uses a gradient animation that creates a shimmering effect over the placeholders, giving the user a sense of motion and progress.


# Routing -> nav to one component page to another component page and we have to install react-router-dom, this is a library which have Routing function to create router in our app. 
-> this routing function are commonly using to create routing and config in our app.
  ->createBrowserRouter -> to create router and we have to give some information to config the router like path.
  ->RouterProvider -> it will render all the path which is inside in the createBrowserRouter([...]);
  ->useRouteError -> it is a function(hook) and provide by react-router-dom library, through we can display more info about the error and we can config/create our own error page/component, when they are nav to some other page which is not in the app. 