import { render, screen } from "@testing-library/react"
import { Benefits } from "."

describe("<Benefits />", () => {
    it('should render the component correctly', () => {
        render(<Benefits />)
        const title = screen.getByText(/Benefício das Terapias Integrativas/i)
        expect(title).toBeInTheDocument();
    })

    it('should render all benefits', () => {
        render(<Benefits />)
        const benefits = screen.getAllByRole("listitem")
        expect(benefits).toHaveLength(5);
    })
})