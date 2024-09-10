import { screen } from "@testing-library/react";
import { TherapeuticCare } from ".";
import correctImage from "@assets/imgs/imageToTherapeuticCare.jpg";
import { renderWithProviders } from "@utils/functions";

describe("<TherapeuticCare/>", () => {
   it("should render the component correctly", () => {
      renderWithProviders(<TherapeuticCare />);
      const title = screen.getByText("Como funcionam os atendimentos?");
      expect(title).toBeInTheDocument();
   });

   it("should render the image correctly", () => {
      renderWithProviders(<TherapeuticCare />);
      const image = screen.getByRole("img");
      expect(image).toHaveAttribute("src", correctImage);
   });
});
