import { screen } from "@testing-library/react";
import { Hero } from ".";
import { renderWithProviders } from "@utils/functions";

describe("<Hero />", () => {
   it("should render the slogan correctly", () => {
      renderWithProviders(<Hero />);
      const slogan = document.querySelector(".slogan");
      expect(slogan).toBeInTheDocument();
   });

   it("should render the content of slogan correctly", () => {
      renderWithProviders(<Hero />);
      const slogan = document.querySelector(".subtitle");
      expect(slogan).toHaveTextContent(
         "Descubra uma jornada de cura e harmonia através de terapias integrativas."
      );
   });

   it("should render the icon correctly", () => {
      renderWithProviders(<Hero />);
      const icon = screen.getByTestId("fontAwesomeIcon");
      expect(icon).toBeInTheDocument();
   });
});
