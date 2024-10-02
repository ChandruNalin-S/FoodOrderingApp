import Contact from "../Contact"
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';




describe("test suite: Contact Up page",()=>{
  it("checking the contact us page is render by component or not",()=>{

    /*
      note: whenever to check the component or UI component, then we have to render it to the jsDom.
    */
  
  
    render(<Contact/>);/* render the component to jsDom or giving the component to jsDom for browser.behind the scene babel tries to convert jsx to html, so the jest will understand properly and also we include some library which will helpful for convert jsx to html is @babel/preset-react.*/
  
    const heading = screen.getByRole("heading");/* screen is a object which is given by "@testing-library/react" to use this we can get any data/dom like html on the screen.*/
  
    expect(heading).toBeInTheDocument();
  
  })
  
  it("checking whether button is present or not",()=>{
     //render to jsdom
     render(<Contact/>);
  
     //Quering 
     const buttonText = screen.getByText("Submit");
     
     //Assertion
     expect(buttonText).toBeInTheDocument();
  
  });
  
  it("checking whether input is present or not",()=>{
    render(<Contact/>);
  
    const inputBox = screen.getAllByRole("textbox");
  
    console.log(inputBox.length);
  
    expect(inputBox.length).toBe(2);
  });
});
