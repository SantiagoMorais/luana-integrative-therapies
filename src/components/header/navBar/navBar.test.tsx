import { fireEvent, screen } from "@testing-library/react";
import { NavBar } from ".";
import { navigationLinks } from "@json/index.json";
import { renderWithProviders } from "@utils/functions";

describe("<NavBar />", () => {
   it("should render the links of navigation bar", async () => {
      renderWithProviders(<NavBar />);

      const linksLength = navigationLinks.length;
      const links = screen.queryAllByRole("listitem");

      expect(links).toHaveLength(linksLength);
   });
});

describe("<NavBar /> responsive layouts", () => {
   it("should the button receive the className 'clicked' when it's clicked", () => {
      renderWithProviders(<NavBar />);

      const button = screen.getByTestId("accordionButton");
      expect(button).toBeInTheDocument();

      expect(button.classList.contains("clicked")).toBeFalsy();
      fireEvent.click(button);
      expect(button.classList.contains("clicked")).toBeTruthy();
   });

   it("should the fontAwesomeIcon changes its icon attribute when the button is clicked", () => {
      renderWithProviders(<NavBar />);

      const button = screen.getByTestId("accordionButton");
      const icon = screen.getByTestId("hamburgerIcon");
      expect(icon).toHaveAttribute(`data-icon`, "bars");

      fireEvent.click(button);
      expect(icon).toHaveAttribute(`data-icon`, "xmark");
   });
});
