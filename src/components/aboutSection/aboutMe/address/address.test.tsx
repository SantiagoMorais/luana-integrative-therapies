import { screen } from "@testing-library/react";
import { Address } from ".";
import { googleMapsLink } from "@utils/variables";
import { renderWithProviders } from "@utils/functions";

describe("<Address />", () => {
   it("should render the comonent correctly", () => {
      renderWithProviders(<Address />);
      const title = screen.getByText(/Como chegar ao consultório/i);
      expect(title).toBeInTheDocument();
   });

   it("should the map image redirect the user to the correct page", () => {
      renderWithProviders(<Address />);
      const mapLink = document.querySelector(".seeLocation");
      expect(mapLink).toHaveAttribute("href", googleMapsLink);
   });
});
