import { fireEvent, render,screen } from "@testing-library/react"
import Header from "../components/Header"
import { Provider } from 'react-redux';
import appstore from '../utils/appStore'
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom";

it("should load the header component", () => {
    render(
        <BrowserRouter>
            <Provider store={appstore}>
                <Header />
            </Provider>
        </BrowserRouter>
      
    );
    const loginbtn = screen.getByRole("button");
    expect(loginbtn).toBeInTheDocument();
});
it("should load login button check logout btn on click", () => {
    render(
        <BrowserRouter>
            <Provider store={appstore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    const getLogin = screen.getByRole("button", { name: 'login' });
    expect(getLogin).toBeInTheDocument();
    fireEvent.click(getLogin);
    const getLogout = screen.getByRole("button", { name: 'logout' });
    expect(getLogout).toBeInTheDocument();
});
it("should have 0 item initally in cart", () => {
    render(
        <BrowserRouter>
            <Provider store={appstore}>
                <Header />
            </Provider>
        </BrowserRouter>
      
    );
    const cartItems = screen.getByText("items:(0)");
    expect(cartItems).toBeInTheDocument();
});