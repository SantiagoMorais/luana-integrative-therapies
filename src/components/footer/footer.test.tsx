import { screen } from "@testing-library/react";
import { Footer } from "./index";
import { navigationLinks } from "@json/index.json";
import { renderWithProviders } from "@utils/functions";

describe("<Footer />", () => {
   it("should render the component correctly", () => {
      renderWithProviders(<Footer />);
      const title = screen.getByText(/Me encontre nas minhas mídias sociais/i);
      expect(title).toBeInTheDocument();
   });

   it("should the buttons have the correct url to the corresponding button", () => {
      renderWithProviders(<Footer />);
      const social = document.querySelector(".navigation");
      expect(social).toMatchSnapshot();
   });

   it("should render all links correctly", () => {
      renderWithProviders(<Footer />);

      const navLinks = document.querySelectorAll(".section");
      const linksLength = navigationLinks.length;

      expect(navLinks).toHaveLength(linksLength);
   });
});
