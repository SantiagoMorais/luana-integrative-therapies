import { render, screen } from "@testing-library/react";
import { Footer } from "./index";
import { BrowserRouter } from "react-router-dom";

describe("<Footer />", () => {
   it("should render the component correctly", () => {
      render(<Footer />, { wrapper: BrowserRouter });
      const title = screen.getByText(/Me encontre nas minhas mídias sociais/i);
      expect(title).toBeInTheDocument();
   });

   it("should the buttons have the correct url to the corresponding button", () => {
      render(<Footer />, { wrapper: BrowserRouter });
      const social = document.querySelector(".navigation");
      expect(social).toMatchSnapshot();
   });

   it("should render all links correctly", () => {
      render(<Footer />, { wrapper: BrowserRouter });
      const navLinks = document.querySelectorAll(".section");

      expect(navLinks).toHaveLength(4);
   });
});
