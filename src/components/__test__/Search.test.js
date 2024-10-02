import { BrowserRouter, json } from "react-router-dom";
import MOCK_DATA from "../mocks/mockResListData.json";
import Body from '../Body';
import { fireEvent, render,screen } from "@testing-library/react";
import { act } from "react";
import "@testing-library/jest-dom";


/*"FOR BELOW UNDERSTANDING"
 why we are create mock fetch for jsdom, because jsdom cannot understand the fetch and it is provide by browsers, even the fetch function written in javascript but it's provided by browsers. so that's why we are creating exact fetch function for how the fetch function will work in global, "global" is a object and used for, whenever we render any component which contain about fetch and it will automatically given to the jsdom.

 jsdom is provide browser-like envirnoment but it cannot provide fetch or anything which is providing by browsers. 

 note"if u want to test file automattically without using command like npm run test" instead we can config automate test running in package.json inside we have to add " "watch-test":"jest --watch" "

*/

// below this code are integration test


global.fetch  = jest.fn(()=>{
  return Promise.resolve({
      json: ()=>{
        return Promise.resolve(MOCK_DATA);
      }
  })
});


// act : whenever we use fetch or state update inside the component, then we have to rap the component with act() function.
it("checking whether the search is working or not", async()=>{
  await act(async ()=>
  render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  ));

  const searchBtn = screen.getByRole("button",{name:"search"});

  expect(searchBtn).toBeInTheDocument();

});


it("checking whether the restaurant card is display or not based on burger input",async ()=>{
  await act(async()=>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    ));

    /*
      getByTestId is used for pointing the dom directly by adding data-testid to any dom, to search or check.

      below code: instead of click any action in UI or webpage, through our code we can do it.
    
    */

    const cardsBeforeSearch = screen.getAllByTestId("resCard");

    expect(cardsBeforeSearch.length).toBe(8);

    const searchBtn = screen.getByRole("button",{name:"search"});

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput,{target:{value:"burger"}});

    fireEvent.click(searchBtn);

    const cards = screen.getAllByTestId("resCard");

    expect(cards.length).toBe(1);
});


it("checking whether the top rating is working or not and display restraurantcard",async()=>{
  await act(async ()=>
    render(
    <BrowserRouter>
      <Body/>
    </BrowserRouter> 
  ));

  const totalCards = screen.getAllByTestId("resCard");

  expect(totalCards.length).toBe(8);

  const topRatingBtn = screen.getByRole("button",{name:"Top Rating"});

  fireEvent.click(topRatingBtn);

  const afterTopRatingSearchbtn = screen.getAllByTestId("resCard");

  expect(afterTopRatingSearchbtn.length).toBe(7);

});