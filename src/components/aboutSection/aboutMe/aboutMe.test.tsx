import { screen } from "@testing-library/react";
import { AboutMe } from ".";
import { renderWithProviders } from "@utils/functions";

describe("<AboutMe />", () => {
   it("should render the component correctly", () => {
      renderWithProviders(<AboutMe />);
      const title = screen.getByRole("heading", { name: /sobre mim/i });
      expect(title).toBeInTheDocument();
   });

   it("should render the image correctly", () => {
      renderWithProviders(<AboutMe />);
      const personalImage = screen.getAllByAltText("Foto luana no consultório");
      personalImage.map((img) => expect(img).toBeInTheDocument());
      expect(personalImage).toHaveLength(3);
   });

   it("should render the text correctly", () => {
      renderWithProviders(<AboutMe />);
      const text = document.querySelectorAll(".paragraph");
      expect(text).toMatchSnapshot();
   });
});
