import "@testing-library/jest-dom"
import { render,screen } from "@testing-library/react"
import RestCard from "../components/ResCard"
import RestarentwithIsVeg from '../components/ResCard';
import MOCK_DATA from '../MockData/rescardData.json'
import MOCK_DATA2 from '../MockData/rescardDataIsVeg.json'
it("should render resturent card with props", () => {
 
    render(<RestCard resData={MOCK_DATA} />)
    const namerest = screen.getByText("Subway");
    expect(namerest).toBeInTheDocument();
    
})
it("should render the is veg labeled ie higher order component", () => {
    render(<RestarentwithIsVeg resData={MOCK_DATA2} />)
    const name = screen.getByText("Baskin Robbins - Ice Cream Desserts");
    expect(name).toBeInTheDocument();
    
})