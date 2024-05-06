import { render, screen } from "@testing-library/react"
import { AboutMe } from "."
import correctImage from "@assets/imgs/professionalImage.jpg"


describe("<AboutMe />", () => {
    it("should render the component correctly", () => {
        render(<AboutMe />);
        const title = screen.getByRole("heading", {name: /sobre mim/i});
        expect(title).toBeInTheDocument();
    })

    it("should render the image correctly", () => {
        render(<AboutMe />);
        const image = screen.getByRole("img");
        expect(image).toHaveAttribute("src", correctImage);
    });

    it("should render the text correctly", () => {
        render(<AboutMe />);
        const text = document.querySelectorAll(".text");
        expect(text).toMatchSnapshot();
    })
})