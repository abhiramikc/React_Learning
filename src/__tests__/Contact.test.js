import { render,screen } from "@testing-library/react"
import Contact from "../components/Contact"
import "@testing-library/jest-dom"

describe("Contact Page check: ", () => {
test("to test the contact page", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})

test("to test the contact page text input", () => {
    render(<Contact />)
    const inputboxes = screen.getAllByRole("textbox");
    expect(inputboxes.length).toBe(2);
});
it("should display the button", () => {
    render(<Contact />)
    const btncheck = screen.getByText("submit");
    expect(btncheck).toBeInTheDocument();
});
})
