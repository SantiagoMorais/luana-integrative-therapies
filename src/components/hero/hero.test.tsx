import { render, screen } from "@testing-library/react"
import { Hero } from "."

describe("<Hero />", () => {
    it('should render the slogan correctly', () => {
        render(<Hero />);
        const slogan = screen.getByRole("heading")
        expect(slogan).toHaveClass("slogan");
    })

    it('should render the content of slogan correctly', () => {
        render(<Hero />);
        const slogan = screen.getByRole("heading")
        expect(slogan).toHaveTextContent("Descubra uma jornada de cura e harmonia através de terapias integrativas.");
    })

    it('should render the icon correctly', () => {
        render(<Hero />)
        const icon = screen.getByTestId("fontAwesomeIcon")
        expect(icon).toBeInTheDocument();
    })
})