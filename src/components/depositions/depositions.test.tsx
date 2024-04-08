import { render, screen } from "@testing-library/react"
import { Depositions } from "."

describe("<Depositions />", () => {
    it("should render the component correctly", () => {
        render(<Depositions />)
        const title = screen.getByText(/Depoimentos de pacientes/i)
        expect(title).toBeInTheDocument();
    })

    it("should render the number of depositions correctly", () => {
        render(<Depositions />)
        const depositions = screen.getAllByRole("listitem")
        expect(depositions).toHaveLength(3);
    })
})