import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";



it('checking the header component whether is render or not', () => {

  /*
  In below code providing store to header because render can understand jsx and html but it won't know about react-redux store, so that's why we are pass appstore to header with BrowserRouter component, because In header we use link component that's why again we have to pass BrowserRouter to render.  
  */
  render(
   <BrowserRouter>
    <Provider store={appStore}>
      <Header/>
    </Provider>
  </BrowserRouter> 
  );

  const buttonLogin = screen.getByRole("button",{name:"login"});// we can specifycally point using {};

  expect(buttonLogin).toBeInTheDocument();

});

it("checking whether cart item is O in header",()=>{
  render(

    <BrowserRouter>
      <Provider store={appStore}>
        <Header/>
      </Provider>
    </BrowserRouter>
  );

  const cartItemZero = screen.getByText("Cart (0 items)"); 

  expect(cartItemZero).toBeInTheDocument();

});


it("check whether cart is present or not in header",()=>{
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header/>
      </Provider>
    </BrowserRouter>
  )

  const Cart = screen.getByText(/Cart/);// we can use regex in getByText and get specify text inside the html document.

  expect(Cart).toBeInTheDocument();

});


it("checking the logout button in header",()=>{
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header/>
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button",{name:"login"});

  fireEvent.click(loginButton);// fireEvent is used for making some action inside the code.

  const logOutButton = screen.getByRole("button",{name:"logout"});

  expect(logOutButton).toBeInTheDocument();

})




