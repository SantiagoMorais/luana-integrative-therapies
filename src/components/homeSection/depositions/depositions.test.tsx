import { screen } from "@testing-library/react";
import { Depositions } from ".";
import data from "@json/index.json";
import { renderWithProviders } from "@utils/functions";

describe("<Depositions />", () => {
   it("should render the component correctly", () => {
      renderWithProviders(<Depositions />);
      const title = screen.getByText(/Depoimentos de pacientes/i);
      expect(title).toBeInTheDocument();
   });

   it("should render the number of depositions correctly", () => {
      renderWithProviders(<Depositions />);

      const depositions = document.querySelectorAll(".slide");
      const numberOfDepositions = data.depositions.length;

      expect(depositions).toHaveLength(numberOfDepositions);
   });
});
