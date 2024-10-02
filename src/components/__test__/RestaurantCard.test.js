import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from "../mocks/resCardMock.json";
import '@testing-library/jest-dom';
import { DisplayOfferLabel} from "../RestaurantCard";
import '@testing-library/jest-dom';



it("checking whether the restaurant card is render or not",()=>{
  render(<RestaurantCard resData={MOCK_DATA} />);// send mock_data to json.

  const resCard = screen.getByText("Chinese Wok");
  
  expect(resCard).toBeInTheDocument();
});

it("checking whether the displayOfferLabel is display or not",()=>{

  const RestaurantCardOffered = DisplayOfferLabel(RestaurantCard);
  
  render(<RestaurantCardOffered resData={MOCK_DATA} />);

  const offerLabel = screen.getByText(/₹250 for two/i);

  expect(offerLabel).toBeInTheDocument();

});