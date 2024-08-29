import { render, screen } from "@testing-library/react";
import { TherapeuticCare } from ".";
import correctImage from "@assets/imgs/imageToTherapeuticCare.jpg";

describe("<TherapeuticCare/>", () => {
   it("should render the component correctly", () => {
      render(<TherapeuticCare />);
      const title = screen.getByText("Como funcionam os atendimentos?");
      expect(title).toBeInTheDocument();
   });

   it("should render the image correctly", () => {
      render(<TherapeuticCare />);
      const image = screen.getByRole("img");
      expect(image).toHaveAttribute("src", correctImage);
   });
});
