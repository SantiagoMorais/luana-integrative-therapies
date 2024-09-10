import { screen } from "@testing-library/react";
import { Benefits } from ".";
import { renderWithProviders } from "@utils/functions";

describe("<Benefits />", () => {
   it("should render the component correctly", () => {
      renderWithProviders(<Benefits />);
      const title = screen.getByText(/Benefício das Terapias Integrativas/i);
      expect(title).toBeInTheDocument();
   });

   it("should render all benefits", () => {
      renderWithProviders(<Benefits />);
      const benefits = screen.getAllByRole("listitem");
      expect(benefits).toHaveLength(5);
   });
});
