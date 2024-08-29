import { render, screen } from "@testing-library/react";
import { Hero } from ".";

describe("<Hero />", () => {
   it("should render the slogan correctly", () => {
      render(<Hero />);
      const slogan = document.querySelector(".slogan");
      expect(slogan).toBeInTheDocument();
   });

   it("should render the content of slogan correctly", () => {
      render(<Hero />);
      const slogan = document.querySelector(".subtitle");
      expect(slogan).toHaveTextContent(
         "Descubra uma jornada de cura e harmonia através de terapias integrativas."
      );
   });

   it("should render the icon correctly", () => {
      render(<Hero />);
      const icon = screen.getByTestId("fontAwesomeIcon");
      expect(icon).toBeInTheDocument();
   });
});
