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

# fetching data from backend using API by fetch function which was provide by JSEngine in browser. when we fetch the data in "network tab" and loading in our localHost then we got some error called "CROS" it standard for "Cross-Origin-Resource Sharing", why we are getting these error, because "the browser is not allowing us to access the API due to mismatching of localHost origin and backend origin", to solve this conflicts or issue we can use extension called cros chrome extension.

# Shimmer UI-> A shimmer UI is a version of the UI that doesn’t contain actual content, but instead mimics the layout and shapes of the content that will eventually appear. It uses a gradient animation that creates a shimmering effect over the placeholders, giving the user a sense of motion and progress.


# Routing -> nav to one component page to another component page and we have to install react-router-dom, this is a library which have Routing function to create router in our app. 
-> this routing function are commonly using to create routing and config in our app.
  ->createBrowserRouter -> to create router and we have to give some information to config the router like path.
  ->RouterProvider -> it will render all the path which is inside in the createBrowserRouter([...]);
  ->useRouteError -> it is a function(hook) and provide by react-router-dom library, through we can display more info about the error and we can config/create our own error page/component, when they are nav to some other page which is not in the app. 


# 2 types of routing:
  -> client side routing. -> it is a single page application and replacing the component and not reloading the entire page.
  -> server side routing. -> it is traditional routing, why because, whenever we click the home page or about page, the network call will occur and get the data of clicked page like home.html or about.html from server.  



# <button onClick={()=>{
          // NEVER EVER DO UPDATE STATE VARIABLE DIRECTLY likr this->this.state.count = this.state.count + 1(this one is wrong way to update state variable lik this and will cause consistency in data); 

          this.setState({// setState function we can use any where inside the class based component. through this function we can update the count.
            count:this.state.count + 1
          })
          
        }>Count Increase</button>

# Important:" React Life Cycle methods in class based component:
  -> there are two phase in react life cycle in class based component:
      (mounting)/loading
      -> Render Phase
              -> constructor
              -> render
      -> Commit Phase
              -> Dom manipulation after render the component and reconciliation, find out the different btw previse virtual dom and new virtual dom, compare the dom and then updated the dom in website.
              ->componentDidMount()-> this function will ensure that component is loaded/mount in the website.
              if the state variable is update then it will render again and call the function called componentDidUpdate();
              ->componentDidUpdate()-> this function will ensure that component is updated in the website.
              ->componentWillUnMount()->  this function will stop/clear the component componentDidMount, if u are moving another page, why because if u not stop/clear then it will run background, so we have to clear the mess.(due to this is single page application)but (server based application)it won't happen/occur this mess because the page is reloading.

# note:"In react life cycle envirnoment"

 -> react always batch the render phase first and batch the commit phase.
 for example: In about component is a parent component and there are three child component is called.
 -> First, batch all render phase in each and every component and then, batch all commit phase in each and every component after updated in dom and call the componentDidMount()-> for the component is loaded.        
  
 In console how the component is working:

 ->Parent constructor
 ->Parent render
      (Render Phase- batch all render phase->constructor and render function)
      ->first (class)child constructor
      ->first(class)child render
      ->second(class)child constructor
      ->second (class)child render
      ->third (class)child constructor
      ->third (class)child render

      (Commit Phase- after render phase, the dom is updated and call the componentDidMount())
      ->first (class)child did mount
      ->second (class)child did mount
      ->third (class)child did mount
->Parent did mount

# Never ever compare react life cycle methods to functional component.

# while developing large scale application, there are many component inside the single js file and file size is huge so web browser cannot load properly and not optimize your website. so make your app optimize and large scale then we have to split our code.
 there are different way to call managing
-> Chunking
-> Code splitting
-> Dynamic Bundling
-> Lazy Loading
-> on demand loading
-> dynamic import

# to reduce size of the file we are splitting file by a component using lazy function and it present in react library.


# style/design website by
->Normal css
->styled component
->bootstrap
->ant design
->sass, scss
->material UI
->chakra UI
->tailwind css

# higher order component is a function, that get input as a function, and then enhance the function return as a component.

# we download react development tool extension in chrome, to see the UI and data in component tab and profiler tab is provide us recording thing, to record our application action, to see "how much time to render the component and update the UI".

# control component -> it is a component which is control by itself, not parent component.
# uncontrol component -> it is not control by itself but it can control by parenet component.

# Lifting State Up-> lifting the children component based on parent component using index.

# Context provides a way to pass data through the component tree without having to pass props down manually at every level."Advantage"-> to solve the props drilling.


# REDUX toolkit is a external libraries and it is used for state management or data management, it work likes a context in react but redux is most popular library for developing web application to manage state or data. 

# Redux toolkit have oun store called Redux Store, it is a global centeralize and larger object that contains data, to share common data any component in the application.

# Opertion in Redux store is!
  -> Write
  -> Read

  # Write opertion(storing data) process, for example add to cart
      -> when user click the add button,it dispatch the action to call reducer function and the reducer function is use to update or store the data in redux store.
      -> Each data is stored like slice because Redux store which contains of slice, so the add to cart data is store in cart slice of the redux store.

  # Read opertion(display data) process, for example add to cart
      ->after storing the data in redux store, if user wants to see the cart data , then there is a selector which use to connect the cart slice to cart button, if the cart slice is updated then the cart button will automatically updated because the cart button and cart slice in redux store is "subscribed to the store".


# Earlier, In redux(vanilla redux) we cannot mutate/change the state directly inside the redux-store, instead we have create copy of the state and after the update return the newstate as a original state, now a days in redux-toolkit we can update state or we have to update the state in the store but behind the code still vanilla redux work flow is working. 

# there was a libraries whose working behind the redux-toolkit is "immer", which is helpful to compare the older state with new updated state and then return updated state.


# "We are download redux dev tool in chrome extension" which will helpful for debugging code and find the error. also live the process of redux-store modification/updating.

# note: In previous redux, they were use redux middleware and thunk,which is used for storing API data inside in  the redux-store that's why they were used middleware and thunk.

# To overcome this middleware and thunk, redux developer created a query called redux quick query which is used for handling the fetch API data and storing in the redux-store.

# type of testing
  -> Manual testing
  ->Automated testing.

# types of testing for developer
  ->Unit testing - testing one piece of code or one small component in react/javascript.
  ->Integration testing - testing function of code or N no. of components simultaneously.
  ->End to End testing or e2e testing - to testing each and every action user makes in our application from login-in to login-out / entering in the application and after leaving the application.

# which library is used for testing application?
  -> "React testing library" - it is a standard library which is using for testing our application and external library. 

note:"React testing library" is doesn't exist in our application because we didn't create our application in "Create_React_App" command, it is common and default library while developing your application in Create_React_App command but instead we develop our application in scratch like install npm through the npm we install react and react-dom with some other package/library through the npm ,so we have to install React testing library using command or manual.


# In our React-Application we are using bunder called Parcel and Parcel using babel complier, which is used for convert jsx to make understandable format and send to the browser engine to render in web page and web browser engine is a javascript engine.

# React testing library use "jest" library behind the scene because jest another type of testing framework library using javascript.

# "this is the command to install React testing library" and we are install developing react testing library. command: "npm i -D @testing-library/react" 

# to install jest library the command is: npm i -D jest and behind the jest library, babel is also working, so we have to install babel dependencies. the command is :npm install --save-dev babel-jest @babel/core @babel/preset-env 

# setting up testing in our app:
 -> install react testing library.
 -> install jest javascript framework library.
 -> install babel dependencies.
 -> configure babel.
 -> configure Parcel Config file to disable default babel transpilation.
 -> after config the parcel, run the command to the test that,"we install all library and dependencies properly" and in terminal if you see no tests found then we install all libraries and dependencies properly. command:"npm run test".

 -> jest config using command: "npx jest --init" . when we run this command in terminal, it show some question we have to do , to config jest, once we complete the question then jest config file is display in the root folder like "jest.config.js"

 -> install jsdom library. using this command: "npm install --save-dev jest-environment-jsdom", the --save-dev it denotes -D. If you're using Jest 28 or later, jest-environment-jsdom package now must be installed separately.

 -> install @babel/preset-react in developing(-D) for enable jsx inside in test-case/ to make jsx work in testcase.

 -> config the @babel/preset-react inside in the babel config file.

 -> install npm i -D @testing-library/jest-dom, to make work with toBeInTheDocument() function and some other function.


note:"Jsdom" JavaScript Document Object Model (JSDOM) is a JavaScript-based headless browser that can be used to create a realistic testing environment. like browser, but not exact browser, when we run the test all the testcase will show on the browser-like environment in html format.

note: install latest version of npm install @testing-library/react@latest for avoid like-> "Warning: `ReactDOMTestUtils.act` is deprecated in favor of `React.act`. Import `act` from `react` instead of `react-dom/test-utils`. See https://react.dev/warnings/react-dom-test-utils for more info." 


# important:"Parcel have default babel, if we install babel dependencies again this will conflict the parcel babel, to avoid this we have" -> to create a file called .parcelrc in root folder and config the babel inside the parcelrc file to avoid conflict.



# how to create test file? syntax-> filename.test.js / filename.spec.js / filename.test.ts / filename.spec.ts.

# __test__ folder, __ it denotes dunder, inside the folder jest consider all the files are test file

# In test we are using like describe, it and test:
      -> describe - is test suite function, inside it contains multiple of test case.
      -> test and it - is a test case function and both are same.

"IMPORTANT:" coverage is create in our app file because it notes all the test file which is tested ,when we run the test file. "so we don't have to push in git, so we will ignore this coverage file and put it .gitignore file".

# why we are create mock fetch for jsdom, because jsdom cannot understand the fetch and it is provide by browsers, even the fetch function written in javascript but it's provided by browsers. so that's why we are creating exact fetch function for how the fetch function will work in global, "global" is a object and used for, whenever we render any component which contain about fetch and it will automatically given to the jsdom.

 ->jsdom is provide browser-like envirnoment but it cannot provide fetch or anything which is providing by browsers. 

 ->note"if u want to test file automattically without using command like npm run test" instead we can config automate test running in package.json inside we have to add " "watch-test":"jest --watch" "

# act function : whenever we use fetch or state update inside the component, then we have to rap the component with act() function in jest test file render.

# hooks in testing in jest and other language also like in jasmine ->afterAll(),beforeAll() and afterEach(), beforeEach();