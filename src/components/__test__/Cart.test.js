import { fireEvent, getByRole, render ,screen } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA_MENU from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../Cart";

global.fetch = jest.fn(()=>{
  return Promise.resolve({
    json:()=>{
      return Promise.resolve(MOCK_DATA_MENU);
    }
  })
})




it("checking whether the restraurant menu, header and cart is display or not",async()=>{
  await act(async()=>render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header/>
        <RestaurantMenu/>
      </Provider>
    </BrowserRouter>
  ));

  expect(screen.getByText("Value Combos (2)")).toBeInTheDocument();

  const accordianHeader = screen.getByText("Value Combos (2)");

  fireEvent.click(accordianHeader);

  const foodItems =  screen.getAllByTestId("foodItems");

  expect(foodItems.length).toBe(2);

});


it("should add items to the cart in cart component",async()=>{
  await act(async ()=>
    render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header/>
        <RestaurantMenu/>
        <Cart/>
      </Provider>
    </BrowserRouter>
  ));

  const addBtn =  screen.getAllByText("Add +");

  expect(addBtn.length).toBe(2);

  expect(screen.getByText("Cart (0 items)")).toBeInTheDocument();

  fireEvent.click(addBtn[0]);

  expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();

  fireEvent.click(addBtn[1]);

  expect(screen.getByText("Cart (2 items)")).toBeInTheDocument();

  const foodItems =  screen.getAllByTestId("foodItems");

  expect(foodItems.length).toBe(4);// because we use itemList component in cart component to display cart items.

  const clearCartBtn = screen.getByRole("button",{name:"Clear Cart"})

  fireEvent.click(clearCartBtn);

  expect(screen.getByText("Please Add the Product to Cart!")).toBeInTheDocument();

  expect(screen.getByText("Cart (0 items)")).toBeInTheDocument();
});