import { Header } from ".";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "@utils/functions";

describe("<Header />", () => {
   it("should render the title of header", () => {
      renderWithProviders(<Header />);

      const title = screen.getByText(
         /Cirurgiã Dentista e Terapeuta Integrativa/i
      );
      expect(title).toBeInTheDocument();
   });

   it("should render the name 'Luana Vasconcellos Alvarenga'", () => {
      renderWithProviders(<Header />);

      const nameElement = screen.getByText("Luana Vasconcellos Alvarenga");
      expect(nameElement).toBeInTheDocument();
   });
});
