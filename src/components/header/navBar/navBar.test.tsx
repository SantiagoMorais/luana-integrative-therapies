import { fireEvent, render, screen } from "@testing-library/react";
import { NavBar } from ".";
import { BrowserRouter } from "react-router-dom";

describe("<NavBar />", () => {
   it("should render the links of navigation bar", async () => {
      render(
         <BrowserRouter>
            <NavBar />
         </BrowserRouter>
      );
      const links = screen.queryAllByRole("listitem");
      expect(links).toHaveLength(5);
   });
});

describe("<NavBar /> responsive layouts", () => {
   it("should the button receive the className 'clicked' when it's clicked", () => {
      render(
         <BrowserRouter>
            <NavBar />
         </BrowserRouter>
      );

      const button = screen.getByTestId("accordionButton");
      expect(button).toBeInTheDocument();

      expect(button.classList.contains("clicked")).toBeFalsy();
      fireEvent.click(button);
      expect(button.classList.contains("clicked")).toBeTruthy();
   });

   it("should the fontAwesomeIcon changes its icon attribute when the button is clicked", () => {
      render(
         <BrowserRouter>
            <NavBar />
         </BrowserRouter>
      );

      const button = screen.getByTestId("accordionButton");
      const icon = screen.getByTestId("hamburgerIcon");
      expect(icon).toHaveAttribute(`data-icon`, "bars");

      fireEvent.click(button);
      expect(icon).toHaveAttribute(`data-icon`, "xmark");
   });
});
