import { render, screen } from "@testing-library/react"
import { AboutMe } from "."

describe("<AboutMe />", () => {
    it("should render the component correctly", () => {
        render(<AboutMe />);
        const title = screen.getByRole("heading", {name: /sobre mim/i});
        expect(title).toBeInTheDocument();
    })

    it("should render the image correctly", () => {
        render(<AboutMe />);
        const personalImage = screen.getByAltText("Foto luana no consultório");
        const clinicImage = screen.getByAltText("Imagem do consultório");
        expect(personalImage).toBeInTheDocument();
        expect(clinicImage).toBeInTheDocument();
    });

    it("should render the text correctly", () => {
        render(<AboutMe />);
        const text = document.querySelectorAll(".paragraph");
        expect(text).toMatchSnapshot();
    })
})