import { render, screen } from "@testing-library/react";
import { AboutMe } from ".";

describe("<AboutMe />", () => {
   it("should render the component correctly", () => {
      render(<AboutMe />);
      const title = screen.getByRole("heading", { name: /sobre mim/i });
      expect(title).toBeInTheDocument();
   });

   it("should render the image correctly", () => {
      render(<AboutMe />);
      const personalImage = screen.getAllByAltText("Foto luana no consultório");
      personalImage.map((img) => expect(img).toBeInTheDocument());
      expect(personalImage).toHaveLength(3);
   });

   it("should render the text correctly", () => {
      render(<AboutMe />);
      const text = document.querySelectorAll(".paragraph");
      expect(text).toMatchSnapshot();
   });
});
